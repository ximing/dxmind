/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./style/index.scss');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DXMind = function () {
    function DXMind(dom) {
        _classCallCheck(this, DXMind);

        this.dom = dom;
    }

    _createClass(DXMind, [{
        key: 'start',
        value: function start(dom, conf) {
            if (dom) {
                this.dom = dom;
            }
            _reactDom2.default.render(_react2.default.createElement(_view2.default, null), this.dom, function () {
                var container = document.getElementById('dxContainer');
            });
        }
    }]);

    return DXMind;
}();

exports.default = DXMind;