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
from   ratelimit import limits, sleep_and_retry
from   sidetrack import log
from   smtplib import SMTP
import ssl

import lostit
from lostit.exceptions import *


# Exported classes.
# .............................................................................
# As of 2019-11-20, Caltech uses office365 as its mail server, and Microsoft's
# documentation states that the server allows a max of 30 msgs/minute:
# https://docs.microsoft.com/en-us/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#receiving-and-sending-limits
#
# Archived version of the web page above:
# https://web.archive.org/web/20191120212839/https://docs.microsoft.com/en-us/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits?redirectedfrom=MSDN

class Mailer():
    '''Simple interface for Lost It! to send mail.'''

    def __init__(self, server, port):
        '''Initialize Mailer with the SMTP server host name and port.'''
        self._smtp_server = server
        self._smtp_port   = port


    @sleep_and_retry
    @limits(calls = 30, period = 60)
    def send(self, sender, password, recipients, subject, body):
        '''Send a message with the given subject and body.'''

        # Docs for smtplib in Python 3.7 say it has to be a list.
        recipients = recipients.split(',')

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
            raise ServiceFailure(str(ex))
