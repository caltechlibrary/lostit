'''control.py: human interface controller for Lost It!

After trying alternatives and failing to get things to work, I settled on the
following approach that works on both Mac and Windows 10 in my testing.

The constrol structure of Lost It! is somewhat inverted from a typical
WxPython application.  The typical application would be purely event-driven:
it would be implemented as an object derived from wx.Frame with methods for
different kinds of actions that the user can trigger by interacting with
controls in the GUI.  Once the WxPython app.MainLoop() function is called,
nothing happens until the user does something to trigger an activitiy.
Conversely, in Lost It's case, I not only wanted to allow command-line based
interaction, but also wanted the entire process to be started as soon as the
user starts the Lost It application.  This is incompatible with the typical
event-driven application structure because there's an explicit sequential
driver and it needs to be kicked off automatically after app.MainLoop() is
called.

The approach taken here has two main features.

* First, there are two threads running: one for the WxPython GUI MainLoop()
  code and all GUI objects (like MainFrame and LoginDialog in this file), and
  another thread for the real main body that implements Lost It's sequence of
  operations.  The main thread is kicked off by LostItControlGUI's start()
  method right before calling app.MainLoop().

* Second, the main body thread invokes GUI operations using a combination of
  in-application message passing (using a publish-and-subscribe scheme from
  PyPubsub) and the use of wx.CallAfter().  The MainFrame objects implement
  some methods that can be invoked by other classes, and MainFrame defines
  subscriptions for messages to invoke those methods.  Callers then have to
  use the following idiom to invoke the methods:

    wx.CallAfter(pub.sendMessage, "name", arg1 = "value1", arg2 = "value2")

  The need for this steps from the fact that in WxPython, if you attempt to
  invoke a GUI method from outside the main thread, it will either generate
  an exception or (what I often saw on Windows) simply hang the application.
  wx.CallAfter places the execution into the thread that's running
  MainLoop(), thus solving the problem.

Splitting up the GUI and CLI schemes into separate objects is for the sake of
code modularity and conceptual clarity.

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
import wx.richtext
from   sidetrack import log
import sys
import textwrap
from   threading import Thread
import webbrowser

import lostit
from lostit.files import datadir_path, readable
from lostit.exceptions import *


# Exported classes.
# .............................................................................

class LostItControlBase():
    '''User interface controller base class.'''

    @property
    def is_gui():
        '''Returns True if the GUI version of the interface is being used.'''
        return None


class LostItControlCLI(LostItControlBase):
    '''User interface controller for Lost It! in command-line interface mode.'''

    def __init__(self):
        super().__init__()


    @property
    def is_gui(self):
        '''Returns True if the GUI version of the interface is being used.'''
        return False


    def start(self, worker):
        self._worker = worker
        if worker:
            worker.start()


    def stop(self):
        sys.exit()


class LostItControlGUI(LostItControlBase):
    '''User interface controller for Lost It! in GUI mode.'''

    def __init__(self):
        super().__init__()
        self._app = wx.App()
        self._frame = LostItMainFrame(None, wx.ID_ANY, "")
        self._app.SetTopWindow(self._frame)
        self._frame.Center()
        self._frame.Show(True)


    @property
    def is_gui(self):
        '''Returns True if the GUI version of the interface is being used.'''
        return True


    def start(self, worker):
        self._worker = worker
        if worker:
            self._worker.start()
        self._app.MainLoop()


    def stop(self):
        wx.CallAfter(self._frame.Destroy)


# Internal implementation classes.
# .............................................................................

class LostItMainFrame(wx.Frame):
    '''Defines the main application GUI frame.'''

    def __init__(self, *args, **kwds):
        self._cancel = False
        self._height = 350 if sys.platform.startswith('win') else 300
        self._width  = 500

        kwds["style"] = kwds.get("style", 0) | wx.DEFAULT_FRAME_STYLE | wx.TAB_TRAVERSAL
        wx.Frame.__init__(self, *args, **kwds)
        self.panel = wx.Panel(self)
        headline = lostit.__name__ + " — update spreadsheet of lost items"
        self.headline = wx.StaticText(self.panel, wx.ID_ANY, headline, style = wx.ALIGN_CENTER)
        self.headline.SetFont(wx.Font(12, wx.FONTFAMILY_DEFAULT, wx.FONTSTYLE_ITALIC,
                                      wx.FONTWEIGHT_BOLD, 0, "Arial"))

        # For macos, I figured out how to make the background color of the text
        # box be the same as the rest of the UI elements.  That looks nicer for
        # our purposes (IMHO) than the default (which would be white), but then
        # we need a divider to separate the headline from the text area.
        if not sys.platform.startswith('win'):
            self.divider1 = wx.StaticLine(self.panel, wx.ID_ANY)
            self.divider1.SetMinSize((self._width, 2))

        self.text_area = wx.richtext.RichTextCtrl(self.panel, wx.ID_ANY,
                                                  size = (self._width, 200),
                                                  style = wx.TE_MULTILINE | wx.TE_READONLY)

        # Quit button on the bottom.
        if not sys.platform.startswith('win'):
            self.divider2 = wx.StaticLine(self.panel, wx.ID_ANY)
        self.quit_button = wx.Button(self.panel, label = "Quit")
        self.quit_button.Bind(wx.EVT_KEY_DOWN, self.on_cancel_or_quit)

        # On macos, the color of the text background is set to the same as the
        # rest of the UI panel.  I haven't figured out how to do it on Windows.
        if not sys.platform.startswith('win'):
            gray = wx.SystemSettings.GetColour(wx.SYS_COLOUR_BACKGROUND)
            self.text_area.SetBackgroundColour(gray)

        # Create a simple menu bar.
        self.menuBar = wx.MenuBar(0)

        # Add a "File" menu with a quit item.
        self.fileMenu = wx.Menu()
        self.exitItem = wx.MenuItem(self.fileMenu, wx.ID_EXIT, "&Exit",
                                    wx.EmptyString, wx.ITEM_NORMAL)
        self.fileMenu.Append(self.exitItem)
        if sys.platform.startswith('win'):
            # Only need to add a File menu on Windows.  On Macs, wxPython
            # automatically puts the wx.ID_EXIT item under the app menu.
            self.menuBar.Append(self.fileMenu, "&File")

        # Add a "help" menu bar item.
        self.helpMenu = wx.Menu()
        self.helpItem = wx.MenuItem(self.helpMenu, wx.ID_HELP, "&Help",
                                    wx.EmptyString, wx.ITEM_NORMAL)
        self.helpMenu.Append(self.helpItem)
        self.helpMenu.AppendSeparator()
        self.aboutItem = wx.MenuItem(self.helpMenu, wx.ID_ABOUT,
                                     "&About " + lostit.__name__,
                                     wx.EmptyString, wx.ITEM_NORMAL)
        self.helpMenu.Append(self.aboutItem)
        self.menuBar.Append(self.helpMenu, "Help")

        # Put everything together and bind some keystrokes to events.
        self.SetMenuBar(self.menuBar)
        self.Bind(wx.EVT_MENU, self.on_cancel_or_quit, id = self.exitItem.GetId())
        self.Bind(wx.EVT_MENU, self.on_help, id = self.helpItem.GetId())
        self.Bind(wx.EVT_MENU, self.on_about, id = self.aboutItem.GetId())
        self.Bind(wx.EVT_CLOSE, self.on_cancel_or_quit)
        self.Bind(wx.EVT_BUTTON, self.on_cancel_or_quit, self.quit_button)

        close_id = wx.NewId()
        self.Bind(wx.EVT_MENU, self.on_cancel_or_quit, id = close_id)
        accel_tbl = wx.AcceleratorTable([(wx.ACCEL_CTRL, ord('W'), close_id )])
        self.SetAcceleratorTable(accel_tbl)

        # Now that we created all the elements, set layout and placement.
        self.SetSize((self._width, self._height))
        self.SetTitle(lostit.__name__)
        self.outermost_sizer = wx.BoxSizer(wx.VERTICAL)
        self.outermost_sizer.AddSpacer(5)
        self.outermost_sizer.Add(self.headline, 0, wx.ALIGN_CENTER, 0)
        self.outermost_sizer.AddSpacer(5)
        if not sys.platform.startswith('win'):
            self.outermost_sizer.Add(self.divider1, 0, wx.EXPAND, 0)
            self.outermost_sizer.AddSpacer(5)
        self.outermost_sizer.Add(self.text_area, 0, wx.EXPAND, 0)
        self.outermost_sizer.AddSpacer(5)
        if not sys.platform.startswith('win'):
            self.outermost_sizer.Add(self.divider2, 0, wx.EXPAND, 0)
            self.outermost_sizer.AddSpacer(5)
        self.outermost_sizer.Add(self.quit_button, 0, wx.BOTTOM | wx.CENTER, 0)
        self.outermost_sizer.AddSpacer(5)
        self.SetSizer(self.outermost_sizer)
        self.Layout()
        self.Centre()

        # Finally, hook in message-passing interface.
        pub.subscribe(self.progress_message, "progress_message")
        pub.subscribe(self.login_dialog, "login_dialog")


    def on_cancel_or_quit(self, event):
        if __debug__: log('got Exit/Cancel')
        self._cancel = True
        self.Destroy()
        return True


    def on_escape(self, event):
        if __debug__: log('got Escape')
        keycode = event.GetKeyCode()
        if keycode == wx.WXK_ESCAPE:
            self.on_cancel_or_quit(event)
        else:
            event.Skip()
        return True


    def on_about(self, event):
        if __debug__: log('opening About window')
        dlg = wx.adv.AboutDialogInfo()
        dlg.SetName(lostit.__name__)
        dlg.SetVersion(lostit.__version__)
        dlg.SetLicense(lostit.__license__)
        dlg.SetDescription('\n'.join(textwrap.wrap(lostit.__description__, 81)))
        dlg.SetWebSite(lostit.__url__)
        dlg.AddDeveloper(lostit.__author__)
        wx.adv.AboutBox(dlg)
        return True


    def on_help(self, event):
        if __debug__: log('opening Help window')
        wx.BeginBusyCursor()
        help_file = path.join(datadir_path(), "help.html")
        if readable(help_file):
            webbrowser.open_new("file://" + help_file)
        wx.EndBusyCursor()
        return True


    def progress_message(self, message):
        self.text_area.SetInsertionPointEnd()
        self.text_area.AppendText(message + ' ...\n')
        self.text_area.ShowPosition(self.text_area.GetLastPosition())


    def login_dialog(self, results, user, password):
        if __debug__: log('creating and showing login dialog')
        dialog = LoginDialog(self)
        dialog.initialize_values(results, user, password)
        dialog.ShowWindowModal()


class LoginDialog(wx.Dialog):
    '''Defines the modal dialog used for getting the user's login credentials.'''

    def __init__(self, *args, **kwargs):
        super(LoginDialog, self).__init__(*args, **kwargs)
        self._user = None
        self._password = None
        self._cancel = False
        self._wait_queue = None

        panel = wx.Panel(self)
        if sys.platform.startswith('win'):
            self.SetSize((360, 190))
        else:
            self.SetSize((330, 155))
        self.explanation = wx.StaticText(panel, wx.ID_ANY,
                                         'Caltech Access credentials (to access TIND)',
                                         style = wx.ALIGN_CENTER)
        self.explanation.SetFont(wx.Font(9, wx.FONTFAMILY_DEFAULT, wx.FONTSTYLE_ITALIC,
                                         wx.FONTWEIGHT_NORMAL, 0, "Arial"))
        self.top_line = wx.StaticLine(panel, wx.ID_ANY)
        self.login_label = wx.StaticText(panel, wx.ID_ANY, "Caltech login: ", style = wx.ALIGN_RIGHT)
        self.login = wx.TextCtrl(panel, wx.ID_ANY, '', style = wx.TE_PROCESS_ENTER)
        self.login.Bind(wx.EVT_KEY_DOWN, self.on_enter_or_tab)
        self.login.Bind(wx.EVT_TEXT, self.on_text)
        self.password_label = wx.StaticText(panel, wx.ID_ANY, "Caltech password: ", style = wx.ALIGN_RIGHT)
        self.password = wx.TextCtrl(panel, wx.ID_ANY, '', style = wx.TE_PASSWORD)
        self.password.Bind(wx.EVT_KEY_DOWN, self.on_enter_or_tab)
        self.password.Bind(wx.EVT_TEXT, self.on_text)
        self.bottom_line = wx.StaticLine(panel, wx.ID_ANY)
        self.cancel_button = wx.Button(panel, wx.ID_ANY, "Cancel")
        self.cancel_button.Bind(wx.EVT_KEY_DOWN, self.on_escape)
        self.ok_button = wx.Button(panel, wx.ID_ANY, "OK")
        self.ok_button.Bind(wx.EVT_KEY_DOWN, self.on_ok_enter_key)
        self.ok_button.SetDefault()
        self.ok_button.Disable()

        # Put everything together and bind some keystrokes to events.
        self.__set_properties()
        self.__do_layout()
        self.Bind(wx.EVT_BUTTON, self.on_cancel_or_quit, self.cancel_button)
        self.Bind(wx.EVT_BUTTON, self.on_ok, self.ok_button)
        self.Bind(wx.EVT_CLOSE, self.on_cancel_or_quit)

        close_id = wx.NewId()
        self.Bind(wx.EVT_MENU, self.on_cancel_or_quit, id = close_id)
        accel_tbl = wx.AcceleratorTable([
            (wx.ACCEL_CTRL, ord('W'), close_id ),
            (wx.ACCEL_CMD, ord('.'), close_id ),
        ])
        self.SetAcceleratorTable(accel_tbl)


    def __set_properties(self):
        self.SetTitle(lostit.__name__)
        self.login_label.SetToolTip("The account name to use to log in to caltech.tind.io. This should be a Caltech access login name.")
        self.login.SetMinSize((195, 22))
        self.password_label.SetToolTip("The account password to use to log in to caltech.tind.io. This should be a Caltech access password.")
        self.password.SetMinSize((195, 22))
        self.ok_button.SetFocus()


    def __do_layout(self):
        self.outermost_sizer = wx.BoxSizer(wx.VERTICAL)
        self.button_sizer = wx.BoxSizer(wx.HORIZONTAL)
        self.login_sizer = wx.FlexGridSizer(2, 2, 5, 0)
        self.outermost_sizer.Add((360, 5), 0, wx.ALIGN_CENTER, 0)
        self.outermost_sizer.Add(self.explanation, 0, wx.ALIGN_CENTER, 0)
        self.outermost_sizer.Add((360, 5), 0, wx.ALIGN_CENTER, 0)
        self.outermost_sizer.Add(self.top_line, 0, wx.EXPAND, 0)
        self.outermost_sizer.Add((360, 8), 0, wx.ALIGN_CENTER, 0)
        self.login_sizer.Add(self.login_label, 0, wx.ALIGN_RIGHT, 0)
        self.login_sizer.Add(self.login, 0, wx.EXPAND, 0)
        self.login_sizer.Add(self.password_label, 0, wx.ALIGN_RIGHT, 0)
        self.login_sizer.Add(self.password, 0, wx.EXPAND, 0)
        self.outermost_sizer.Add(self.login_sizer, 1, wx.ALIGN_CENTER | wx.FIXED_MINSIZE, 5)
        self.outermost_sizer.Add((360, 5), 0, 0, 0)
        self.outermost_sizer.Add(self.bottom_line, 0, wx.EXPAND, 0)
        self.outermost_sizer.Add((360, 5), 0, 0, 0)
        self.button_sizer.Add((0, 0), 0, 0, 0)
        self.button_sizer.Add(self.cancel_button, 0, wx.ALIGN_CENTER, 0)
        self.button_sizer.Add((10, 20), 0, 0, 0)
        self.button_sizer.Add(self.ok_button, 0, wx.ALIGN_CENTER, 0)
        self.button_sizer.Add((10, 20), 0, wx.ALIGN_CENTER, 0)
        self.outermost_sizer.Add(self.button_sizer, 1, wx.ALIGN_RIGHT, 0)
        self.outermost_sizer.Add((360, 5), 0, wx.ALIGN_CENTER, 0)
        self.SetSizer(self.outermost_sizer)
        self.Layout()
        self.Centre()


    def initialize_values(self, wait_queue, user, password):
        '''Initializes values used to populate the dialog and communicate
        with calling code.

        'wait_queue' must be a Pytho queue.Queue() object.  Callers must
        create the queue object and pass it to this function.  After creating
        and displaying the dialog, callers can use .get() on the queue object
        to wait until the user has either clicked OK or Cancel in the dialog.

        'user' and 'password' are used to populate the credentials form in
        case there are preexisting values to be used as defaults.'''

        self._wait_queue = wait_queue
        self._user = user
        self._password = password
        if self._user:
            self.login.AppendText(self._user)
            self.login.Refresh()
        if self._password:
            self.password.AppendText(self._password)
            self.password.Refresh()


    def return_values(self):
        if __debug__: log('return_values called')
        self._wait_queue.put((self._user, self._password, self._cancel))


    def inputs_nonempty(self):
        user = self.login.GetValue()
        password = self.password.GetValue()
        if user.strip() and password.strip():
            return True
        return False


    def on_ok(self, event):
        '''Stores the current values and destroys the dialog.'''

        if __debug__: log('got OK')
        if self.inputs_nonempty():
            self._cancel = False
            self._user = self.login.GetValue()
            self._password = self.password.GetValue()
            self.return_values()
            # self.Destroy()
            self.return_values()
            self.EndModal(event.EventObject.Id)
        else:
            if __debug__: log('has incomplete inputs')
            self.complain_incomplete_values(event)


    def on_cancel_or_quit(self, event):
        if __debug__: log('got Cancel')
        self._cancel = True
        self.return_values()
        # self.Destroy()
        self.return_values()
        self.EndModal(event.EventObject.Id)


    def on_text(self, event):
        if self.login.GetValue() and self.password.GetValue():
            self.ok_button.Enable()
        else:
            self.ok_button.Disable()


    def on_escape(self, event):
        keycode = event.GetKeyCode()
        if keycode == wx.WXK_ESCAPE:
            if __debug__: log('got Escape')
            self.on_cancel_or_quit(event)
        else:
            event.Skip()


    def on_ok_enter_key(self, event):
        keycode = event.GetKeyCode()
        if keycode in [wx.WXK_RETURN, wx.WXK_NUMPAD_ENTER, wx.WXK_SPACE]:
            self.on_ok(event)
        elif keycode == wx.WXK_ESCAPE:
            self.on_cancel_or_quit(event)
        else:
            event.EventObject.Navigate()


    def on_enter_or_tab(self, event):
        keycode = event.GetKeyCode()
        if keycode in [wx.WXK_RETURN, wx.WXK_NUMPAD_ENTER]:
            # If the ok button is enabled, we interpret return/enter as "done".
            if self.ok_button.IsEnabled():
                self.on_ok(event)
            # If focus is on the login line, move to password.
            if wx.Window.FindFocus() is self.login:
                event.EventObject.Navigate()
        elif keycode == wx.WXK_TAB:
            event.EventObject.Navigate()
        elif keycode == wx.WXK_ESCAPE:
            self.on_cancel_or_quit(event)
        else:
            event.Skip()


    def complain_incomplete_values(self, event):
        dialog = wx.MessageDialog(self, caption = "Missing login and/or password",
                                  message = "Incomplete values – do you want to quit?",
                                  style = wx.YES_NO | wx.ICON_WARNING,
                                  pos = wx.DefaultPosition)
        response = dialog.ShowModal()
        dialog.EndModal(wx.OK)
        dialog.Destroy()
        if (response == wx.ID_YES):
            self._cancel = True
            self.return_values()
