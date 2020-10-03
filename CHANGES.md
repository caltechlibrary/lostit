Change log for Lost It!
=======================

Version 1.6.0
-------------

* Remember the login name from previous runs, to save users the hassle of having to type it each time.  (However, the password must still be typed each time.)
* Fix internal bug in the name of the keychain used to store the user's credentials.


Version 1.5.1
-------------

* Fix problem with storing Google access token on Windows.
* Fix error-printing bug that becomes evident when debugging is turned on and an error occurs.
* Fix blurry text and other GUI elements on windows.
* In the documentation, mention the need for the Tind account to have access to Tind Global Lists
* Use new [`sidetrack`](https://github.com/caltechlibrary/sidetrack) package instead of our own debug log code.


Version 1.5.0
-------------

* At the request of Donna W., send one message per item lost instead of sending the entire list of lost items in one email message.


Version 1.4.5
-------------

* Fix [issue #4](https://github.com/caltechlibrary/lostit/issues/3) (Tind records sometimes lack all the expected fields)
* Some minor internal code changes


Version 1.4.4
-------------

* Fix [issue #3](https://github.com/caltechlibrary/lostit/issues/3) (be robust in case of incomplete rows in the Google NOS spreadsheet)
* Fix [issue #2](https://github.com/caltechlibrary/lostit/issues/2) 
(earliest -- not most recent -- hold request should be reported). 


Version 1.4.3
-------------

* Fix [issue #1](https://github.com/caltechlibrary/lostit/issues/1), (requester info is incorrect when multiple copies exist). The code now compares the barcodes of items requested on hold to match against the one that's reported lost.


Version 1.4.2
-------------

* Version bump for final production release to Caltech Circulation desk staff.

Version 1.4.0
-------------

* Link the TIND id to the Caltech tind.io page.
* Fix capitalization of macOS app name: `Lostit` ->  `LostIt`.
* A proper macOS installer is now available.

Version 1.3.2
-------------

* Fix bug preventing mail to multiple recipients from reaching anyone but the first recipient.
* Handle changed spreadsheet layout.


Version 1.3.1
-------------

* Fix crash that occurred when a lost item did not have a requester associated with it.
* Fix slightly broken github css used to create ABOUT.html.
* Add a random joke to the end of every email message, just for fun.  (Thank you, https://icanhazdadjoke.com/.)
* Update copyright year in all the files. 
* Minor internal changes and cleanup.


Version 1.3.0
-------------

* Fix the problem that the requester name and date were not being filled in in the NOS spreadsheet.
* Support new NOS spreadsheet format, with new columns
* Get requester/patron details like email address and patron type
* Other misc. bug fixes


Version 1.2.0
-------------

The main addition in this release is support for sending email with a summary of the lost item(s).
