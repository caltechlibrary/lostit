'''
access.py: code to deal with getting user access credentials

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2018-2019 by the California Institute of Technology.  This code
is open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

import os
import os.path as path
from   pubsub import pub
from   queue import Queue
import wx
import wx.adv
import textwrap
import webbrowser
from   sidetrack import log
import sys

import lostit
from lostit.credentials import password, credentials
from lostit.credentials import keyring_credentials, save_keyring_credentials
from lostit.exceptions import *
from lostit.files import datadir_path, readable


# Global constants.
# .............................................................................

_KEYRING = "org.caltechlibrary.{}".format(__package__)
'''
The name of the keyring used to store Caltech access credentials, if any.
'''


# Exported classes.
# .............................................................................
# The basic principle of writing the classes (like this one) that get used in
# MainBody is that they should take the information they need, rather than
# putting the info into the controller object (i.e., LostItControlGUI or
# LostItControlCLI).  This is a matter of separation of concerns and
# information hiding.

class AccessHandlerBase():
    ''''Base class for dealing with user access credentials.'''

    def __init__(self, user, pswd):
        '''Initialize internal data with user and password (if given).'''
        self._user = user
        self._pswd = pswd

    @property
    def user(self):
        return self._user

    @property
    def pswd(self):
        return self._pswd


class AccessHandlerCLI(AccessHandlerBase):
    '''Class to use the command line to ask the user for credentials.'''

    def __init__(self, user, pswd, use_keyring, reset_keyring):
        '''Initializes internal data with user and password if available.'''
        super().__init__(user, pswd)
        self._use_keyring = use_keyring
        self._reset = reset_keyring


    def name_and_password(self):
        '''Returns a tuple of user, password, and a Boolean indicating
        whether the user cancelled the dialog.  (The last will always be False
        in this CLI version of the method.)
        '''
        tmp_user = self._user
        tmp_pswd = self._pswd
        if not all([tmp_user, tmp_pswd]) or self._reset or not self._use_keyring:
            if self._use_keyring and not self._reset:
                if __debug__: log('getting credentials from keyring')
                tmp_user, tmp_pswd, _, _ = credentials(_KEYRING, "Caltech access login",
                                                       tmp_user, tmp_pswd)
            else:
                if not self._use_keyring:
                    if __debug__: log('keyring disabled')
                if self._reset:
                    if __debug__: log('reset invoked')
                tmp_user = input('Caltech access login: ')
                tmp_pswd = password('Password for "{}": '.format(tmp_user))
            if self._use_keyring:
                # Save the credentials if they're different.
                s_user, s_pswd, _, _ = keyring_credentials(_KEYRING)
                if s_user != tmp_user or s_pswd != tmp_pswd:
                    if __debug__: log('saving credentials to keyring')
                    save_keyring_credentials(_KEYRING, tmp_user, tmp_pswd)
        self._user = tmp_user
        self._pswd = tmp_pswd
        return self._user, self._pswd, False


    @property
    def user(self):
        return self._user


    @property
    def password(self):
        return self._pswd


class AccessHandlerGUI(AccessHandlerBase):
    '''Class to use a GUI to ask the user for credentials.'''

    def __init__(self, user, pswd, use_keyring = True, reset_keyring = False):
        # In the GUI case, we don't store the complete user credentials, but
        # we do store the last-used login name, as a convenience for people
        # running Lost It repeatedly.
        super().__init__(user, pswd)
        self._use_keyring = use_keyring
        self._reset = reset_keyring
        if not user and use_keyring and not reset_keyring:
            import pdb; pdb.set_trace()
            self._user, _, _, _ = keyring_credentials(_KEYRING)


    def name_and_password(self):
        '''Shows a login-and-password dialog, and returns a tuple of user,
        password, and a Boolean indicating whether the user cancelled the
        dialog.
        '''
        # This uses a threadsafe queue to implement a semaphore.  The
        # login_dialog will put a results tuple on the queue, but until then,
        # a get() on the queue will block.  Thus, this function will block
        # until the login dialog is closed by the user.
        results = Queue()
        if __debug__: log('sending message to login_dialog')
        wx.CallAfter(pub.sendMessage, "login_dialog", results = results,
                     user = self._user, password = self._pswd)
        if __debug__: log('blocking to get results')
        results_tuple = results.get()
        if __debug__: log('name_and_password results obtained')
        # Results will be a tuple of user, password, cancelled
        self._user = results_tuple[0]
        self._pswd = results_tuple[1]
        save_keyring_credentials(_KEYRING, self._user, '')
        return results_tuple[0], results_tuple[1], results_tuple[2]


    @property
    def user(self):
        return self._user


    @property
    def password(self):
        return self._pswd
