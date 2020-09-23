'''
token_storage: a replacement for oauth2client's contrib/keyring_storage

This version stores the credentials in an encrypted file on disk, instead of
storing it as the value of the password in a call to keyring.set_password(...).
Passwords in Windows' password storage system are limited to a length shorter
than the value of the Google credentials that this tries to store, and thus
using keyring.set_password(...) as a credentials storage approach can fail.
This version (using a file) is immune to that problem.
'''

from   cryptography.fernet import Fernet
import keyring
from   oauth2client import client
from   oauth2client.client import Storage
from   os import path
import threading

from .debug import log
from .files import user_data_path


class TokenStorage(client.Storage):
    '''Implementation of oauth2client.client.token_storage that stores the
    credentials in an encrypted file rather than in the keyring password field.

    The original implementation of oauth2client.client.token_storage stores
    the credentials from Google as the value of the password in a call to
    keyring.set_password(...).  Unfortunately, this fails on Windows because of
    size limitations on the length of passwords.  The error is obscure and
    unobvious.

    This implementation stores an encryption key in the password field instead,
    and uses that encryption key to encrypt a file that stores the credentials
    on disk.  This is not very secure, but for our in-house application for the
    Caltech Library, it's probably good enough.
    '''

    def __init__(self, service_name, user_name):
        '''Constructor.
        Args:
            service_name: string, The name of the service under which the
                          credentials are stored.
            user_name: string, The name of the user to store credentials for.
        '''
        super().__init__(lock = threading.Lock())
        self._service_name = service_name + ' storage key'
        self._user_name = user_name
        self._storage_file = path.join(user_data_path(), 'token')
        if __debug__: log('token storage file is {}', self._storage_file)


    def locked_get(self):
        '''Retrieve Credential from file.
        Returns:
            oauth2client.client.Credentials
        '''
        credentials = None
        key = keyring.get_password(self._service_name, self._user_name)
        if key is not None and path.exists(self._storage_file):
            if __debug__: log('retrieved stored encryption key')
            crypto = Fernet(key)
            content = None
            with open(self._storage_file, 'rb') as token_file:
                if __debug__: log('decrypting token from {}', self._storage_file)
                try:
                    content = crypto.decrypt(token_file.read()).decode()
                except Exception as ex:
                    raise InternalError('token file corrupted')
            if content is not None:
                try:
                    if __debug__: log('constructing credentials object')
                    credentials = client.Credentials.new_from_json(content)
                    credentials.set_store(self)
                except ValueError:
                    pass
                except Exception as ex:
                    raise InternalError('problem creating Credentials from token')
        return credentials


    def locked_put(self, credentials):
        '''Write Credentials to file.
        Args:
            credentials: Credentials, the credentials to store.
        '''
        key = keyring.get_password(self._service_name, self._user_name)
        if key is None:
            if __debug__: log('generating and storing new encryption key')
            key = Fernet.generate_key().decode()
            keyring.set_password(self._service_name, self._user_name, key)

        crypto = Fernet(key)
        with open(self._storage_file, 'wb') as token_file:
            if __debug__: log('writing token to file {}', self._storage_file)
            token_file.write(crypto.encrypt(credentials.to_json().encode()))


    def locked_delete(self):
        '''Delete Credentials file.
        Args:
            credentials: Credentials, the credentials to store.
        '''
        if __debug__: log('deleting encryption key')
        keyring.delete_password(self._service_name, self._user_name)
