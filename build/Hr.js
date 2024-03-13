"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = _interopRequireWildcard(require("@heml/utils"));
var _Style = _interopRequireDefault(require("./Style"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // eslint-disable-line no-unused-vars
var trueHide = _utils.transforms.trueHide,
  ieAlignFallback = _utils.transforms.ieAlignFallback;
var background = _utils.cssGroups.background,
  margin = _utils.cssGroups.margin,
  padding = _utils.cssGroups.padding,
  border = _utils.cssGroups.border,
  borderRadius = _utils.cssGroups.borderRadius,
  width = _utils.cssGroups.width,
  height = _utils.cssGroups.height,
  table = _utils.cssGroups.table,
  box = _utils.cssGroups.box;
var _default = exports["default"] = (0, _utils.createElement)('hr', {
  children: false,
  rules: {
    '.hr': [{
      '@pseudo': 'root'
    }, {
      display: trueHide()
    }, margin, width],
    '.hr__table__ie': ['width', 'max-width', _defineProperty({}, margin, ieAlignFallback)],
    '.hr__table': [{
      '@pseudo': 'table'
    }, table],
    '.hr__row': [{
      '@pseudo': 'row'
    }],
    '.hr__cell': [{
      '@pseudo': 'cell'
    }, height, background, box, padding, border, borderRadius, 'vertical-align']
  },
  render: function render(attrs, contents) {
    attrs["class"] += ' hr';
    return /*#__PURE__*/React.createElement("div", attrs, (0, _utils.condition)('mso | IE', "<table class=\"hr__table__ie\" role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td>"), /*#__PURE__*/React.createElement("table", {
      "class": "hr__table",
      role: "presentation",
      border: "0",
      align: "center",
      cellpadding: "0",
      cellspacing: "0",
      width: "100%",
      style: "table-layout: fixed;"
    }, /*#__PURE__*/React.createElement("tr", {
      "class": "hr__row"
    }, /*#__PURE__*/React.createElement("td", {
      "class": "hr__cell",
      width: "100%",
      align: "left",
      valign: "top"
    }, "&nbsp;"))), (0, _utils.condition)('mso | IE', "</td></tr></table>"), /*#__PURE__*/React.createElement(_Style["default"], {
      "for": "hr"
    }, "\n          hr {\n            width: 100%;\n            margin: auto;\n            border-top: 1px solid #9A9A9A;\n          }\n        "));
  }
});