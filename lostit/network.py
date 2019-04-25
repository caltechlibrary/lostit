'''
network.py: miscellaneous network utilities for Lost It!

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2018 by the California Institute of Technology.  This code is
open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

import urllib

from .debug import log


# Main functions.
# .............................................................................

def network_available():
    '''Return True if it appears we have a network connection, False if not.'''
    r = None
    try:
        r = urllib.request.urlopen("http://www.google.com")
        return True
    except Exception:
        if __debug__: log('could not connect to https://www.google.com')
        return False
    if r:
        r.close()
