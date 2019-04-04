from net.grinder.script import Test
from net.grinder.script.Grinder import grinder

from java.lang import String
from java.net import URL
from java.text import SimpleDateFormat
from java.util import List, ArrayList, GregorianCalendar, TimeZone, UUID

from com.gargoylesoftware.htmlunit import WebClient, WebRequestSettings, WebResponse, HttpMethod, DefaultCredentialsProvider

from org.apache.commons.codec.binary import Base64
from org.apache.commons.httpclient import NameValuePair, UsernamePasswordCredentials

props = grinder.getProperties()

log = grinder.logger.output
stdout = grinder.logger.TERMINAL
debug = props.getBoolean('log.debug', False)

httpScheme = props.get('shib.idp.scheme')
idpHost = props.get('shib.idp.host')
idpPort = props.getInt('shib.idp.port', 0)
if idpPort == 0:
    if httpScheme == 'http':
        idpPort = 80
    if httpScheme == 'https':
        idpPort = 443
idpPath =  props.get('shib.idp.path')
idpBaseUrl = httpScheme + '://' + idpHost + ':' + str(idpPort)
idpSSOEndpoint = idpBaseUrl +idpPath + '/profile/SAML2/POST/SSO'

spId = props.get('shib.sp.id')

utctz = TimeZone.getTimeZone("UTC")
dateFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
dateFormat.setTimeZone(utctz)

def executeSSOTest():
    reqInstant = dateFormat.format(GregorianCalendar(utctz).getTime())
    reqId = UUID.randomUUID().toString()
    authnRequest = props.get('shib.sp.authnreq') % (idpSSOEndpoint, reqId, reqInstant, spId)
	
    webClient=WebClient()
    webClient.setUseInsecureSSL(True)
    listreq = ArrayList()
    listreq.add(NameValuePair("SAMLRequest", String(Base64.encodeBase64(String(authnRequest).getBytes()),'US-ASCII')))
    wrs = WebRequestSettings(URL(idpSSOEndpoint), HttpMethod.POST)
    wrs.setRequestParameters(listreq)

    if props.get('shib.idp.auth') == 'FORM':
        webClient.setRedirectEnabled(True);

        if debug: log("sending SSO request to: " + idpSSOEndpoint, stdout)
        wr = webClient.loadWebResponse(wrs)
        if debug: log("Response content: \n"+wr.getContentAsString(), stdout)

        if wr.getStatusCode() != 200:
            raise Exception('Invalid HTTP response code: ' + str(wr.getStatusCode()))
        wrs.setHttpMethod(HttpMethod.POST)
        listauth = ArrayList()
        listauth.add(NameValuePair("j_username", props.get('shib.user.name')))
        listauth.add(NameValuePair("j_password", props.get('shib.user.pass')))
        wrs.setRequestParameters(listauth)
        wrs.setUrl(wr.getRequestUrl())
    else:
        # BASIC auth
        webClient.setRedirectEnabled(False);
        
        if debug: log("sending SSO request to: " + idpSSOEndpoint, stdout)
        wr = webClient.loadWebResponse(wrs)
        if debug: log("Response content: \n"+wr.getContentAsString(), stdout)

        if wr.getStatusCode() != 302:
            raise Exception('Invalid HTTP response code: ' + str(wr.getStatusCode()))
        wrs.setHttpMethod(HttpMethod.GET)
        creds = DefaultCredentialsProvider()
        creds.addCredentials(props.get('shib.user.name'), props.get('shib.user.pass'), idpHost, idpPort, props.get('shib.user.realm'))
        wrs.setCredentialsProvider(creds);

        if debug: log("sending BASIC auth to: " + wr.getResponseHeaderValue('Location'), stdout)
        wrs.setUrl(URL(wr.getResponseHeaderValue('Location')))

    if debug: log("sending login request to: " + str(wr.getRequestUrl()), stdout)
    wr = webClient.loadWebResponse(wrs)
    
    if debug:
        log("Request URL = "+wr.getRequestUrl().toString(), stdout)
        log(wr.getContentAsString(), stdout)
    
    if wr.getStatusCode() not in [ 200, 301, 302 ]:
        if debug: log("error response: " + response.getText(), stdout)
        raise Exception('Invalid HTTP response code: ' + str(wr.getStatusCode()))
    return wr.getContentAsString()


def validateReturn(responseString):
    return """<input type=\"hidden\" name=\"SAMLResponse\"""" in responseString


ssoTest = Test(2, 'SAML2 Profile SSO, IdP Only').wrap(executeSSOTest)


class TestRunner:    
    def __call__(self):
        grinder.statistics.delayReports = 1
        
        strResponse = ssoTest()
        if validateReturn(strResponse):
            log("Success!")
            grinder.statistics.forLastTest.setSuccess(1)
        else:
            log("Failure!")
            grinder.statistics.forLastTest.setSuccess(0)
