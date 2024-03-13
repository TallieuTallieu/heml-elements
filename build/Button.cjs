"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = _interopRequireWildcard(require("@heml/utils"));
var _lodash = require("lodash");
var _Style = _interopRequireDefault(import("./Style.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // eslint-disable-line no-unused-vars
var background = _utils.cssGroups.background,
  margin = _utils.cssGroups.margin,
  padding = _utils.cssGroups.padding,
  border = _utils.cssGroups.border,
  borderRadius = _utils.cssGroups.borderRadius,
  width = _utils.cssGroups.width,
  height = _utils.cssGroups.height,
  table = _utils.cssGroups.table,
  text = _utils.cssGroups.text,
  font = _utils.cssGroups.font,
  box = _utils.cssGroups.box;
exports["default"] = (0, _utils.createElement)('button', {
  attrs: ['href', 'target'],
  defaultAttrs: {
    href: '#'
  },
  rules: {
    '.button': [{
      '@pseudo': 'root'
    }, {
      display: _utils.transforms.trueHide('block')
    }],
    '.button__table': [{
      '@pseudo': 'table'
    }, margin, table],
    '.button__cell': [{
      '@pseudo': 'cell'
    }, background, padding, borderRadius, border, height, width, box],
    '.button__link': [{
      '@pseudo': 'link'
    }, background, text, font],
    '.button__text': [{
      '@pseudo': 'text'
    }, 'color', 'text-decoration']
  },
  render: function render(attrs, contents) {
    attrs["class"] += ' button';
    return /*#__PURE__*/React.createElement("div", (0, _lodash.omit)(attrs, ['href', 'target']), /*#__PURE__*/React.createElement("table", {
      role: "presentation",
      width: "100%",
      align: "left",
      border: "0",
      cellpadding: "0",
      cellspacing: "0"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("table", {
      role: "presentation",
      width: "auto",
      align: "center",
      border: "0",
      cellspacing: "0",
      cellpadding: "0",
      "class": "button__table"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      align: "center",
      "class": "button__cell"
    }, /*#__PURE__*/React.createElement("a", _extends({}, (0, _lodash.pick)(attrs, ['href', 'target']), {
      "class": "button__link",
      style: "display: inline-block;"
    }), /*#__PURE__*/React.createElement("span", {
      "class": "button__text"
    }, contents)))))))), /*#__PURE__*/React.createElement(_Style["default"], {
      "for": "button"
    }, "\n          button {\n            margin: auto;\n            border-radius: 3px;\n            padding: 6px 12px;\n            background-color: #2097e4;\n            color: #ffffff;\n            text-decoration: none;\n          }\n        "));
  }
});
