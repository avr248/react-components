"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _element = _interopRequireDefault(require("../../element"));

var _context = _interopRequireDefault(require("./field/context"));

var _normalizer = require("../../../services/normalizer");

var _excluded = ["className", "rounded", "style", "size", "color", "loading", "status", "disabled", "value", "multiple", "children", "name", "domRef"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = function Select(_ref) {
  var _classnames;

  var className = _ref.className,
      rounded = _ref.rounded,
      style = _ref.style,
      size = _ref.size,
      color = _ref.color,
      loading = _ref.loading,
      status = _ref.status,
      disabled = _ref.disabled,
      value = _ref.value,
      multiple = _ref.multiple,
      children = _ref.children,
      name = _ref.name,
      domRef = _ref.domRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var context = (0, _context["default"])();
  var calculatedSize = size || context.size;
  return /*#__PURE__*/_react["default"].createElement(_element["default"], {
    domRef: domRef,
    className: (0, _classnames3["default"])('select', className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(calculatedSize), calculatedSize), _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, 'is-loading', loading), _defineProperty(_classnames, 'is-multiple', multiple), _defineProperty(_classnames, 'is-rounded', rounded), _classnames)),
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    className: (0, _classnames3["default"])(_defineProperty({}, "is-".concat((0, _normalizer.normalizeStatus)(status)), status)),
    multiple: multiple,
    value: value,
    disabled: disabled,
    name: name
  }), children));
};

Select.defaultProps = {
  renderAs: 'select'
};
var _default = Select;
exports["default"] = _default;
//# sourceMappingURL=select.js.map