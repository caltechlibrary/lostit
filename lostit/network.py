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

import requests

def network_available():
    '''Return True if it appears we have a network connection, False if not.'''
    try:
        r = requests.get("https://www.google.com")
        return True
    except requests.ConnectionError:
        return False
