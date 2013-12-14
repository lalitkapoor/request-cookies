var Cookie = require('./lib/cookie');
var CookieJar = require('./lib/cookie-jar');

/**
 * HTTP Cookie
 * @param {String|Object} data can be a cookie header string or a json object
 */
module.exports.Cookie = function(data) {
  return new Cookie(data);
};

/**
 * Holds Cookies
 */
module.exports.CookieJar = function() {
  return new CookieJar();
};