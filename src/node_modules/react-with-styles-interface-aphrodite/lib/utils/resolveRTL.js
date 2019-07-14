'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = resolveRTL;

var _arrayPrototype = require('array.prototype.flat');

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _rtlCssJs = require('rtl-css-js');

var _rtlCssJs2 = _interopRequireDefault(_rtlCssJs);

var _separateStyles2 = require('./separateStyles');

var _separateStyles3 = _interopRequireDefault(_separateStyles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Styles is an array of properties returned by `create()`, a POJO, or an
// array thereof. POJOs are treated as inline styles. This version of the
// resolve function explicitly flips inline styles for an RTL context.
// This function returns an object to be spread onto an element.
function resolveRTL(css, styles) {
  var flattenedStyles = (0, _arrayPrototype2['default'])(styles, Infinity);

  var _separateStyles = (0, _separateStyles3['default'])(flattenedStyles),
      aphroditeStyles = _separateStyles.aphroditeStyles,
      hasInlineStyles = _separateStyles.hasInlineStyles,
      inlineStyles = _separateStyles.inlineStyles;

  var result = {};
  if (aphroditeStyles.length > 0) {
    result.className = css.apply(undefined, _toConsumableArray(aphroditeStyles));
  }

  if (hasInlineStyles) {
    result.style = (0, _rtlCssJs2['default'])(inlineStyles);
  }

  return result;
}