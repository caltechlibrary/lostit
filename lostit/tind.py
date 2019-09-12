'''
tind.py: code for interacting with Caltech.TIND.io

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2018-2019 by the California Institute of Technology.  This code
is open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

import json
from   nameparser import HumanName
import re
import requests
from lxml import html
from bs4 import BeautifulSoup

import lostit
from lostit.debug import log
from lostit.exceptions import *
from lostit.network import net
from lostit.records import LostRecord



# Global constants.
# .............................................................................

_USER_AGENT_STRING = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)'
'''
Using a user-agent string that identifies a browser seems to be important
in order to make Shibboleth or TIND return results.
'''

_SHIBBED_LOST_URL = 'https://caltech.tind.io/youraccount/shibboleth?referer=https%3A//caltech.tind.io/%3F'
'''
URL to start the Shibboleth authentication process for the Caltech TIND page.
'''

_SSO_URL = 'https://idp.caltech.edu/idp/profile/SAML2/Redirect/SSO'
'''
Root URL for the Caltech SAML steps.
'''



# Class definitions.
# .............................................................................

class TindLostRecord(LostRecord):
    '''Class to store structured representations of a TIND request.'''

    def __init__(self, json_dict, tind_interface, session):
        '''json_record = single 'data' record from the raw json returned by
        the TIND.io ajax call.
        '''
        super().__init__()

        # We get certain attributes on demand.  Setting them initially to None
        # (as opposed to '') is the marker it hasn't been set.
        self.requester_name  = None
        self.requester_email = None
        self.requester_type  = None
        self.requester_url   = None
        self.date_requested  = None

        # The following are additional attributes for Tind records.
        self._orig_data   = json_dict
        self._tind        = tind_interface
        self._session     = session
        self._loan_data   = ''
        self._patron_data = ''
        self._filled      = False

        # The rest is initialization of values for a record.
        title_text = json_dict['title']
        author_text = ''
        # 'Title' field actually contains author too, so pull it out.
        if title_text.find(' / ') > 0:
            start = title_text.find(' / ')
            self.item_title = title_text[:start].strip()
            author_text = title_text[start + 3:].strip()
        elif title_text.find('[by]') > 0:
            start = title_text.find('[by]')
            self.item_title = title_text[:start].strip()
            author_text = title_text[start + 5:].strip()
        else:
            self.item_title = title_text
        if author_text:
            self.item_author = first_author(author_text)

        self.item_call_number   = json_dict['call_no']
        self.item_location_name = json_dict['location_name']
        self.item_location_code = json_dict['location_code']
        self.item_loan_status   = json_dict['status']
        self.item_tind_id       = json_dict['id_bibrec']
        self.item_barcode       = json_dict['barcode']
        self.item_type          = json_dict['item_type']
        self.holds_count        = json_dict['number_of_requests']
        self.date_modified      = json_dict['modification_date']

        links                   = json_dict['links']
        self.item_record_url    = 'https://caltech.tind.io/record/' + str(self.item_tind_id)
        self.item_details_url   = 'https://caltech.tind.io' + links['barcode']


    # Note: in the following property handlers setters, the stored value has
    # to be in a property with a DIFFERENT NAME (here, with a leading
    # underscore) to avoid infinite recursion.

    @property
    def requester_name(self):
        if self._requester_name == None:
            self._fill_requester_info()
        return self._requester_name


    @requester_name.setter
    def requester_name(self, value):
        self._requester_name = value


    @property
    def requester_email(self):
        if self._requester_email == None:
            self._fill_requester_info()
        return self._requester_email


    @requester_email.setter
    def requester_email(self, value):
        self._requester_email = value


    @property
    def requester_url(self):
        if self._requester_url == None:
            self._fill_requester_info()
        return self._requester_url


    @requester_url.setter
    def requester_url(self, value):
        self._requester_url = value


    @property
    def requester_type(self):
        if self._requester_type == None:
            self._fill_requester_info()
        return self._requester_type


    @requester_type.setter
    def requester_type(self, value):
        self._requester_type = value


    @property
    def date_requested(self):
        if self._date_requested == None:
            self._fill_requester_info()
        return self._date_requested


    @date_requested.setter
    def date_requested(self, value):
        self._date_requested = value


    def _fill_requester_info(self):
        if self._filled:
            return
        # Though we haven't done anything yet, we have to prevent loops due
        # to incomplete data, so we don't wait until the end to set this.
        self._filled = True

        # Get what we can from the loan details page.
        loans = self._tind.loan_details(self.item_tind_id, self._session)
        self._fill_loan_details(loans)

        # Get what we can from the loan details page.
        patron = self._tind.patron_details(self._requester_name,
                                           self._requester_url, self._session)
        self._fill_patron_details(patron)


    def _fill_loan_details(self, loans):
        # If we can't find values, then we leave the following.
        self._requester_name = ''
        self._requester_url = ''
        self._date_requested = ''

        if loans:
            # Save the loans page in case we need it later.
            self._loan_data = loans
            # Parse it and pull out what we can.
            soup = BeautifulSoup(loans, features='lxml')
            tables = soup.body.find_all('table')
            if len(tables) < 2:
                if __debug__: log('no loan details => no requests')
                return

            # After the header row, the table contains a list of borrowers for
            # the item.  Since a given item may have multiple copies, it's
            # possible for a copy other than the lost one to have a loan on it.
            # Therefore, we start from the bottom of the table and work our
            # way backwards, comparing bar codes, to see if the lost copy has
            # a loan request on it.
            borrower_table = tables[1]
            for row in reversed(borrower_table.find_all('tr')[1:]):
                cells = row.find_all('td')
                if len(cells) < 10:
                    if __debug__: log('loan details missing expected table cells')
                    return
                barcode = cells[5].get_text()
                if barcode != self.item_barcode:
                    continue
                # If we get this far, we found a loan on this lost book.
                self._requester_name = cells[0].get_text()
                self._requester_url = cells[0].a['href']
                self._date_requested = cells[9].get_text()
                # Date is actually date + time, so strip the time part.
                end = self._date_requested.find(' ')
                self._date_requested = self._date_requested[:end]


    def _fill_patron_details(self, patron):
        # If we can't find values, then we leave the following.
        self._requester_email = ''
        self._requester_type = ''

        if patron:
            # Save the patron page in case we need it later.
            self._patron_data = patron
            soup = BeautifulSoup(patron, features='lxml')
            tables = soup.body.find_all('table')
            if len(tables) < 2:
                if __debug__: log('patron data missing expected table')
                return
            personal_table_rows = tables[1].find_all('tr')
            if len(personal_table_rows) < 9:
                if __debug__: log('patron data missing expected table cells')
                return
            self._requester_email = personal_table_rows[6].find('td').get_text()
            self._requester_type = personal_table_rows[8].find('td').get_text()


class Tind(object):
    '''Class to interface Lost It! to TIND.io.'''

    def __init__(self, accesser, notifier, tracer):
        self._accesser = accesser
        self._notifier = notifier
        self._tracer   = tracer


    def records(self):
        if __debug__: log('starting procedure for connecting to tind.io')
        session = self._tind_session()
        json_data = self._tind_json(session)
        if not json_data:
            if __debug__: log('no data received from tind')
            return []
        num_records = len(json_data['data'])
        if num_records < 1:
            if __debug__: log('record list from tind is empty')
            return []
        if __debug__: log('got {} records from tind.io', num_records)
        return [TindLostRecord(r, self, session) for r in json_data['data']]


    def _tind_session(self):
        '''Connects to TIND.io using Shibboleth and return session object.'''
        # Shortcuts to make this code more readable
        fatal = self._notifier.fatal
        yes_no = self._notifier.yes_no

        self._tracer.update('Authenticating user to TIND')
        session = None
        logged_in = False
        # Loop the login part in case the user enters the wrong password.
        while not logged_in:
            # Create a blank session and hack the user agent string.
            session = requests.Session()
            session.headers.update( { 'user-agent': _USER_AGENT_STRING } )

            # Access the first page to get the session data, and do it before
            # asking the user for credentials in case this fails.
            self._tind_request(session, 'get', _SHIBBED_LOST_URL, None, 'Shib login page')
            sessionid = session.cookies.get('JSESSIONID')

            # Now get the credentials.
            user, pswd, cancelled = self._accesser.name_and_password()
            if cancelled:
                if __debug__: log('user cancelled out of login dialog')
                raise UserCancelled
            if not user or not pswd:
                if __debug__: log('empty values returned from login dialog')
                return None
            login = {'j_username'       : user,
                     'j_password'       : pswd,
                     '_eventId_proceed' : ''}

            # SAML step 1
            next_url = '{};jsessionid={}?execution=e1s1'.format(_SSO_URL, sessionid)
            self._tind_request(session, 'post', next_url, login, 'e1s1')

            # SAML step 2.  Store the content for use later below.
            next_url = '{};jsessionid={}?execution=e1s2'.format(_SSO_URL, sessionid)
            content = self._tind_request(session, 'post', next_url, login, 'e1s2')

            # Did we succeed?
            logged_in = bool(str(content).find('Forgot your password') <= 0)
            if not logged_in and not yes_no('Incorrect login. Try again?'):
                if __debug__: log('user cancelled access login')
                raise UserCancelled

        # Extract the SAML data and follow through with the action url.
        # This is needed to get the necessary cookies into the session object.
        if __debug__: log('data received from idp.caltech.edu')
        tree = html.fromstring(content)
        if tree is None or tree.xpath('//form[@action]') is None:
            details = 'Caltech Shib access result does not have expected form'
            fatal('Unexpected TIND result -- please inform developers', details)
            raise ServiceFailure(details)
        next_url = tree.xpath('//form[@action]')[0].action
        SAMLResponse = tree.xpath('//input[@name="SAMLResponse"]')[0].value
        RelayState = tree.xpath('//input[@name="RelayState"]')[0].value
        saml_payload = {'SAMLResponse': SAMLResponse, 'RelayState': RelayState}
        try:
            if __debug__: log('issuing network post to {}', next_url)
            res = session.post(next_url, data = saml_payload, allow_redirects = True)
        except Exception as err:
            details = 'exception connecting to TIND: {}'.format(err)
            fatal('Server problem -- try again later', details)
            raise ServiceFailure(details)
        if res.status_code != 200:
            details = 'TIND network post returned status {}'.format(res.status_code)
            fatal('Caltech.tind.io circulation page failed to respond', details)
            raise ServiceFailure(details)
        if __debug__: log('successfully created session with caltech.tind.io')
        return session


    def _tind_request(self, session, get_or_post, url, data, purpose):
        access = session.get if get_or_post == 'get' else session.post
        try:
            if __debug__: log('issuing network {} for {}', get_or_post, purpose)
            req = access(url, data = data, allow_redirects = True)
        except Exception as err:
            details = 'exception connecting to TIND: {}'.format(err)
            fatal('Unable to connect to TIND -- try later', details)
            raise ServiceFailure(details)
        if req.status_code >= 300:
            details = 'Shibboleth returned status {}'.format(req.status_code)
            fatal('Service failure -- please inform developers', details)
            raise ServiceFailure(details)
        return req.content


    def _tind_json(self, session):
        '''Return the data from using AJAX to search tind.io's global lists.'''

        # The session object has Invenio session cookies and Shibboleth IDP
        # session data.  Now we have to invoke the Ajax call that would be
        # triggered by typing in the search box and clicking "Search" at
        # https://caltech.tind.io/lists/.  To figure out the parameters and
        # data needed, I used the data inspectors in a browser to look at the
        # JS script libraries loaded by the page, especially globaleditor.js,
        # to find the Ajax invocation code and figure out the URL.

        ajax_url     = 'https://caltech.tind.io/lists/dt_api'
        ajax_headers = {'X-Requested-With' : 'XMLHttpRequest',
                        "Content-Type"     : "application/json",
                        'User-Agent'       : _USER_AGENT_STRING}

        # Note: this initial value of the data payload is changed further below.
        #
        # About the fields in 'data': I found the value of the payload data
        # by the following procedure:
        #
        #  1. Run Google Chrome
        #  2. Visit https://caltech.tind.io/lists/
        #  3. Turn on dev tools in Chrome
        #  4. Go to the "Network" tab in dev tools
        #  5. Click on the XHR subpanel
        #  6. On the Tind page, type status:lost in the search box & hit return
        #  7. Look in the XHR output, in the "Request Payload" portion
        #  8. Copy that whole payload string to your computer's clipboard
        #  9. Start a python3 console
        #  10. import json as jsonlib
        #  11. jsonlib.loads('... paste the clipboard ...')
        #
        # Be sure to use single quotes to surround the request payload value
        # when pasting it into jsonlib.loads().
        #
        # The value you get back will have a field named 'columns' with a
        # very long list of items in it.  By trial and error, I discovered
        # you don't need to leave all of them in the list: you only need as
        # many as you use in the 'order' directive -- which makes sense,
        # since if you're telling it to order the output by a given column,
        # the column needs to be identified.

        data = {'columns': [{'data': 'modification_date',
                             'name': 'title',
                             'orderable': True,
                             'search': {'regex': False, 'value': ''},
                             'searchable': True}],
                'order': [{'column': 0, 'dir': 'desc'}],
                'search': {'regex': False, 'value': 'status:lost'},
                # 'length' -- see below
                'draw': 2,
                'start': 1,
                'table_name': 'crcITEM'}

        # We first need to figure out how many items we need to get.
        self._tracer.update('Asking TIND how many "lost" items there are')
        data['length'] = 1
        results = self._tind_ajax(session, ajax_url, ajax_headers, data)
        total_records = results['recordsTotal']
        if __debug__: log('TIND says there are {} records', total_records)

        # Now get all the lost item records.
        self._tracer.update('Getting {} records from TIND'.format(total_records))
        data['length'] = total_records
        results = self._tind_ajax(session, ajax_url, ajax_headers, data)
        if results['recordsTotal'] != total_records:
            details = 'Expected {} records but received {}'.format(
                total_records, results['recordsTotal'])
            self._notifier.fatal('TIND returned unexpected number of items', details)
            raise ServiceFailure('TIND returned unexpected number of items')
        if __debug__: log('received all {} records via AJAX', total_records)
        return results


    def _tind_ajax(self, session, ajax_url, ajax_headers, data):
        try:
            if __debug__: log('posting ajax call to tind.io')
            resp = session.post(ajax_url, headers = ajax_headers, json = data)
        except Exception as err:
            details = 'exception doing AJAX call {}'.format(err)
            self._notifier.fatal('Unable to get data from TIND', details)
            raise ServiceFailure(details)
        if resp.status_code != 200:
            details = 'tind.io AJAX returned status {}'.format(resp.status_code)
            self._notifier.fatal('TIND failed to return data', details)
            raise ServiceFailure(details)
        results = resp.json()
        if 'recordsTotal' not in results:
            self._notifier.fatal('Unexpected result from TIND AJAX call')
            raise InternalError('Unexpected result from TIND AJAX call')
        if __debug__: log('succeeded in getting data via ajax')
        return results


    def loan_details(self, tind_id, session):
        '''Get the HTML of a loans detail page from TIND.io.'''

        url = 'https://caltech.tind.io/admin2/bibcirculation/get_item_requests_details?ln=en&recid=' + str(tind_id)
        try:
            if self._tracer:
                self._tracer.update('Getting details from TIND for {}'.format(tind_id))
            (resp, error) = net('get', url, session = session, allow_redirects = True)
            if isinstance(error, NoContent):
                if __debug__: log('server returned a "no content" code')
                return ''
            elif error:
                raise error
            elif resp == None:
                raise InternalError('Unexpected network return value')
            else:
                content = str(resp.content)
                return content if content.find('There are no loans') < 0 else ''
        except Exception as err:
            details = 'exception connecting to tind.io: {}'.format(err)
            if self._notifier:
                self._notifier.fatal('Failed to connect -- try again later', details)
            raise ServiceFailure(details)


    def patron_details(self, patron_name, patron_url, session):
        '''Get the HTML of a loans detail page from TIND.io.'''

        if not patron_name or not patron_url:
            if __debug__: log('no patron => no patron details to get')
            return
        try:
            if self._tracer:
                self._tracer.update('Getting patron details for {}'.format(patron_name))
            (resp, error) = net('get', patron_url, session = session, allow_redirects = True)
            if isinstance(error, NoContent):
                if __debug__: log('server returned a "no content" code')
                return ''
            elif error:
                raise error
            elif resp == None:
                raise InternalError('Unexpected network return value')
            else:
                return str(resp.content)
        except Exception as err:
            details = 'exception connecting to tind.io: {}'.format(err)
            if self._notifier:
                self._notifier.fatal('Failed to connect -- try again later', details)
            raise ServiceFailure(details)


# Miscellaneous utilities.
# .............................................................................

def first_author(author_text):
    # Preprocessing for some inconsistent cases.
    if author_text.endswith('.'):
        author_text = author_text[:-1]
    if author_text.startswith('by'):
        author_text = author_text[3:]

    # Find the first author or editor.
    if author_text.startswith('edited by'):
        fragment = author_text[10:]
        if fragment.find('and') > 0:
            start = fragment.find('and')
            first_author = fragment[:start].strip()
        elif fragment.find('...') > 0:
            start = fragment.find('...')
            first_author = fragment[:start].strip()
        else:
            first_author = fragment
    else:
        author_list = re.split('\s\[?and\]?\s|,|\.\.\.|;', author_text)
        first_author = author_list[0].strip()

    # Extract the last name if possible and return it.
    try:
        return HumanName(first_author).last
    except:
        return first_author
