'''
exceptions.py: exceptions defined by Lost It!

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2018 by the California Institute of Technology.  This code is
open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

class UserCancelled(Exception):
    '''The user elected to cancel/quit the program.'''
    pass

class ServiceFailure(Exception):
    '''Unrecoverable problem involving network services.'''
    pass

class InternalError(Exception):
    '''Unrecoverable problem involving Lost It! itself.'''
    pass
