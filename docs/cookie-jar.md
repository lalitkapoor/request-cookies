add(data, url, \[options\])
---------------------------
Add a cookie to the cookie jar
header string


**Parameters**

**data**:  *String|Object*,  can be a Cookie|json object or a set-cookie

**url**:  *String*,  


**[options]**:  *Object*,  


remove(url, key)
----------------
Remove a cookie by name for a given domain. If the key then all cookies for
the given domain and path (if given) will be removed. Note: when cookies
are added without a path specified the default path is "/" in accordance
with http://tools.ietf.org/search/rfc6265#section-5.1.4 - so you should use
that for the path param when appropriate.


**Parameters**

**url**:  *String*,  


**key**:  *String*,  


getCookies(url, \[options\])
----------------------------
Get cookies that match the given properties


**Parameters**

**url**:  *String*,  


**[options]**:  *Object*,  


getCookieHeaderString(url, \[options\])
---------------------------------------
Get HTTP Cookie header string


**Parameters**

**url**:  *String*,  


**[options]**:  *Object*,  


toJSON()
--------
Get cookie jar as a JSON object


