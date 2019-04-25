'''
google_sheet.py: code for interacting with the Google spreadsheet for Lost It!

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2018 by the California Institute of Technology.  This code is
open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

from apiclient.discovery import build
from httplib2 import Http
from oauth2client import client, tools
from oauth2client.client import OAuth2WebServerFlow
from oauth2client.contrib.keyring_storage import Storage as token_storage
from os import path
import json as jsonlib
import sys

# oauth2client library loads keyring but does not set a backend, which
# leads to a run-time error in the PyInstaller-produced app.
import keyring
if sys.platform.startswith('darwin'):
    import keyring.backends.OS_X
    keyring.set_keyring(keyring.backends.OS_X.Keyring())
elif sys.platform.startswith('win'):
    import keyring.backends.Windows
    keyring.set_keyring(keyring.backends.Windows.WinVaultKeyring())

import lostit
from lostit.exceptions import *
from lostit.records import LostRecord
from lostit.files import open_url, datadir_path
from lostit.debug import log

import logging
logging.getLogger('googleapiclient').setLevel(logging.CRITICAL)
logging.getLogger('oauth2client').setLevel(logging.CRITICAL)


# Global constants.
# .............................................................................

# If you change this scope, delete the token file and let it be recreated.
_OAUTH_SCOPE = 'https://www.googleapis.com/auth/spreadsheets'

# Where to find the configuration file provided by the Google Sheets API.
_SECRETS_FILE = 'client_secrets.json'

# Set this to a safe spreadsheet when testing, then change this value to the
# actual spreadsheet when moving to production.
_GS_BASE_URL = 'https://docs.google.com/spreadsheets/d/'


# Class definitions.
# .............................................................................

class GoogleLostRecord(LostRecord):
    '''Class to represent a hold request as it appears in the spreadsheet.'''

    def __init__(self, record = None):
        '''Initialize using a TindRecord.'''

        super().__init__()
        self.caltech_status = ''
        self.caltech_staff_initials = ''
        self.caltech_lostit_user = ''
        if record:
            self.item_title         = record.item_title
            self.item_call_number   = record.item_call_number
            self.item_location_name = record.item_location_name
            self.item_location_code = record.item_location_code
            self.item_loan_status   = record.item_loan_status
            self.item_tind_id       = record.item_tind_id
            self.date_modified      = record.date_modified
            self.item_barcode       = record.item_barcode
            self.item_type          = record.item_type
            self.holds_count        = record.holds_count
            self.item_record_url    = record.item_record_url
            self.item_details_url   = record.item_details_url

        # FIXME: get the requester name by scraping the record pages



# Main code.
# .............................................................................

# The following credentials and connection code is based on the Google examples
# found at https://developers.google.com/sheets/api/quickstart/python

def records_from_google(gs_id, user, message_handler):
    if __debug__: log('getting entries from Google spreadsheet')
    spreadsheet_rows = spreadsheet_content(gs_id, user, message_handler)
    if spreadsheet_rows == []:
        return []
    results = []
    if __debug__: log('building records from {} rows', len(spreadsheet_rows) - 1)
    # First row is the title row, so we skip it
    for index, row in enumerate(spreadsheet_rows[1:], start = 1):
        if not row or len(row) < 16 or row[0] == '':
            continue
        record = GoogleLostRecord()

        cell = row[0]
        record.date_requested = cell.strip()

        cell = row[1]
        record.requester_name = cell.strip()

        cell = row[2]
        record.requester_email = cell.strip()

        cell = row[3]
        record.item_title = cell.strip()

        cell = row[4]
        record.item_author = cell.strip()

        cell = row[4]
        record.item_author = cell.strip()

        cell = row[5]
        record.item_tind_id = cell.strip()

        cell = row[6]
        record.item_call_number = cell.strip()

        cell = row[7]
        record.item_barcode = cell.strip()

        cell = row[8]
        record.item_location_code = cell.strip().lower()

        results.append(record)
    return results


def spreadsheet_credentials(user, message_handler):
    if __debug__: log('getting token for Google API')
    store = token_storage('Lost It!', user)
    creds = store.get()
    if not creds or creds.invalid:
        if __debug__: log('using secrets file for Google API')
        secrets_file = path.join(datadir_path(), _SECRETS_FILE)
        flow = google_flow(secrets_file, _OAUTH_SCOPE)
        # On Windows, run_flow calls argparse and ends up getting the args
        # we pass to our Hold It __main__.py.  I have no idea how that's
        # happening, but hacked around it this way:
        sys.argv = sys.argv[:1]
        creds = tools.run_flow(flow, store)

    if not creds:
        message_handler.error('Failed to get Google API token')
        raise InternalError('Failed to get Google API token')
    return creds


def spreadsheet_content(gs_id, user, message_handler):
    creds = spreadsheet_credentials(user, message_handler)
    if __debug__: log('building Google sheets service object')
    service = build('sheets', 'v4', http = creds.authorize(Http()), cache_discovery = False)
    sheets_service = service.spreadsheets().values()
    try:
        # If you don't supply a sheet name in the range arg, you get 1st sheet.
        data = sheets_service.get(spreadsheetId = gs_id, range = 'A:Z').execute()
    except Exception as err:
        text = 'attempted connection to Google resulted in {}'.format(err)
        if __debug__: log(text)
        message_handler.error('Unable to read Google spreadsheet', text)
        raise InternalError('Failed to get Google API token')
    if __debug__: log('Google call successful')
    return data.get('values', [])


def update_google(gs_id, records, user, message_handler):
    data = []
    for record in records:
        record = GoogleLostRecord(record)
        setattr(record, 'caltech_lostit_user', user)
        if __debug__: log('will add {}'.format(record.item_barcode))
        data.append(google_row_for_record(record))
    import pdb; pdb.set_trace()
    if not data:
        return
    creds = spreadsheet_credentials(user, message_handler)
    if __debug__: log('building Google sheets service object')
    service = build('sheets', 'v4', http = creds.authorize(Http()), cache_discovery = False)
    sheets_service = service.spreadsheets().values()
    body = {'values': data}
    try:
        if __debug__: log('calling Google API for updating data')
        result = sheets_service.append(spreadsheetId = gs_id,
                                       range = 'A:Z', body = body,
                                       valueInputOption = 'USER_ENTERED').execute()
    except Exception as err:
        text = 'attempted connection to Google resulted in {}'.format(err)
        if __debug__: log(text)
        message_handler.error('Unable to update Google spreadsheet', text)
        raise InternalError(text)
    if __debug__: log('Google call successful')


def open_google(gs_id):
    if __debug__: log('opening Google spreadsheet')
    open_url(_GS_BASE_URL + gs_id)


def google_row_for_record(record):
    def linked_requester_name(r):
        return link(r.requester_name, r.requester_url)

    def linked_item_barcode(r):
        return link(r.item_barcode, r.item_record_url)

    a = record.date_requested
    b = linked_requester_name(record)
    c = record.requester_email
    d = record.item_title
    e = record.item_author
    f = record.item_tind_id
    g = record.item_call_number
    h = linked_item_barcode(record)
    i = record.item_location_code
    return [a, b, c, d, e, f, g, h, i]


def google_flow(secrets_file, scope):
    # Code based on https://stackoverflow.com/a/28890297/743730
    with open(secrets_file, 'r') as fp:
        obj = jsonlib.load(fp)

    secrets = obj['installed']

    # Return a Flow that requests a refresh_token
    return OAuth2WebServerFlow(
        client_id = secrets['client_id'],
        client_secret = secrets['client_secret'],
        redirect_uri = secrets['redirect_uris'][0],
        scope = scope,
        access_type = 'offline',
        approval_prompt = 'force')


def link(value, url):
    return '=HYPERLINK("{}","{}")'.format(url, value)
