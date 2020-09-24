'''
__main__: main command-line interface to Lost It!

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
import plac
if __debug__: from sidetrack import set_debug, log
import sys
import time
from   threading import Thread

import lostit
from lostit.access import AccessHandlerGUI, AccessHandlerCLI
from lostit.config import Config
from lostit.control import LostItControlGUI, LostItControlCLI
from lostit.email import Mailer
from lostit.exceptions import *
from lostit.files import module_path
from lostit.google_sheet import Google
from lostit.messages import MessageHandlerGUI, MessageHandlerCLI
from lostit.network import network_available, net
from lostit.progress import ProgressIndicatorGUI, ProgressIndicatorCLI
from lostit.records import records_diff, records_filter
from lostit.tind import Tind

# The following is for fixing blurry fonts and controls in wxPython on Windows,
# based on the solution by Nairen Zheng posted to Stack Overflow on
# 2019-01-18: https://stackoverflow.com/a/54247018/743730.

if sys.platform.startswith('win'):
    import ctypes
    try:
        ctypes.windll.shcore.SetProcessDpiAwareness(True)
    except:
        pass


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
    debug      = ('turn on debugging',                              'flag',   '@'),
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
        if __debug__: set_debug(True)

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

            # Get the data from TIND and the Google spreadsheet of lost
            # items, we look at the two first tabs.  The tab lookup is done
            # by position, NOT by name; the names of the tabs make no
            # difference.  Lost It! assumes that the first tab is the current
            # NOS list and the second tab is a list of historical records,
            # but it doesn't care what the cut-off is between the tabs.  It
            # merely gathers the records from both tabs.
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
                tracer.update('Sending email for each lost item')
                for num, record in enumerate(new_records, 1):
                    subject  = 'Lost It! "{}"'.format(record.item_title)
                    body     = email_body(record, google.spreadsheet_url(sid))
                    sender   = accesser.user + '@caltech.edu'
                    password = accesser.password
                    mailer   = Mailer(mail_server, mail_port)
                    mailer.send(sender, password, recipients, subject, body)
                    tracer.update('Sent {}'.format(num))
        except (KeyboardInterrupt, UserCancelled) as ex:
            tracer.stop('Quitting.')
            controller.stop()
        except ServiceFailure:
            tracer.stop('Stopping due to a problem connecting to services')
            controller.stop()
        except Exception as ex:
            import traceback
            if debug:
                tracer.stop('{}\n{}'.format(str(ex), traceback.format_exc()))
                import pdb; pdb.set_trace()
            else:
                notifier.fatal(lostit.__title__ + ' encountered an error',
                               str(ex) + '\n' + traceback.format_exc())
                tracer.stop('Stopping due to error')
                controller.stop()
        else:
            tracer.update('Done. You can quit when ready.')
            controller.stop()


# Miscellaneous utilities.
# .............................................................................

def email_body(record, sheet_url):
    # Helper function
    def value(field):
        return '-- none --' if field == '' else field

    if __debug__: log('formatting email body')
    summary = '''
          Title: {}
         Author: {}
         Call #: {}
        Barcode: {}
  Location code: {}
  Location name: {}
 Requester name: {}
Requester email: {}
    Patron type: {}

'''.format(value(record.item_title), value(record.item_author),
           value(record.item_call_number), value(record.item_barcode),
           value(record.item_location_code), value(record.item_location_name),
           value(record.requester_name), value(record.requester_email),
           value(record.requester_type))
    joke = random_pun()
    return '''
Lost It! was just run and it discovered a new lost item recorded in TIND:
{}
Here is the URL for the spreadsheet of lost items:
{}

{}
'''.format(summary, sheet_url, "---\nAnd here is a random pun:\n" + joke if joke else '')


def random_pun():
    if __debug__: log('getting a random joke from https://icanhazdadjoke.com')
    (resp, error) = net('get', 'https://icanhazdadjoke.com/',
                        timeout = 10, headers = {'Accept': 'text/plain'})
    text = resp.text.encode('ascii', 'ignore').decode() if not error else None
    return text


# Main entry point.
# ......................................................................

# On windows, we want plac to use slash intead of hyphen for cmd-line options.
if sys.platform.startswith('win'):
    main.prefix_chars = '/'

# The following allows users to invoke this using "python3 -m handprint".
if __name__ == '__main__':
    plac.call(main)


# For Emacs users
# ......................................................................
# Local Variables:
# mode: python
# python-indent-offset: 4
# End:
