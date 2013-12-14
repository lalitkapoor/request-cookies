var tc = require('tough-cookie');

/**
 * Get the domain given a url
 * @param  {String} url
 * @return {String} domain
 */
function getDomainFromUrl(url) {

};


/**
 * Holds cookies
 * @param {Object} _jar the underlying cookie jar
 */
var CookieJar = function(_jar) {
  this._jar = jar || new tc.CookieJar();
};

/**
 * Add a cookie to the cookie jar
 * @param {String|Object} data can be a Cookie|json object or a set-cookie header string
 * @param {String} domain
 * @param {Function} callback(error) [optional]
 */
CookieJar.prototype.add = function(data, domain, callback) {
  if (data instanceof Cookie)
    this._jar.setCookie(data._cookie, callback);
  else if (typeof data === 'object' || typeof cookie === 'string')
    this._jar.setCookie(new Cookie(data)._cookie);
  else
    if (callback) callback(new Error('invalid data parameter'))
};

/**
 * Remove a cookie by name for a given domain
 * @param  {String} name
 * @param  {String} domain
 */
CookieJar.prototype.remove = function(name, domain) {

};

/**
 * Get cookies that match the given properties
 * @param  {object} props
 * @return {Array} Cookie objects
 */
CookieJar.prototype.getCookies = function(props) {
  // get tough cookies, wrap w/Cookie, return array of Cookie objects
  return [];
};

module.exports.CookieJar = CookieJar;