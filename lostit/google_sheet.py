'''
google_sheet.py: code for interacting with the Google spreadsheet for Lost It!

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2018-2019 by the California Institute of Technology.  This code
is open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

from apiclient.discovery import build
from datetime import datetime
from httplib2 import Http
from oauth2client import client, tools
from oauth2client.client import OAuth2WebServerFlow
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
from lostit.debug import log
from lostit.exceptions import *
from lostit.files import open_url, datadir_path
from lostit.records import LostRecord
from lostit.token_storage import TokenStorage

import logging
logging.getLogger('googleapiclient').setLevel(logging.CRITICAL)
logging.getLogger('oauth2client').setLevel(logging.CRITICAL)


# Constants.
# .............................................................................

# If you change this scope, delete the token file and let it be recreated.
_OAUTH_SCOPE = 'https://www.googleapis.com/auth/spreadsheets'

# Where to find the configuration file provided by the Google Sheets API.
_SECRETS_FILE = 'client_secrets.json'

# Set this to a safe spreadsheet when testing, then change this value to the
# actual spreadsheet when moving to production.
_GS_BASE_URL = 'https://docs.google.com/spreadsheets/d/'

# This is where the column order of the Google sheet is hardwired into the
# code.  Lost It finds the columns in the Google spreadsheet by position.
# Changing the column order requires corresponding changes to the column
# indexes below.

_COL_INDEX = {
    'nos_status'           : 0,         # Not read by us, but need placeholder
    'nos_deciding_bib'     : 1,         # Not read by us, but need placeholder
    'nos_decision_date'    : 2,         # Not read by us, but need placeholder
    'nos_notes'            : 3,         # Not read by us, but need placeholder
    'nos_replacement_cost' : 4,         # Not read by us, but need placeholder
    'date_lostit_recorded' : 5,
    'date_requested'       : 6,
    'requester_name'       : 7,
    'requester_email'      : 8,
    'requester_type'       : 9,
    'item_title'           : 10,
    'item_author'          : 11,
    'item_tind_id'         : 12,
    'item_call_number'     : 13,
    'item_barcode'         : 14,
    'item_location_code'   : 15,
    'item_location_name'   : 16,
}


# Class definitions.
# .............................................................................

class GoogleLostRecord(LostRecord):
    '''Class to represent a hold request as it appears in the spreadsheet.'''

    def __init__(self, record = None, row = None):
        '''Initialize using a TindLostRecord.'''

        super().__init__()
        self.caltech_status = ''
        self.caltech_staff_initials = ''
        self.caltech_lostit_user = ''
        if record:
            self.item_title           = record.item_title
            self.item_author          = record.item_author
            self.item_type            = record.item_type
            self.item_details_url     = record.item_details_url
            self.item_record_url      = record.item_record_url
            self.item_tind_id         = record.item_tind_id
            self.item_call_number     = record.item_call_number
            self.item_barcode         = record.item_barcode
            self.item_location_name   = record.item_location_name
            self.item_location_code   = record.item_location_code
            self.item_loan_status     = record.item_loan_status
            self.requester_name       = record.requester_name
            self.requester_email      = record.requester_email
            self.requester_type       = record.requester_type
            self.requester_url        = record.requester_url
            self.date_modified        = record.date_modified
            self.date_requested       = record.date_requested
            self.date_lostit_recorded = record.date_lostit_recorded
        if row:
            # When a row from a Google spreadsheet has empty cells at the tail
            # end, the list of values we get back is not the full length; it's
            # only as long as the last column that has a value.
            row = padded(row, len(_COL_INDEX))
            self.item_title           = row[_COL_INDEX['item_title']].strip()
            self.item_author          = row[_COL_INDEX['item_author']].strip()
            self.item_tind_id         = row[_COL_INDEX['item_tind_id']].strip()
            self.item_call_number     = row[_COL_INDEX['item_call_number']].strip()
            self.item_barcode         = row[_COL_INDEX['item_barcode']].strip()
            self.item_location_code   = row[_COL_INDEX['item_location_code']].strip().lower()
            self.item_location_name   = row[_COL_INDEX['item_location_name']].strip()
            self.requester_name       = row[_COL_INDEX['requester_name']].strip()
            self.requester_email      = row[_COL_INDEX['requester_email']].strip()
            self.requester_type       = row[_COL_INDEX['requester_type']].strip()
            self.date_requested       = row[_COL_INDEX['date_requested']].strip()
            self.date_lostit_recorded = row[_COL_INDEX['date_lostit_recorded']].strip()


class Google(object):
    '''Class to interface Lost It! to Google spreadsheets.'''

    def __init__(self, accesser, notifier, tracer):
        self._accesser = accesser
        self._notifier = notifier
        self._tracer   = tracer
        self._creds    = None


    def spreadsheet_url(self, gs_id):
        '''Returns the URL of the Google spreadsheet.'''
        return _GS_BASE_URL + gs_id


    def open(self, gs_id):
        '''Opens in the user's browser the spreadsheet identified by 'gs_id'.'''
        if __debug__: log('opening Google spreadsheet')
        open_url(self.spreadsheet_url(gs_id))


    def records(self, gs_id, tab = 0):
        '''Returns a list of GoogleLostRecord objects.'''
        if __debug__: log('getting entries from Google spreadsheet')
        sheet_rows = self._content(gs_id, tab)
        if not sheet_rows:
            if __debug__: log('Google returned empty spreadsheet')
            return []

        # We have data from the spreadsheet.  Convert it to a list of records.
        if __debug__: log('building records from {} rows', len(sheet_rows) - 1)
        results = []
        num_columns_expected = len(_COL_INDEX)
        # First row is the title row, so we skip it.
        for row in sheet_rows[1:]:
            if not row:
                if __debug__: log('skipping null row')
                continue
            # When a row from a Google spreadsheet has empty cells at the tail
            # end, the list of values we get back is not the full length; it's
            # only as long as the last column that has a value.  We still want
            # to process the row as much as we can, so we try to cope.
            row = padded(row, len(_COL_INDEX))
            if row[_COL_INDEX['item_barcode']] == '':
                # We use barcodes to track items, so we can't go on without it.
                if __debug__: log('skipping row with missing barcode: {}', row)
                continue
            results.append(GoogleLostRecord(row = row))
        return results


    def update(self, gs_id, new_records):
        data = []
        for record in new_records:
            r = GoogleLostRecord(record = record)
            setattr(r, 'caltech_lostit_user', self._accesser.user)
            if __debug__: log('will add {}'.format(r.item_barcode))
            data.append(self._row_for_record(r))
        if not data:
            return
        creds = self._credentials()
        if __debug__: log('building Google sheets service object')
        gsheets = build('sheets', 'v4', http = creds.authorize(Http()),
                        cache_discovery = False).spreadsheets()
        body = {'values': data}
        num_rows = len(data)
        try:
            if __debug__: log('updating {} rows in Google'.format(num_rows))
            values = gsheets.values()
            result = values.append(spreadsheetId = gs_id, range = 'A:Z', body = body,
                                   valueInputOption = 'USER_ENTERED').execute()
            if 'updates' in result:
                if result['updates']['updatedRows'] < num_rows:
                    self._notifier.warn('Failed to write all rows in spreadsheet')
                else:
                    if __debug__: log('successfully wrote rows in spreadsheet')
            else:
                # FIXME is it worth detecting this condition?  Can it happen?
                pass
        except Exception as err:
            text = 'attempted connection to Google resulted in {}'.format(err)
            if __debug__: log(text)
            self._notifier.error('Unable to update Google spreadsheet', text)
            raise InternalError(text)
        if __debug__: log('Google call successful')


    # The credentials and connection code is based on the Google examples
    # found at https://developers.google.com/sheets/api/quickstart/python

    def _content(self, gs_id, tab = 0):
        creds = self._credentials()
        if __debug__: log('building Google sheets service object')
        gsheets = build('sheets', 'v4', http = creds.authorize(Http()),
                        cache_discovery = False).spreadsheets()
        sheet_name = ''
        if tab > 0:
            if __debug__: log('getting metadata for Google sheet {}'.format(gs_id))
            metadata = gsheets.get(spreadsheetId = gs_id).execute().get('sheets', '')
            if tab > len(metadata):
                self._notifier.error('Spreadsheet structure has changed')
                raise InternalError(text)
            if 'properties' not in metadata[tab]:
                self._notifier.error('Google sheet data not in expected format')
                raise InternalError(text)
            sheet_name = metadata[tab]['properties']['title']
        try:
            # If you don't supply sheet name in the range arg, you get 1st sheet
            values = gsheets.values()
            range = '{}!A:Z'.format(sheet_name) if sheet_name else 'A:Z'
            data = values.get(spreadsheetId = gs_id, range = range).execute()
        except Exception as err:
            text = 'attempted connection to Google resulted in {}'.format(err)
            if __debug__: log(text)
            self._notifier.error('Unable to read Google spreadsheet', text)
            raise InternalError('Failed to get Google API token')
        if __debug__: log('Google call successful')
        return data.get('values', [])


    def _credentials(self):
        if self._creds:
            if __debug__: log('returning stored creds for Google API')
            return self._creds
        if __debug__: log('getting token for Google API')
        store = TokenStorage('Lost It!', self._accesser.user)
        creds = store.get()
        if not creds or creds.invalid:
            if __debug__: log('using secrets file for Google API')
            secrets_file = path.join(datadir_path(), _SECRETS_FILE)
            flow = self._google_flow(secrets_file, _OAUTH_SCOPE)
            # On Windows, run_flow calls argparse and ends up getting the args
            # we pass to our Hold It __main__.py.  I have no idea how that's
            # happening, but hacked around it this way:
            sys.argv = sys.argv[:1]
            creds = tools.run_flow(flow, store)

        if not creds:
            self._notifier.error('Failed to get Google API token')
            raise InternalError('Failed to get Google API token')
        self._creds = creds
        return creds


    def _google_flow(self, secrets_file, scope):
        # Code based on https://stackoverflow.com/a/28890297/743730
        with open(secrets_file, 'r') as file:
            obj = jsonlib.load(file)

        secrets = obj['installed']

        # Return a Flow that requests a refresh_token
        return OAuth2WebServerFlow(
            client_id = secrets['client_id'],
            client_secret = secrets['client_secret'],
            redirect_uri = secrets['redirect_uris'][0],
            scope = scope,
            access_type = 'offline',
            approval_prompt = 'force')


    def _row_for_record(self, record):
        def linked_requester_name(r):
            return self._linked_value(r.requester_name, r.requester_url)

        def linked_item_barcode(r):
            return self._linked_value(r.item_barcode, r.item_details_url)

        def linked_tind_id(r):
            return self._linked_value(r.item_tind_id, r.item_record_url)

        row = ['']*len(_COL_INDEX)
        row[_COL_INDEX['date_lostit_recorded']] = datetime.today().strftime('%Y-%m-%d')
        row[_COL_INDEX['date_requested']]       = record.date_requested
        row[_COL_INDEX['requester_name']]       = linked_requester_name(record)
        row[_COL_INDEX['requester_email']]      = record.requester_email
        row[_COL_INDEX['requester_type']]       = record.requester_type
        row[_COL_INDEX['item_title']]           = record.item_title
        row[_COL_INDEX['item_author']]          = record.item_author
        row[_COL_INDEX['item_tind_id']]         = linked_tind_id(record)
        row[_COL_INDEX['item_call_number']]     = record.item_call_number
        row[_COL_INDEX['item_barcode']]         = linked_item_barcode(record)
        row[_COL_INDEX['item_location_code']]   = record.item_location_code
        row[_COL_INDEX['item_location_name']]   = record.item_location_name
        return row


    def _linked_value(self, value, url):
        if value and url:
            return '=HYPERLINK("{}","{}")'.format(url, value)
        else:
            return ''


# Miscellaneous utilities.
# .............................................................................

def padded(the_list, columns):
    length = len(the_list)
    if length >= columns:
        return the_list
    return the_list + ['']*(columns - length)
