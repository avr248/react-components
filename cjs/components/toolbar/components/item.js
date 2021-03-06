"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dropdown = _interopRequireDefault(require("./dropdown"));

var _element = _interopRequireDefault(require("../../element"));

var _excluded = ["className", "active", "children", "hoverable", "renderAs", "arrowless"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ToolbarItem = function ToolbarItem(_ref) {
  var _dropdown$props;

  var className = _ref.className,
      active = _ref.active,
      children = _ref.children,
      hoverable = _ref.hoverable,
      renderAs = _ref.renderAs,
      arrowless = _ref.arrowless,
      props = _objectWithoutProperties(_ref, _excluded);

  var as = renderAs;

  var dropdown = _react["default"].Children.toArray(children).find(function (child) {
    return child.type === _dropdown["default"];
  });

  if (dropdown && renderAs === 'a') {
    as = 'span';
  }

  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    renderAs: as,
    className: (0, _classnames["default"])('toolbar-item', className, {
      'is-active': active,
      'has-dropdown': dropdown,
      'is-hoverable': hoverable,
      'has-dropdown-up': dropdown && ((_dropdown$props = dropdown.props) === null || _dropdown$props === void 0 ? void 0 : _dropdown$props.up),
      'is-arrowless': arrowless
    })
  }), children);
};

ToolbarItem.defaultProps = {
  renderAs: 'a'
};
var _default = ToolbarItem;
exports["default"] = _default;
//# sourceMappingURL=item.js.map