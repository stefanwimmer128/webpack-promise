"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (config, _opts) {
  var opts = (0, _assign2.default)({
    log: true,
    stats: {}
  }, _typeof(_opts) === "object" && _opts !== null ? _opts : {});
  opts.stats = (0, _assign2.default)({
    colors: true
  }, _typeof(opts.stats) === "object" && opts.stats !== null ? opts.stats : {});
  return new _promise2.default(function (resolve, reject) {
    return (0, _webpack2.default)(config).run(function (err, stats) {
      if (opts.log && stats) console.log(stats.toString(opts.stats));
      if (err || stats.hasErrors() || stats.hasWarnings()) reject(new _WebpackError2.default(err, stats));else resolve(stats);
    });
  });
};

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _assign = require("core-js/library/fn/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _promise = require("core-js/library/es6/promise");

var _promise2 = _interopRequireDefault(_promise);

var _WebpackError = require("./WebpackError");

var _WebpackError2 = _interopRequireDefault(_WebpackError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }