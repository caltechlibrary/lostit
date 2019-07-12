'''
__main__: main command-line interface to Lost It!

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2018 by the California Institute of Technology.  This code is
open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

import os
import os.path as path
import plac
import sys
import time
from   threading import Thread
import traceback

import lostit
from lostit.access import AccessHandlerGUI, AccessHandlerCLI
from lostit.config import Config
from lostit.control import LostItControlGUI, LostItControlCLI
from lostit.debug import set_debug, log
from lostit.email import Mailer
from lostit.exceptions import *
from lostit.files import module_path
from lostit.google_sheet import Google
from lostit.messages import MessageHandlerGUI, MessageHandlerCLI
from lostit.network import network_available
from lostit.progress import ProgressIndicatorGUI, ProgressIndicatorCLI
from lostit.records import records_diff, records_filter
from lostit.tind import Tind


# Main program.
# ......................................................................

@plac.annotations(
    pswd       = ('Caltech access user password',                   'option', 'p'),
    user       = ('Caltech access user name',                       'option', 'u'),
    no_color   = ('do not color-code terminal output',              'flag',   'C'),
    no_gui     = ('do not start the GUI interface (default: do)',   'flag',   'G'),
    no_keyring = ('do not store credentials in a keyring service',  'flag',   'K'),
    no_mail    = ('do not send mail (default: do)',                 'flag',   'M'),
    reset_keys = ('reset user and password used',                   'flag',   'R'),
    no_sheet   = ('do not open the spreadsheet (default: open it)', 'flag',   'S'),
    version    = ('print version info and exit',                    'flag',   'V'),
    debug      = ('turn on debugging',                              'flag',   'Z'),
)

def main(user = 'U', pswd = 'P',
         no_color = False, no_gui = False, no_keyring = False, no_mail = False,
         no_sheet = False, reset_keys = False, version = False, debug = False):
    '''Lost It!'''

    # Our defaults are to do things like color the output, which means the
    # command line flags make more sense as negated values (e.g., "no-color").
    # However, dealing with negated variables in our code is confusing, so:
    use_color   = not no_color
    use_keyring = not no_keyring
    use_gui     = not no_gui
    view_sheet  = not no_sheet
    send_mail   = not no_mail

    # We use default values that provide more intuitive help text printed by
    # plac.  Rewrite the values to things we actually use.
    if user == 'U':
        user = None
    if pswd == 'P':
        pswd = None

    # Process the version argument first, because it causes an early exit.
    if version:
        print('{} version {}'.format(lostit.__title__, lostit.__version__))
        print('Author: {}'.format(lostit.__author__))
        print('URL: {}'.format(lostit.__url__))
        print('License: {}'.format(lostit.__license__))
        sys.exit()

    # Configure debug logging if it's turned on.
    if debug:
        set_debug(True)

    # Switch between different ways of getting information from/to the user.
    if use_gui:
        controller = LostItControlGUI()
        accesser   = AccessHandlerGUI(user, pswd)
        notifier   = MessageHandlerGUI()
        tracer     = ProgressIndicatorGUI()
    else:
        controller = LostItControlCLI()
        accesser   = AccessHandlerCLI(user, pswd, use_keyring, reset_keys)
        notifier   = MessageHandlerCLI(use_color)
        tracer     = ProgressIndicatorCLI(use_color)

    # Start the worker thread.
    if __debug__: log('starting main body thread')
    controller.start(MainBody(view_sheet, send_mail, debug,
                              controller, accesser, notifier, tracer))


class MainBody(Thread):
    '''Main body of Lost It! implemented as a Python thread.'''

    def __init__(self, view_sheet, send_mail, debug,
                 controller, accesser, notifier, tracer):
        '''Initializes main thread object but does not start the thread.'''
        Thread.__init__(self, name = "MainBody")
        self._view_sheet = view_sheet
        self._send_mail  = send_mail
        self._debug      = debug
        self._controller = controller
        self._tracer     = tracer
        self._accesser   = accesser
        self._notifier   = notifier
        if controller.is_gui:
            # Only make this a daemon thread when using the GUI; for CLI, it
            # must not be a daemon thread or else Lost It! exits immediately.
            self.daemon = True


    def run(self):
        # Set shortcut variables for better code readability below.
        view_sheet = self._view_sheet
        send_mail  = self._send_mail
        debug      = self._debug
        controller = self._controller
        accesser   = self._accesser
        notifier   = self._notifier
        tracer     = self._tracer

        # Preliminary sanity checks.  Do this here because we need the notifier
        # object to be initialized based on whether we're using GUI or CLI.
        tracer.start('Performing initial checks')
        if not network_available():
            notifier.fatal('No network connection.')

        # Let's do this thing.
        try:
            config      = Config(path.join(module_path(), "lostit.ini"))
            tind        = Tind(accesser, notifier, tracer)
            google      = Google(accesser, notifier, tracer)

            sid         = config.get('lostit', 'spreadsheet_id')
            mail_server = config.get('lostit', 'mail_server')
            mail_port   = config.get('lostit', 'mail_port')
            recipients  = config.get('lostit', 'mail_recipients')

            # Get the data.
            tind_records = tind.records()
            google_records = google.records(sid, tab = 0) + google.records(sid, tab = 1)

            # Figure out what's new.
            tracer.update('Comparing TIND records to our spreadsheet')
            new_records = records_diff(google_records, tind_records)
            num_new = len(new_records)
            tracer.update('Found {} new records'.format(num_new))

            # Update the Google spreadsheet with new records.
            if num_new > 0:
                new_records = sorted(new_records, key = lambda r: r.date_requested)
                tracer.update('Updating Google spreadsheet')
                google.update(sid, new_records)

            # Open the spreadsheet, if requested.
            if isinstance(notifier, MessageHandlerGUI):
                if notifier.yes_no('Open the tracking spreadsheet?'):
                    tracer.update('Opening the Google spreadsheet')
                    google.open(sid)
            elif view_sheet:
                tracer.update('Opening the Google spreadsheet')
                google.open(sid)

            # Send mail, if requested.
            if send_mail and num_new > 0:
                tracer.update('Sending mail')
                subject  = 'Lost It! found {} lost items'.format(num_new)
                body     = email_body(new_records, google.spreadsheet_url(sid))
                sender   = accesser.user + '@caltech.edu'
                password = accesser.password
                mailer   = Mailer(mail_server, mail_port)
                mailer.send(sender, password, recipients, subject, body)

        except (KeyboardInterrupt, UserCancelled) as err:
            tracer.stop('Quitting.')
            controller.stop()
        except ServiceFailure:
            tracer.stop('Stopping due to a problem connecting to services')
            controller.stop()
        except Exception as err:
            if debug:
                import pdb; pdb.set_trace()
            tracer.stop('Stopping due to error')
            notifier.fatal(lostit.__title__ + ' encountered an error',
                           str(err) + '\n' + traceback.format_exc())
            controller.stop()
        else:
            tracer.stop('Done')
            controller.stop()


# Miscellaneous utilities.
# .............................................................................

def email_body(records, sheet_url):
    summary = ''
    for rec in records:
        summary += '''
        Title: {}
       Author: {}
       Call #: {}
      Barcode: {}
Location code: {}
Location name: {}

'''.format(rec.item_title, rec.item_author, rec.item_call_number,
           rec.item_barcode, rec.item_location_code, rec.item_location_name)
    return '''
Lost It! was just run and it found {} new lost items:
{}
Here is the URL for the spreadsheet of lost items:
{}
'''.format(len(records), summary, sheet_url)


# Main entry point.
# ......................................................................
# The following allows users to invoke this using "python3 -m lostit".

if sys.platform.startswith('win'):
    # When running on Windows, we want the command-line args to use the slash
    # character intead of hyphen.
    main.prefix_chars = '/'

if __name__ == '__main__':
    plac.call(main)


# For Emacs users
# ......................................................................
# Local Variables:
# mode: python
# python-indent-offset: 4
# End:
