'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = separateStyles;

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _has = require('has');

var _has2 = _interopRequireDefault(_has);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// This function takes the array of styles and separates them into styles that
// are handled by Aphrodite and inline styles.
function separateStyles(stylesArray) {
  var aphroditeStyles = [];

  // Since determining if an Object is empty requires collecting all of its
  // keys, and we want the best performance in this code because we are in the
  // render path, we are going to do a little bookkeeping ourselves.
  var hasInlineStyles = false;
  var inlineStyles = {};

  // This is run on potentially every node in the tree when rendering, where
  // performance is critical. Normally we would prefer using `forEach`, but
  // old-fashioned for loops are faster so that's what we have chosen here.
  for (var i = 0; i < stylesArray.length; i += 1) {
    var style = stylesArray[i];

    // If this  style is falsey, we just want to disregard it. This allows for
    // syntax like:
    //
    //   css(isFoo && styles.foo)
    if (style) {
      if ((0, _has2['default'])(style, '_name') && (0, _has2['default'])(style, '_definition')) {
        aphroditeStyles.push(style);
      } else {
        (0, _object2['default'])(inlineStyles, style);
        hasInlineStyles = true;
      }
    }
  }

  return {
    aphroditeStyles: aphroditeStyles,
    hasInlineStyles: hasInlineStyles,
    inlineStyles: inlineStyles
  };
}