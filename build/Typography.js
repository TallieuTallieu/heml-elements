"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ul = exports.P = exports.Ol = exports.Li = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.A = void 0;
var _utils = _interopRequireWildcard(require("@heml/utils"));
var _lodash = require("lodash");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // eslint-disable-line no-unused-vars
var margin = _utils.cssGroups.margin,
  background = _utils.cssGroups.background,
  border = _utils.cssGroups.border,
  borderRadius = _utils.cssGroups.borderRadius,
  text = _utils.cssGroups.text,
  font = _utils.cssGroups.font;

/**
 * create mergable text element
 * @param  {String} name
 * @param  {Object} element
 * @return {Object}
 */
function createTextElement(name) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var classToAdd = '';
  var Tag = name;
  if (/^h\d$/i.test(name)) {
    classToAdd = 'header';
  } else {
    classToAdd = 'text';
  }
  return (0, _utils.createElement)(name, (0, _lodash.merge)({
    attrs: true,
    rules: _defineProperty({}, ".".concat(name, ".").concat(classToAdd), [{
      '@pseudo': 'root'
    }, '@default', {
      display: _utils.transforms.trueHide()
    }, margin, background, border, borderRadius, text, font]),
    render: function render(attrs, contents) {
      attrs["class"] += " ".concat(classToAdd, " ").concat(name);
      return /*#__PURE__*/React.createElement(Tag, attrs, contents);
    }
  }, element));
}
var H1 = exports.H1 = createTextElement('h1');
var H2 = exports.H2 = createTextElement('h2');
var H3 = exports.H3 = createTextElement('h3');
var H4 = exports.H4 = createTextElement('h4');
var H5 = exports.H5 = createTextElement('h5');
var H6 = exports.H6 = createTextElement('h6');
var P = exports.P = createTextElement('p');
var Ol = exports.Ol = createTextElement('ol');
var Ul = exports.Ul = createTextElement('ul');
var Li = exports.Li = createTextElement('li');
export var A = exports.A = (0, _utils.createElement)('a', {
  attrs: true,
  defaultAttrs: {
    href: '#'
  },
  rules: {
    '.a': [{
      '@pseudo': 'root'
    }, {
      '@default': true
    }, {
      display: _utils.transforms.trueHide('inline')
    }, 'color', 'text-decoration'],
    '.a__text': [{
      '@pseudo': 'text'
    }, 'color', 'text-decoration']
  },
  render: function render(attrs, contents) {
    attrs["class"] += ' a';
    return /*#__PURE__*/React.createElement("a", attrs, /*#__PURE__*/React.createElement("span", {
      "class": "a__text"
    }, contents));
  }
});
