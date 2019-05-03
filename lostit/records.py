'''
records.py: base record class for holding data

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2018 by the California Institute of Technology.  This code is
open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

from datetime import datetime

import lostit
from lostit.debug import log


# Class definitions.
# .............................................................................
# The particular set of fields in this object came from the TIND holds page
# contents and a few additional fields kept in the tracking spreadsheet by
# the Caltech Library circulation staff.

class LostRecord(object):
    '''Base class for records describing a lost item.'''

    def __init__(self):
        self.requester_name = ''               # String
        self.requester_url = ''                # String

        self.item_title = ''                   # String
        self.item_author = ''                  # String
        self.item_type = ''                    # String
        self.item_details_url = ''             # String
        self.item_record_url = ''              # String
        self.item_tind_id = ''                 # String
        self.item_call_number = ''
        self.item_barcode = ''
        self.item_location_name = ''           # String
        self.item_location_code = ''           # String
        self.item_loan_status = ''             # String

        self.date_modified = ''                # String (date)
        self.date_requested = ''               # String (date)
        self.date_lostit_recorded = ''         # String (date)


# Utility functions.
# .............................................................................

def records_diff(known_records, new_records):
    '''Returns the records from 'new_records' missing from 'known_records'.
    The comparison is done on the basis of bar codes.'''
    if __debug__: log('diffing known records with new records')
    # This assumes that no two lost items will ever have the same barcode,
    # because lost items are replaced with items that have a different barcode.
    diffs = []
    today = datetime.today().strftime('%Y-%m-%d')
    if __debug__: log('comparing {} known against {} new records',
                      len(known_records), len(new_records))
    for candidate in new_records:
        matched = [record for record in known_records
                   if (record.item_barcode == candidate.item_barcode
                       and record.date_lostit_recorded >= today)]
        if not matched:
            diffs.append(candidate)
    if __debug__: log('found {} different records', len(diffs))
    return diffs


def records_filter(method = 'all'):
    '''Returns a closure that takes a TindRecord and returns True or False,
    depending on whether the record should be included in the output.  This
    is meant to be passed to Python filter() as the test function.
    '''
    # FIXME. It seemed like it might be useful to provide filtering features
    # in the future, but this is currently a no-op.
    return (lambda x: True)
