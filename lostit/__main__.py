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

from   docxtpl import DocxTemplate
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
    reset_keys = ('reset user and password used',                   'flag',   'R'),
    no_sheet   = ('do not open the spreadsheet (default: open it)', 'flag',   'S'),
    version    = ('print version info and exit',                    'flag',   'V'),
    debug      = ('turn on debugging',                              'flag',   'Z'),
)

def main(user = 'U', pswd = 'P',
         no_color = False, no_gui = False, no_keyring = False, no_sheet = False,
         reset_keys = False, version = False, debug = False):
    '''Lost It!'''

    # Our defaults are to do things like color the output, which means the
    # command line flags make more sense as negated values (e.g., "no-color").
    # However, dealing with negated variables in our code is confusing, so:
    use_color   = not no_color
    use_keyring = not no_keyring
    use_gui     = not no_gui
    view_sheet  = not no_sheet

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
    controller.start(MainBody(view_sheet, debug, controller, tracer, accesser, notifier))


class MainBody(Thread):
    '''Main body of Lost It! implemented as a Python thread.'''

    def __init__(self, view_sheet, debug, controller, tracer, accesser, notifier):
        '''Initializes main thread object but does not start the thread.'''
        Thread.__init__(self, name = "MainBody")
        self._view_sheet = view_sheet
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
            config = Config(path.join(module_path(), "lostit.ini"))
            spreadsheet_id = config.get('lostit', 'spreadsheet_id')

            # Get the data.
            tind = Tind(accesser, notifier, tracer)
            google = Google(accesser, notifier, tracer)
            tind_records = tind.records()
            google_records = google.records(spreadsheet_id)
            new_records = records_diff(google_records, tind_records)
            import pdb; pdb.set_trace()
            new_records = sorted(new_records, key = lambda r: r.date_requested)
            if __debug__: log('diff => {} records'.format(len(new_records)))

            # Update the Google spreadsheet with new records.
            if len(new_records) > 0:
                tracer.update('Updating Google spreadsheet')
                Google.update(spreadsheet_id, new_records)

            # Open the spreadsheet too, if requested.
            if isinstance(notifier, MessageHandlerGUI):
                if notifier.yes_no('Open the tracking spreadsheet?'):
                    Google.open(spreadsheet_id)
            elif view_sheet:
                Google.open(spreadsheet_id)
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


# On windows, we want the command-line args to use slash intead of hyphen.

if sys.platform.startswith('win'):
    main.prefix_chars = '/'


# Main entry point.
# ......................................................................
# The following allows users to invoke this using "python3 -m lostit".

if __name__ == '__main__':
    plac.call(main)


# For Emacs users
# ......................................................................
# Local Variables:
# mode: python
# python-indent-offset: 4
# End:
