<h1 align="center">Help for Lost It!</h1>

Basic operation
---------------

<img align="right" width="50%" src=".graphics/lostit-initial-window.png">

_Lost It!_ has both a GUI interface and a command-line interface.  The GUI interface is simple: a user starts the program in a typical way (e.g., by double-clicking the program icon) and _Lost It!_ creates a main window, then immediately begins its work by connecting to Caltech.tind.io and asking the user for login credentials.  The image at right depicts the first dialog. After the user types in a login name and password, and clicks the **OK** button, the program does the following behind the scenes:

1. Searches Caltech.tind.io for items with status "lost"
2. Extracts the data returned by TIND
3. Downloads the Google spreadsheet used by the Circulation staff
4. Compares the two data sources to determine if the TIND search returned new lost items
5. Adds any new lost items to the Google spreadsheet
7. (Optionally) opens the spreadsheet in a browser so the user can see it

Items in the spreadsheet are assumed to be never deleted.

Unless an error occurs, _Lost It!_ presents only one other dialog: to ask the user whether the Google spreadsheet should be opened in a browser window.  If the user clicks the **Yes** button, it's opened.  Either way, _Lost It!_ exits after the user answers the dialog.

<p align="center"><img width="900px" src=".graphics/google-spreadsheet.png"></p>


How new lost items are found
-----------------------------

"New lost items" are determined in the following way: _Lost It!_ searches the Caltech.tind.io global list for items with `status:lost`, compares their bar codes to the bar codes requested in the Google spreadsheet as well as the dates that they were added to the spreadsheet, and writes out records with never-before lost barcodes or (if a barcode has been seen before) barcodes that were added on a previous date.  (The latter catches the situation where an item has been reported lost in the past, then found again in the past, then lost again at some later date.  Without tracking the date it was added to the spreadsheet, _Lost It!_ would simply assume it was already know to be lost, whereas in reality it might have been found for a time and recently re-lost.)

<p align="center"><img width="800px" src=".graphics/tind-lost-items.png"></p>
