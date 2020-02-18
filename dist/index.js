"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSitecoreProps = void 0;

var _react = _interopRequireWildcard(require("react"));

var _addons = require("@storybook/addons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createFieldsObject = function createFieldsObject(fields) {
  return Object.keys(fields).reduce(function (acc, key) {
    var value = fields[key];
    var isStringValue = typeof value === 'string';
    acc[key] = isStringValue ? {
      value: value
    } : value;
    return acc;
  }, {});
};

var StoryContainer = function StoryContainer(_ref) {
  var storyProps = _ref.storyProps,
      children = _ref.children;
  return _react.Children.map(children, function (child) {
    if (!storyProps.fields) {
      return child;
    }

    return (0, _react.cloneElement)(child, _objectSpread({}, storyProps, {
      fields: createFieldsObject(storyProps.fields)
    }));
  });
};

var withSitecoreProps = (0, _addons.makeDecorator)({
  name: 'withSitecoreProps',
  allowDeprecatedUsage: false,
  wrapper: function wrapper(getStory, context) {
    var story = getStory(context);

    if (!story.props.fields) {
      return story;
    }

    return _react["default"].createElement(StoryContainer, {
      storyProps: story.props
    }, story);
  }
});
exports.withSitecoreProps = withSitecoreProps;