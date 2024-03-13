"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = _interopRequireWildcard(require("@heml/utils"));
var _Style = _interopRequireDefault(require("./Style"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // eslint-disable-line no-unused-vars
var background = _utils.cssGroups.background,
  box = _utils.cssGroups.box,
  padding = _utils.cssGroups.padding,
  border = _utils.cssGroups.border,
  borderRadius = _utils.cssGroups.borderRadius;
var breakpoint = 600;
export default exports["default"] = (0, _utils.createElement)('column', {
  attrs: ['small', 'large'],
  parent: ['row'],
  defaultAttrs: {
    small: 12,
    large: 12
  },
  containsText: true,
  rules: {
    '.column': [{
      '@pseudo': 'root'
    }, {
      display: _utils.transforms.trueHide(undefined, true)
    }, background, box, padding, border, borderRadius, 'vertical-align']
  },
  render: function render(attrs, contents) {
    var small = parseInt(attrs.small, 10);
    var large = parseInt(attrs.large, 10);
    var largeWidth = "".concat(Math.round(100 * large / 12), "%");
    attrs["class"] += " column col-sm-".concat(small);
    delete attrs.large;
    delete attrs.small;
    return [/*#__PURE__*/React.createElement("td", _extends({}, attrs, {
      width: largeWidth,
      style: "width: ".concat(largeWidth, ";"),
      align: "left",
      valign: "top"
    }), contents.length === 0 ? '&nbsp;' : contents), small === large ? '' : /*#__PURE__*/React.createElement(_Style["default"], {
      "for": "column",
      "heml-embed": true
    }, "\n         @media only screen and (max-width: ".concat(breakpoint, "px) {\n          .column, .column-filler { float: left; box-sizing: border-box; }\n          .col-sm-").concat(small, " {\n            width: ").concat(Math.round(100 * small / 12), "% !important;\n            display: block;\n          }\n        }\n      "))];
  }
});
