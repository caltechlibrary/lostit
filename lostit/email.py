'''
email.py: utility code to send email

Authors
-------

Michael Hucka <mhucka@caltech.edu> -- Caltech Library

Copyright
---------

Copyright (c) 2019 by the California Institute of Technology.  This code is
open-source software released under a 3-clause BSD license.  Please see the
file "LICENSE" for more information.
'''

from   email.message import EmailMessage
import os
import re
from   smtplib import SMTP
import ssl
import sys

import lostit
from lostit.debug import log
from lostit.exceptions import *
from lostit.network import net
from lostit.records import LostRecord


# Exported classes.
# .............................................................................

class Mailer():
    '''Simple interface for Lost It! to send mail.'''

    def __init__(self, server, port):
        '''Initialize Mailer with the SMTP server host name and port.'''
        self._smtp_server = server
        self._smtp_port   = port


    def send(self, sender, password, recipients, subject, body):
        '''Send a message with the given subject and body.'''

        msg = EmailMessage()
        msg['From'] = sender
        msg['To'] = recipients
        msg['Subject'] = subject
        msg.set_content(body)
        try:
            with SMTP(self._smtp_server, self._smtp_port) as smtp:
                smtp.ehlo()
                smtp.starttls(context = ssl.create_default_context())
                smtp.ehlo()
                smtp.login(sender, password)
                smtp.sendmail(sender, recipients, msg.as_string())
        except Exception as ex:
            import pdb; pdb.set_trace()
