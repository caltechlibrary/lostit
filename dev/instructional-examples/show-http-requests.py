#!/usr/bin/env python3

import urllib.request
import urllib.parse

#Subclass of HTTPRedirectHandler. Does not do much, but is very
#verbose. prints out all the redirects. Compaire with what you see
#from looking at your browsers redirects (using live HTTP Headers or similar)
class ShibRedirectHandler (urllib.request.HTTPRedirectHandler):
    def http_error_302(self, req, fp, code, msg, headers):
        print (req)
        print (fp.geturl())
        print (code)
        print (msg)
        print (headers)
        #without this return (passing parameters onto baseclass) 
        #redirect following will not happen automatically for you.
        return urllib.request.HTTPRedirectHandler.http_error_302(self,
                                                          req,
                                                          fp,
                                                          code,
                                                          msg,
                                                          headers)

cookieprocessor = urllib.request.HTTPCookieProcessor()
opener = urllib.request.build_opener(ShibRedirectHandler, cookieprocessor)

login_data = urllib.parse.urlencode({'j_username': 'mhucka', 'j_password': '<@cit4me!>'}).encode('ascii')

#response = opener.open('https://caltech.tind.io/youraccount/shibbolethdisplay', login_data)

# The following leads to the page "authorization failure" but the upper right
# has a login link and the url has a referer argument
# response = opener.open('https://caltech.tind.io/admin2/bibcirculation/requests?', login_data)

# This is the login link from the previous page
# response = opener.open('https://caltech.tind.io/youraccount/login?ln=en&referer=https%3A//caltech.tind.io/admin2/bibcirculation/requests%3F', login_data)

# From the previous one, you get a login page and the button for the login
# uses the following
response = opener.open('https://caltech.tind.io/youraccount/shibboleth?referer=https%3A//caltech.tind.io/admin2/bibcirculation/requests%3F', login_data)
import pdb; pdb.set_trace()
