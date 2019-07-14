'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _rtlCssJs = require('rtl-css-js');

var _rtlCssJs2 = _interopRequireDefault(_rtlCssJs);

var _object = require('object.entries');

var _object2 = _interopRequireDefault(_object);

var _resolveLTR2 = require('./utils/resolveLTR');

var _resolveLTR3 = _interopRequireDefault(_resolveLTR2);

var _resolveRTL2 = require('./utils/resolveRTL');

var _resolveRTL3 = _interopRequireDefault(_resolveRTL2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (_ref /* aphrodite */) {
  var StyleSheet = _ref.StyleSheet,
      css = _ref.css,
      flushToStyleTag = _ref.flushToStyleTag;
  return {
    create: function () {
      function create(styleHash) {
        return StyleSheet.create(styleHash);
      }

      return create;
    }(),
    createLTR: function () {
      function createLTR(styleHash) {
        return StyleSheet.create(styleHash);
      }

      return createLTR;
    }(),
    createRTL: function () {
      function createRTL(styleHash) {
        var styleHashRTL = {};
        (0, _object2['default'])(styleHash).forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              styleKey = _ref3[0],
              styleDef = _ref3[1];

          styleHashRTL[styleKey] = (0, _rtlCssJs2['default'])(styleDef);
        });

        return StyleSheet.create(styleHashRTL);
      }

      return createRTL;
    }(),
    resolve: function () {
      function resolve(styles) {
        return (0, _resolveLTR3['default'])(css, styles);
      }

      return resolve;
    }(),
    resolveLTR: function () {
      function resolveLTR(styles) {
        return (0, _resolveLTR3['default'])(css, styles);
      }

      return resolveLTR;
    }(),
    resolveRTL: function () {
      function resolveRTL(styles) {
        return (0, _resolveRTL3['default'])(css, styles);
      }

      return resolveRTL;
    }(),


    // Flushes all buffered styles to a style tag. Required for components
    // that depend upon previous styles in the component tree (i.e.
    // for calculating container width, including padding/margin).
    flush: function () {
      function flush() {
        flushToStyleTag();
      }

      return flush;
    }()
  };
};