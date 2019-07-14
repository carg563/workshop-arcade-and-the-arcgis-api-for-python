'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aphrodite = require('aphrodite');

var _aphroditeInterfaceFactory = require('./aphroditeInterfaceFactory');

var _aphroditeInterfaceFactory2 = _interopRequireDefault(_aphroditeInterfaceFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = (0, _aphroditeInterfaceFactory2['default'])({
  StyleSheet: _aphrodite.StyleSheet,
  css: _aphrodite.css,
  flushToStyleTag: _aphrodite.flushToStyleTag
});