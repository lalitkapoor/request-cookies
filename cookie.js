var tc = require('tough-cookie');

var modifiable = [
  'key'
, 'value'
, 'expires'
, 'maxAge'
, 'domain'
, 'path'
, 'secure'
, 'httpOnly'
, 'extensions'
];

var readOnly = [
  'hostOnly'
, 'creation'
, 'lastAccessed'
, 'pathIsDefault'
];

var noop = function(){};

var Cookie = function(data, tcCookie) {
  this._cookie = tcCookie || new tc.Cookie();

  var self = this;
  modifiable.map(function(attribute) {
    Object.defineProperty(self, attribute, {
    enumerable: true
    , get: function() {
        return self._cookie[attribute];
      }
    , set: function(val) {
        self._cookie[attribute] = val;
      }
    });
  });

  readOnly.map(function(attribute) {
    Object.defineProperty(self, attribute, {
      get: function(){
        return this._cookie[attribute];
      }
    , set: noop
    , enumerable: true
    });
  });

  this.set(data);
};

/**
 * Get cookie as a JSON object
 * @return {object}
 */
Cookie.prototype.toJSON = function() {
  return {
    key: this.key
  , value: this.value
  , expires: this.expires
  , maxAge: this.maxAge
  , domain: this.domain
  , path: this.path
  , secure: this.secure
  , httpOnly: this.httpOnly
  , extensions: this.extensions
  };
};

/**
 * Get cookie as a set-cookie header string
 * @return {String}
 */
Cookie.prototype.toString = function() {
  return this._cookie.toString();
};

/**
 * Set multiple cookie properties at once
 * @param {String|Object} data
 */
Cookie.prototype.set = function(data) {
  if (!data) return;

  if (typeof data !== 'string' && typeof data !== 'object')
    throw Error("invalid data");

  for (key in data) {
    if (!data.hasOwnProperty(key)) continue;
    if (modifiable.indexOf(key) < 0) continue;
    this[key] = data[key];
  }
};

module.exports = Cookie;