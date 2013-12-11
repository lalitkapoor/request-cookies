var CookieJar = require('./CookieJar');
var Cookie = require('./Cookie');

module.exports.CookieJar = CookieJar;

module.exports.Cookie = function(data) {
  return new Cookie(data);
};