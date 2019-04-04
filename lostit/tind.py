'''
tind.py: code for interacting with Caltech.TIND.io

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2018 by the California Institute of Technology.  This code is
open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

import json
import requests
from lxml import html
from bs4 import BeautifulSoup

import lostit
from lostit.exceptions import *
from lostit.records import HoldRecord
from lostit.debug import log


# Global constants.
# .............................................................................

_USER_AGENT_STRING = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/59.0.3071.109 Chrome/59.0.3071.109 Safari/537.36'
'''
Using a user-agent string that identifies a browser seems to be important
in order to make Shibboleth or TIND return results.
'''

_SHIBBED_LOST_URL = 'https://caltech.tind.io/youraccount/shibboleth?referer=/admin2/bibcirculation/requests%3F%23item_statuses%3D7%26sort%3Drequest_date%26sort_dir%3Dasc'
'''
The lost list URL, via the Caltech Shibboleth login.
'''


# Class definitions.
# .............................................................................

class TindRecord(LostRecord):
    '''Class to store structured representations of a TIND request.'''

    def __init__(self, json_record):
        '''json_record = single 'data' record from the raw json returned by
        the TIND.io ajax call.
        '''
        super().__init__()
        self.raw_json = json_record
        self.parse_requester_details(json_record)
        self.parse_item_details(json_record)


    def parse_requester_details(self, json_record):
        relevant_fragment = json_record[0]
        soup = BeautifulSoup(relevant_fragment, features='lxml')
        self.requester_url = soup.a['href']
        self.requester_name = soup.a.get_text().strip()
        self.requester_type = soup.body.small.get_text().strip()


    def parse_item_details(self, json_record):
        relevant_fragment = json_record[1]
        soup = BeautifulSoup(relevant_fragment, features='lxml')
        self.item_details_url = soup.body.a['href']
        self.item_title = soup.body.a.get_text().strip()

        if soup.body.small.find('i'):
            due_string = soup.body.small.i['data-original-title']
            if 'Due date' in due_string:
                start = due_string.find(': ')
                end = due_string.find('\n')
                self.date_due = due_string[start + 2 : end]
            if 'Overdue letters' in due_string:
                start = due_string.find('Overdue letters sent: ')
                self.overdue_notices_count = due_string[start + 22 :]

            self.item_loan_url = soup.body.small.a['href']
            self.item_loan_status = soup.body.small.a.get_text().lower().strip()
        elif 'lost' in str(soup.body.small).lower():
            self.item_loan_status = 'lost'
        elif 'on hold' in str(soup.body.small).lower():
            self.item_loan_status = 'on hold'
        elif 'on shelf' in str(soup.body.small).lower():
            self.item_loan_status = 'on shelf'

        relevant_fragment = json_record[2]
        soup = BeautifulSoup(relevant_fragment, features='lxml')
        self.item_record_url = soup.body.a['href']
        self.item_barcode = soup.body.a.get_text().strip()
        spans = soup.body.find_all('span')
        self.item_call_number = spans[1].get_text().strip()

        relevant_fragment = json_record[3]
        soup = BeautifulSoup(relevant_fragment, features='lxml')
        self.date_requested = soup.body.span.get_text().strip()

        relevant_fragment = json_record[4]
        soup = BeautifulSoup(relevant_fragment, features='lxml')
        self.date_last_notice_sent = soup.span['data-original-title']
        self.overdue_notices_count = soup.span.get_text().strip()

        relevant_fragment = json_record[5]
        soup = BeautifulSoup(relevant_fragment, features='lxml')
        self.holds_count = soup.body.p.get_text().strip()

        relevant_fragment = json_record[6]
        soup = BeautifulSoup(relevant_fragment, features='lxml')
        self.item_location_name = soup.body.span['data-original-title']
        self.item_location_code = soup.body.span.get_text().strip()


# Login code.
# .............................................................................

def records_from_tind(access_handler, notifier, tracer):
    if __debug__: log('Starting procedure for connecting to tind.io')
    json_data = tind_json(access_handler, notifier, tracer)
    if not json_data:
        return []
    records_data = json_data['recordsTotal']
    if records_data:
        num_records = records_data[0][0]
        if num_records < 1:
            return []
    if __debug__: log('Got {} records from tind.io', num_records)
    records = []
    for json_record in json_data['data']:
        tr = TindRecord(json_record)
        # Special hack: the way the holds are being done with Tind, we only
        # need to retrieve the new holds that are marked "on shelf".
        if 'on shelf' in tr.item_loan_status:
            records.append(tr)
    if __debug__: log('Returning {} "on shelf" records', len(records))
    return records


def tind_json(access_handler, notifier, tracer):
    # Loop the login part in case the user enters the wrong password.
    logged_in = False
    while not logged_in:
        # Create a blank session and hack the user agent string.
        session = requests.Session()
        session.headers.update( { 'user-agent': _USER_AGENT_STRING } )

        # Start with the full destination path + Shibboleth login component.
        try:
            if __debug__: log('Issuing network get to tind.io shibboleth URL')
            res = session.get(_SHIBBED_HOLD_URL, allow_redirects = True)
            if __debug__: log('Succeeded in network get to tind.io shibboleth URL')
        except Exception as err:
            details = 'exception connecting to tind.io: {}'.format(err)
            notifier.fatal('Failed to connect to tind.io -- try again later', details)
            raise ServiceFailure(details)
        if res.status_code >= 300:
            details = 'tind.io shib request returned status {}'.format(res.status_code)
            notifier.fatal('Unexpected network result -- please inform developers', details)
            raise ServiceFailure(details)

        # Now do the login step.
        user, pswd, cancelled = access_handler.name_and_password()
        if cancelled:
            if __debug__: log('user cancelled out of login dialog')
            raise UserCancelled
        if not user or not pswd:
            if __debug__: log('empty values returned from login dialog')
            return None
        tree = html.fromstring(res.content)
        sessionid = session.cookies.get('JSESSIONID')
        next_url = 'https://idp.caltech.edu/idp/profile/SAML2/Redirect/SSO;jsessionid={}?execution=e1s1'.format(sessionid)
        login_data = sso_login_data(user, pswd)
        try:
            if __debug__: log('Issuing network post to idp.caltech.edu')
            res = session.post(next_url, data = login_data, allow_redirects = True)
            if __debug__: log('Succeeded in network post to idp.caltech.edu')
        except Exception as err:
            details = 'exception connecting to idp.caltech.edu: {}'.format(err)
            notifier.fatal('Failed to connect to tind.io', details)
            raise ServiceFailure(details)
        logged_in = bool(str(res.content).find('Forgot your password') <= 0)
        if not logged_in and not notifier.yes_no('Incorrect login. Try again?'):
            if __debug__: log('user cancelled access login')
            raise UserCancelled

    # Extract the SAML data and follow through with the action url.
    # This is needed to get the necessary cookies into the session object.
    tracer.update('Extracting data from TIND')
    tree = html.fromstring(res.content)
    if tree is None or tree.xpath('//form[@action]') is None:
        details = 'Caltech Shib access result does not have expected form'
        notifier.fatal('Unexpected network result -- please inform developers', details)
        raise ServiceFailure(details)
    next_url = tree.xpath('//form[@action]')[0].action
    SAMLResponse = tree.xpath('//input[@name="SAMLResponse"]')[0].value
    RelayState = tree.xpath('//input[@name="RelayState"]')[0].value
    saml_payload = {'SAMLResponse': SAMLResponse, 'RelayState': RelayState}
    try:
        if __debug__: log('Issuing network post to {}', next_url)
        res = session.post(next_url, data = saml_payload, allow_redirects = True)
        if __debug__: log('Succeeded in issuing network post')
    except Exception as err:
        details = 'exception connecting to tind.io: {}'.format(err)
        notifier.fatal('Unexpected network problem -- try again later', details)
        raise ServiceFailure(details)
    if res.status_code != 200:
        details = 'tind.io action post returned status {}'.format(res.status_code)
        notifier.fatal('Caltech.tind.io circulation page failed to respond', details)
        raise ServiceFailure(details)

    # At this point, the session object has Invenio session cookies and
    # Shibboleth IDP session data.  We also have the TIND page we want,
    # but there's a catch: the TIND page contains a table that is filled
    # in using AJAX.  The table in the HTML we have at this point is
    # empty!  We need to fake the AJAX call to retrieve the data that is
    # used by TIND's javascript (in their bibcirculation.js) to fill in
    # the table.  I found this gnarly URL by studying the network
    # requests made by the page when it's loaded.

    ajax_url = 'https://caltech.tind.io/admin2/bibcirculation/requests?draw=1&order%5B0%5D%5Bdir%5D=asc&start=0&length=1000&search%5Bvalue%5D=&search%5Bregex%5D=false&sort=request_date&sort_dir=asc'
    ajax_headers = {"X-Requested-With": "XMLHttpRequest",
                    "User-Agent": _USER_AGENT_STRING}
    try:
        if __debug__: log('Issuing ajax call to tind.io')
        res = session.get(ajax_url, headers = ajax_headers)
        if __debug__: log('Succeeded in issuing ajax call to tind.io')
    except Exception as err:
        details = 'exception connecting to tind.io bibcirculation page {}'.format(err)
        notifier.fatal('Unable to get data from Caltech.tind.io circulation page', details)
        raise ServiceFailure(details)
    if res.status_code != 200:
        details = 'tind.io ajax get returned status {}'.format(res.status_code)
        notifier.fatal('Caltech.tind.io failed to return hold data', details)
        raise ServiceFailure(details)
    decoded = res.content.decode('utf-8')
    json_data = json.loads(decoded)
    if 'recordsTotal' not in json_data:
        details = 'Could not find a "recordsTotal" field in returned data'
        notifier.fatal('Caltech.tind.io return results that we could not intepret', details)
        raise ServiceFailure(details)
    records_total = json_data['recordsTotal'][0][0]
    if records_total != len(json_data['data']):
        details = 'TIND "recordsTotal" value = {} but we only got {} records'.format(
            records_total, len(json_data['data']))
        notifier.fatal('Failed to get complete list of records from TIND', details)
        raise InternalError(details)
    return json_data


def sso_login_data(user, pswd):
    return {
        'timezoneOffset'   : 0,
        'j_username'       : user,
        'j_password'       : pswd,
        '_eventId_proceed' : 'Log In'
    }
