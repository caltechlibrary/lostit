'''
config.py: configuration file handling.

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2018-2019 by the California Institute of Technology.  This code
is open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

from   configparser import ConfigParser
import os
from   os import path as path
import sys
import warnings

import lostit
from lostit.files import module_path
from lostit.debug import log


# Class definitions.
# .............................................................................

class Config():
    '''A class to encapsulate reading our configuration file.'''

    def __init__(self, cfg_file):
        self._cfg = ConfigParser()
        try:
            with open(cfg_file) as f:
                if __debug__: log('reading "{}"', cfg_file)
                self._cfg.readfp(f)
        except IOError:
            if __debug__: log('"{}" not found', cfg_file)
            warnings.warn('file "{}" not found'.format(cfg_file))


    def get(self, section, prop):
        '''Read a property value from the configuration file.
        Two forms of the value of argument "section" are understood:
           * value of section is an integer => section named after host
           * value of section is a string => literal section name
        '''
        if not self._cfg:
            return None
        elif isinstance(section, str):
            return self._cfg.get(section, prop)
        elif isinstance(section, int):
            section_name = Host.name(section)
            if section_name:
                return self._cfg.get(section_name, prop)
            else:
                return None


    def items(self, section):
        '''Returns a list of tuples of (name, value) for the given section.
        Two forms of the value of argument "section" are understood:
           * value of section is an integer => section named after host
           * value of section is a string => literal section name
        '''
        if not self._cfg:
            return None
        elif isinstance(section, str):
            return self._cfg.items(section)
        elif isinstance(section, int):
            section_name = Host.name(section)
            if section_name:
                return self._cfg.items(section_name)
            else:
                return None
