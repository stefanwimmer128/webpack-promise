"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _symbol = require("core-js/library/es6/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _err = (0, _symbol2.default)("WebpackError$err");

var _stats = (0, _symbol2.default)("WebpackError$stats");

var WebpackError = function (_Error) {
  _inherits(WebpackError, _Error);

  function WebpackError(err, stats) {
    var _this;

    _classCallCheck(this, WebpackError);

    _this = _possibleConstructorReturn(this, (WebpackError.__proto__ || Object.getPrototypeOf(WebpackError)).call(this, function () {
      if (err) return "WebpackRuntimeError";else if (stats.hasErrors() || stats.hasWarnings()) return "WebpackCompilationError";
    }()));
    _this.name = "WebpackError";
    _this.err = err;
    _this.stats = stats;
    return _this;
  }

  _createClass(WebpackError, [{
    key: "err",
    value: function err() {
      return this[_err];
    }
  }, {
    key: "stats",
    value: function stats() {
      return this[_stats];
    }
  }]);

  return WebpackError;
}(Error);

exports.default = WebpackError;