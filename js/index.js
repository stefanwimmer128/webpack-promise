"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (config, _opts) {
  var opts = (0, _assign2.default)({
    log: true,
    rejectStats: true,
    stats: {}
  }, _typeof(_opts) === "object" && _opts !== null ? _opts : {});
  opts.stats = (0, _assign2.default)({
    colors: true
  }, _typeof(opts.stats) === "object" && opts.stats !== null ? opts.stats : {});
  return new _promise2.default(function (resolve, reject) {
    return (0, _webpack2.default)(config).run(function (err, stats) {
      if (opts.log) console.log(stats.toString(opts.stats));
      if (err) reject(err);else if (stats.hasErrors() || stats.hasWarnings()) reject(opts.rejectStats ? stats : new Error("WebpackCompilationError"));else resolve(stats);
    });
  });
};

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _assign = require("core-js/library/fn/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _promise = require("core-js/library/es6/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }