"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tr = exports.Td = exports.Table = void 0;
var _utils = _interopRequireWildcard(require("@heml/utils"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// eslint-disable-line no-unused-vars

var Table = exports.Table = (0, _utils.createElement)('table', {
  attrs: true,
  containsText: true,
  rules: {
    '.table': [{
      '@pseudo': 'root'
    }, '@default', {
      display: _utils.transforms.trueHide('table')
    }]
  },
  render: function render(attrs, contents) {
    attrs["class"] += ' table';
    return /*#__PURE__*/React.createElement("table", attrs, contents);
  }
});
var Tr = exports.Tr = (0, _utils.createElement)('tr', {
  attrs: true,
  containsText: true,
  rules: {
    '.tr': [{
      '@pseudo': 'root'
    }, '@default']
  },
  render: function render(attrs, contents) {
    attrs["class"] += ' tr';
    return /*#__PURE__*/React.createElement("tr", attrs, contents);
  }
});
var Td = exports.Td = (0, _utils.createElement)('td', {
  attrs: true,
  containsText: true,
  rules: {
    '.td': [{
      '@pseudo': 'root'
    }, '@default']
  },
  render: function render(attrs, contents) {
    attrs["class"] += ' td';
    return /*#__PURE__*/React.createElement("td", attrs, contents);
  }
});