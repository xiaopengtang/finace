/*!
 * create by txp
 * version:1.0.0
 * email:txp_email@126.com
 * last update:2017-11-15 11:02:42
 */
webpackJsonp_name_([0],{

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.ForgetPwd = exports.Register = exports.Index = undefined;

var _Index2 = __webpack_require__(658);

var _Index3 = _interopRequireDefault(_Index2);

var _Register2 = __webpack_require__(659);

var _Register3 = _interopRequireDefault(_Register2);

var _ForgetPwd2 = __webpack_require__(660);

var _ForgetPwd3 = _interopRequireDefault(_ForgetPwd2);

var _User2 = __webpack_require__(661);

var _User = _interopRequireWildcard(_User2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Index = _Index3.default;
exports.Register = _Register3.default;
exports.ForgetPwd = _ForgetPwd3.default;
exports.User = _User;

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(244);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'footerRender',
		value: function footerRender() {
			var _this2 = this;

			var modules = [{
				'url': '/home',
				'name': 'home',
				'icon': 'icon-home',
				'text': '首页'
			}, {
				'url': '/list',
				'name': 'list',
				'icon': 'icon-line-chart',
				'text': '投资'
			},
			/*{
   	'url': '/market',
   	'name': 'market',
   	'icon': 'icon-shopping-cart',
   	'text': '商城'
   },*/
			{
				'url': '/user',
				'name': 'user',
				'icon': 'icon-user-circle',
				'text': '我'
			}];
			var tpl = _react2.default.createElement(
				'div',
				{ className: 'main-footer' },
				this.props.footer ? this.props.footer : _react2.default.createElement(
					'ul',
					null,
					modules.map(function (m, i) {
						return _react2.default.createElement(
							'li',
							{ key: i, className: m.name === _this2.props.module ? 'active' : '' },
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: m.url },
								_react2.default.createElement('i', { className: 'icon ' + m.icon }),
								_react2.default.createElement(
									'h2',
									null,
									m.text
								)
							)
						);
					})
				)
			);
			return tpl;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    module = _props.module,
			    className = _props.className,
			    other = _objectWithoutProperties(_props, ['children', 'module', 'className']);

			return _react2.default.createElement(
				'div',
				{ className: 'layout-user' },
				_react2.default.createElement(
					'div',
					_extends({}, other, { className: 'main-contaiter ' + className }),
					_react2.default.createElement(
						_antdMobile.NavBar,
						{
							leftContent: _react2.default.createElement(_antdMobile.Icon, { type: 'left', onClick: function onClick() {
									return window.history.go(-1);
								} }),
							rightContent: [
								/*<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,*/
							]
						},
						this.props.title
					),
					this.props.children
				),
				this.footerRender()
			);
		}
	}]);

	return Index;
}(_react.Component), _class.propTypes = {
	'title': _propTypes2.default.string,
	'footer': _propTypes2.default.node
}, _class.contextTypes = {
	'$store': _propTypes2.default.object.isRequired,
	'$utils': _propTypes2.default.object.isRequired
}, _class.defaultProps = {
	'module': 'home',
	'title': '首页',
	'footer': null
}, _temp2);
exports.default = Index;

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(244);

var _axios = __webpack_require__(103);

var _axios2 = _interopRequireDefault(_axios);

var _antdMobile = __webpack_require__(243);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			'tel': '',
			'pwd': '',
			'show': true
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// console.log(['this.props',this])
		}
	}, {
		key: 'login',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var _state, tel, pwd, data;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_state = this.state, tel = _state.tel, pwd = _state.pwd;

								if (tel) {
									_context.next = 3;
									break;
								}

								return _context.abrupt('return', _antdMobile.Toast.info('请输入您的手机号'));

							case 3:
								if (/\d{11}/.test(tel)) {
									_context.next = 5;
									break;
								}

								return _context.abrupt('return', _antdMobile.Toast.info('请正确输入手机号'));

							case 5:
								if (pwd) {
									_context.next = 7;
									break;
								}

								return _context.abrupt('return', _antdMobile.Toast.info('请输入密码'));

							case 7:
								_context.next = 9;
								return this.context.$store.auth.doLogin({
									'account': tel,
									'password': pwd
								});

							case 9:
								data = _context.sent;
								/*this.context.$store.clientCall({
        'url': '/api/login',
        'method': 'get',
        'data': {
        'account': tel,
        'password': pwd
        }
        })*/
								// console.log({data})

								if (data.success && data.data && data.data.login) {
									this.context.$store.auth.updateLogin(true);
									this.props.history.push('/home');
								} else {
									_antdMobile.Toast.info(data.data || '登录失败');
								}

							case 11:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function login() {
				return _ref2.apply(this, arguments);
			}

			return login;
		}()
	}, {
		key: 'change',
		value: function change(e) {}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'home-index' },
				_react2.default.createElement(
					'div',
					{ className: 'logo' },
					_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/logo.png', style: { "width": "60%" } })
				),
				_react2.default.createElement(
					'p',
					{ style: { "position": "relative" } },
					_react2.default.createElement('input', {
						type: 'text',
						name: 'accountName',
						id: 'telephoneNumber',
						onChange: function onChange(e) {
							return _this2.setState({ 'tel': e.target.value });
						},
						value: this.state.tel,
						placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7' }),
					_react2.default.createElement('img', {
						src: 'http://1989591.51vip.biz:7001/public/i/clear.png',
						className: 'inputImg',
						id: 'tab1',
						onClick: function onClick(e) {
							return _this2.setState({ 'tel': '' });
						} })
				),
				_react2.default.createElement(
					'p',
					{ style: { "position": "relative", "marginBottom": "30px" } },
					_react2.default.createElement('input', {
						type: this.state.show ? 'password' : 'text',
						name: 'password',
						id: 'passWord',
						value: this.state.pwd,
						onChange: function onChange(e) {
							return _this2.setState({ 'pwd': e.target.value });
						},
						placeholder: '\u767B\u5F55\u5BC6\u7801' }),
					_react2.default.createElement('img', {
						src: this.state.show ? "http://1989591.51vip.biz:7001/public/i/eyesclose.png" : "http://1989591.51vip.biz:7001/public/i/eyesopen.png",
						className: 'inputImg', id: 'tab2', onClick: function onClick(e) {
							return _this2.setState({ 'show': !_this2.state.show });
						} })
				),
				_react2.default.createElement(
					'div',
					{ className: 'LogBtn_s', to: '/home', onClick: this.login.bind(this) },
					'\u7ACB\u5373\u767B\u5F55'
				),
				_react2.default.createElement(
					'p',
					{ style: { "marginTop": "20px" } },
					_react2.default.createElement(
						'span',
						{ className: 'goRegist' },
						' ',
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/register' },
							'\u7ACB\u5373\u6CE8\u518C'
						)
					),
					_react2.default.createElement(
						'span',
						{ className: 'forget' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/forgetPwd' },
							'\u5FD8\u8BB0\u5BC6\u7801\uFF1F'
						)
					)
				),
				_react2.default.createElement(
					'p',
					{ className: 'server' },
					_react2.default.createElement(
						'a',
						{ href: 'tel:400-000-3060' },
						'\u5BA2\u670D\u7535\u8BDD:400-000-3060'
					)
				)
			);
		}
	}]);

	return Index;
}(_react.Component), _class.contextTypes = {
	'$store': _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Index;

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(244);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			'tel': '',
			'code': '',
			'pwd': '',
			'phone': '',
			'isRead': false,
			'timer': 60,
			'show': true,
			'isAllow': false
		}, _this.timer = null, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'sendCode',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var _this2 = this;

				var tel, check, res;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!this.timer) {
									_context.next = 2;
									break;
								}

								return _context.abrupt('return');

							case 2:
								// console.log(this)
								tel = this.state.tel;
								check = this.context.$utils.check.checkTel(tel);

								if (!(check === false)) {
									_context.next = 6;
									break;
								}

								return _context.abrupt('return', _antdMobile.Toast.info(check.getError()));

							case 6:
								_context.next = 8;
								return this.context.$store.auth.sendCode({ 'phone': tel });

							case 8:
								res = _context.sent;

								if (res) {
									_context.next = 11;
									break;
								}

								return _context.abrupt('return');

							case 11:
								this.timer = setInterval(function () {
									var timer = _this2.state.timer;

									timer--;
									if (timer === 0) {
										clearInterval(_this2.timer);
										timer = 60;
										delete _this2.timer;
									}
									_this2.setState({ timer: timer });
								}, 1000);

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function sendCode() {
				return _ref2.apply(this, arguments);
			}

			return sendCode;
		}()
	}, {
		key: 'checkCode',
		value: function checkCode() {}
	}, {
		key: 'register',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var _this3 = this;

				var tel, check, params, res;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								tel = this.state.tel;
								check = this.context.$utils.check.checkTel(tel);

								if (!(check === false)) {
									_context2.next = 4;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info(check.getError()));

							case 4:
								if (this.state.code) {
									_context2.next = 6;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info('请输入验证码'));

							case 6:
								if (/^\d+$/.test(this.state.code)) {
									_context2.next = 8;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info('请输入正确的验证码'));

							case 8:
								if (this.state.pwd) {
									_context2.next = 10;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info('请输入密码'));

							case 10:
								if (!(this.state.phone && !/^\d{11}$/.test(this.state.phone))) {
									_context2.next = 12;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info('请正确输入推荐人手机号'));

							case 12:
								params = {
									"password": this.state.pwd,
									"phone": this.state.tel,
									"phoneVerficationCode": this.state.code,
									"recommenderPhone": this.state.phone
								};
								_context2.next = 15;
								return this.context.$store.auth.register(params);

							case 15:
								res = _context2.sent;

								if (!res.success) {
									_context2.next = 21;
									break;
								}

								_antdMobile.Toast.info('注册成功');
								return _context2.abrupt('return', setTimeout(function () {
									return _this3.props.history.push('/');
								}, 3000));

							case 21:
								return _context2.abrupt('return', _antdMobile.Toast.info('注册失败'));

							case 22:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function register() {
				return _ref3.apply(this, arguments);
			}

			return register;
		}()
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'home-register' },
				_react2.default.createElement(
					'div',
					{ className: 'logo' },
					_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/logo.png', style: { 'width': '60%' } }),
					_react2.default.createElement('input', { type: 'hidden', id: 'result', value: '' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'center' },
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement('input', {
								onChange: function onChange(e) {
									return _this4.setState({ 'tel': e.currentTarget.value });
								},
								value: this.state.tel,
								type: 'text', name: 'telephone', id: 'telephoneNumber', placeholder: '\u8BF7\u8F93\u5165\u6CE8\u518C\u624B\u673A\u53F7' }),
							_react2.default.createElement('i', {
								onClick: function onClick(e) {
									return _this4.setState({ 'tel': '' });
								},
								id: 'tab1', className: 'icon icon-close' })
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement('input', {
								value: this.state.code,
								onChange: function onChange(e) {
									return _this4.setState({ 'code': e.currentTarget.value });
								},
								id: 'captcha', name: 'yzm', type: 'text', placeholder: '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801' }),
							_react2.default.createElement(
								'span',
								{
									onClick: this.sendCode.bind(this),
									onBlur: this.checkCode.bind(this),
									id: 'sentCaptcha', className: 'yzm_span ' + (this.state.timer !== 60 ? 'active' : '') },
								this.state.timer !== 60 ? this.state.timer + 's\u540E\u91CD\u65B0\u53D1\u9001' : '获取验证码'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement('input', {
								value: this.state.pwd,
								onChange: function onChange(e) {
									return _this4.setState({ 'pwd': e.currentTarget.value });
								},
								type: this.state.show ? 'password' : 'text', name: 'password', id: 'passWord_1', placeholder: '\u8BBE\u7F6E\u767B\u5F55\u5BC6\u7801' }),
							_react2.default.createElement('i', { id: 'tab2',
								onClick: function onClick(e) {
									return _this4.setState({ 'show': !_this4.state.show });
								},
								className: 'icon ' + (this.state.show ? 'icon-eye-slash' : 'icon-eye') })
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement('input', {
								value: this.state.phone,
								onChange: function onChange(e) {
									return _this4.setState({ 'phone': e.currentTarget.value });
								},
								type: 'text', name: 'recommendTelephone', id: 'phone', placeholder: '\u63A8\u8350\u4EBA\u624B\u673A\u53F7\uFF08\u975E\u5FC5\u586B\uFF09' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'reg' },
					_react2.default.createElement(
						'span',
						{ className: 'regbutton_sub', onClick: this.register.bind(this) },
						'\u7ACB\u5373\u6CE8\u518C'
					),
					_react2.default.createElement(
						'p',
						{ className: 'regp' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/', id: 'reg_a' },
							'\u5DF2\u6709\u8D26\u53F7\u53BB\u767B\u5F55 >'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'foter' },
					_react2.default.createElement('i', {
						onClick: function onClick(e) {
							return _this4.setState({ 'isRead': !_this4.state.isRead });
						},
						className: 'img2 icon ' + (this.state.isRead ? 'icon-check-square-o' : 'icon-square-o') }),
					'\xA0',
					_react2.default.createElement(
						'a',
						{ id: 'reg_a', href: 'http://m.maomibank.com:80/xed_financing_wxgzh/registrationProtocol.jsp' },
						'\u6CE8\u518C\u5373\u4EE3\u8868\u540C\u610F \u300A\u732B\u54AA\u8D22\u5BCC\u670D\u52A1\u534F\u8BAE\u300B'
					)
				)
			);
		}
	}]);

	return Index;
}(_react.Component), _class.contextTypes = {
	'$store': _propTypes2.default.object.isRequired,
	'$utils': _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Index;

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			'timer': 60,
			'password': '',
			'phone': '',
			'verficationCode': '',
			'confirm': ''
		}, _this.timer = null, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'sendCode',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var _this2 = this;

				var phone, check, res;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!this.timer) {
									_context.next = 2;
									break;
								}

								return _context.abrupt('return');

							case 2:
								phone = this.state.phone;
								check = this.context.$utils.check.checkTel(phone);

								if (!(check === false)) {
									_context.next = 6;
									break;
								}

								return _context.abrupt('return', _antdMobile.Toast.info(check.getError()));

							case 6:
								_context.next = 8;
								return this.context.$store.auth.sendCode({ phone: phone, 'type': 'forget' });

							case 8:
								res = _context.sent;

								if (res) {
									_context.next = 11;
									break;
								}

								return _context.abrupt('return');

							case 11:
								this.timer = setInterval(function () {
									var timer = _this2.state.timer;

									timer--;
									if (timer === 0) {
										clearInterval(_this2.timer);
										timer = 60;
										delete _this2.timer;
									}
									_this2.setState({ timer: timer });
								}, 1000);

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function sendCode() {
				return _ref2.apply(this, arguments);
			}

			return sendCode;
		}()
	}, {
		key: 'sure',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var _this3 = this;

				var _state, phone, confirm, password, verficationCode, check, res;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_state = this.state, phone = _state.phone, confirm = _state.confirm, password = _state.password, verficationCode = _state.verficationCode;
								check = this.context.$utils.check.checkTel(phone);

								if (!(check === false)) {
									_context2.next = 4;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info(check.getError()));

							case 4:
								if (verficationCode) {
									_context2.next = 6;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info('请输入短信验证码'));

							case 6:
								if (/^\d+$/.test(verficationCode)) {
									_context2.next = 8;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info('请正确输入短信验证码'));

							case 8:
								if (password) {
									_context2.next = 10;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info('请输入密码'));

							case 10:
								if (confirm) {
									_context2.next = 12;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info('请确认输入密码'));

							case 12:
								if (!(confirm !== password)) {
									_context2.next = 14;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info('两次密码不同，请确认'));

							case 14:
								res = this.context.$store.auth.forget({ phone: phone, verficationCode: verficationCode, password: password });

								if (!res.success) {
									_context2.next = 20;
									break;
								}

								_antdMobile.Toast.info('修改成功');
								return _context2.abrupt('return', setTimeout(function () {
									return _this3.props.history.push('/');
								}, 3000));

							case 20:
								return _context2.abrupt('return', _antdMobile.Toast.info('修改失败'));

							case 21:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function sure() {
				return _ref3.apply(this, arguments);
			}

			return sure;
		}()
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'home-forget' },
				_react2.default.createElement(
					'div',
					{ className: 'logo' },
					_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/logo.png', style: { 'width': '60%' } })
				),
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('i', { className: 'icon icon-user-o' }),
						_react2.default.createElement('input', {
							onChange: function onChange(e) {
								return _this4.setState({ 'phone': e.currentTarget.value });
							},
							value: this.state.phone,
							type: 'text', name: 'telephone', id: 'telephoneNumber', placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7' })
					),
					_react2.default.createElement(
						'li',
						{ className: 'flex' },
						_react2.default.createElement('i', { className: 'icon icon-check-circle-o' }),
						_react2.default.createElement('input', {
							onChange: function onChange(e) {
								return _this4.setState({ 'verficationCode': e.currentTarget.value });
							},
							value: this.state.verficationCode,
							className: 'f1', type: 'text', name: 'yzm', id: 'captcha', placeholder: '\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801' }),
						_react2.default.createElement('input', {
							onClick: this.sendCode.bind(this),
							style: { "marginLeft": "10px", "minWidth": "77px", "marginTop": "11px" },
							type: 'button', name: '', id: 'sentCaptcha', className: 'myButton ' + (this.state.timer !== 60 ? 'active' : ''), value: this.state.timer !== 60 ? this.state.timer + 's\u540E\u91CD\u65B0\u53D1\u9001' : '获取验证码' })
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('i', { className: 'icon icon-lock' }),
						_react2.default.createElement('input', {
							onChange: function onChange(e) {
								return _this4.setState({ 'password': e.currentTarget.value });
							},
							value: this.state.password,
							type: 'password', name: 'password', id: 'passWord_1', placeholder: '\u8BBE\u7F6E\u65B0\u767B\u5F55\u5BC6\u7801' })
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('i', { className: 'icon icon-lock' }),
						_react2.default.createElement('input', {
							onChange: function onChange(e) {
								return _this4.setState({ 'confirm': e.currentTarget.value });
							},
							value: this.state.confirm,
							type: 'password', name: '', id: 'passWord_2', placeholder: '\u786E\u8BA4\u65B0\u767B\u5F55\u5BC6\u7801' })
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'div',
							{ className: 'myButton_1', id: '', onClick: this.sure.bind(this) },
							'\u786E\u8BA4\u4FEE\u6539'
						)
					)
				)
			);
		}
	}]);

	return Index;
}(_react.Component), _class.contextTypes = {
	'$store': _propTypes2.default.object.isRequired,
	'$utils': _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Index;

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Verification = exports.TransactionDetails = exports.History = exports.ResetPassword = exports.CardInfo = exports.Withdrawals = exports.Recharge = exports.Certification = exports.BindCard = exports.Setting = exports.UserDetail = exports.OrderMain = exports.Invest = exports.Apply = exports.Detail = exports.List = exports.Index = undefined;

var _index = __webpack_require__(662);

var _index2 = _interopRequireDefault(_index);

var _List2 = __webpack_require__(663);

var _List3 = _interopRequireDefault(_List2);

var _Detail2 = __webpack_require__(664);

var _Detail3 = _interopRequireDefault(_Detail2);

var _Apply2 = __webpack_require__(665);

var _Apply3 = _interopRequireDefault(_Apply2);

var _Invest2 = __webpack_require__(666);

var _Invest3 = _interopRequireDefault(_Invest2);

var _orderMain = __webpack_require__(668);

var _orderMain2 = _interopRequireDefault(_orderMain);

var _UserDetail2 = __webpack_require__(669);

var _UserDetail3 = _interopRequireDefault(_UserDetail2);

var _Setting2 = __webpack_require__(670);

var _Setting3 = _interopRequireDefault(_Setting2);

var _BindCard2 = __webpack_require__(671);

var _BindCard3 = _interopRequireDefault(_BindCard2);

var _Certification2 = __webpack_require__(672);

var _Certification3 = _interopRequireDefault(_Certification2);

var _Recharge2 = __webpack_require__(673);

var _Recharge3 = _interopRequireDefault(_Recharge2);

var _Withdrawals2 = __webpack_require__(674);

var _Withdrawals3 = _interopRequireDefault(_Withdrawals2);

var _CardInfo2 = __webpack_require__(675);

var _CardInfo3 = _interopRequireDefault(_CardInfo2);

var _ResetPassword2 = __webpack_require__(676);

var _ResetPassword3 = _interopRequireDefault(_ResetPassword2);

var _History2 = __webpack_require__(677);

var _History3 = _interopRequireDefault(_History2);

var _TransactionDetails2 = __webpack_require__(678);

var _TransactionDetails3 = _interopRequireDefault(_TransactionDetails2);

var _Verification2 = __webpack_require__(679);

var _Verification3 = _interopRequireDefault(_Verification2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Index = _index2.default;
exports.List = _List3.default;
exports.Detail = _Detail3.default;
exports.Apply = _Apply3.default;
exports.Invest = _Invest3.default;
exports.OrderMain = _orderMain2.default;
exports.UserDetail = _UserDetail3.default;
exports.Setting = _Setting3.default;
exports.BindCard = _BindCard3.default;
exports.Certification = _Certification3.default;
exports.Recharge = _Recharge3.default;
exports.Withdrawals = _Withdrawals3.default;
exports.CardInfo = _CardInfo3.default;
exports.ResetPassword = _ResetPassword3.default;
exports.History = _History3.default;
exports.TransactionDetails = _TransactionDetails3.default;
exports.Verification = _Verification3.default;

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antdMobile = __webpack_require__(243);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(244);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			'list': []
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'componentDidMount',

		// 
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var list;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.context.$store.api.user.index();

							case 2:
								list = _context.sent;

								list = Array.isArray(list) ? list : [];
								this.setState({ list: list });

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'renderList',
		value: function renderList() {
			var list = this.state.list;

			return _react2.default.createElement(
				'ul',
				{ style: { 'listStyle': 'none' } },
				list.map(function (it) {
					return _react2.default.createElement(
						'li',
						{ className: 'hot-list' },
						_react2.default.createElement(_antdMobile.WhiteSpace, { size: 'sm' }),
						_react2.default.createElement(
							_antdMobile.Card,
							{ full: true },
							_react2.default.createElement(_antdMobile.Card.Header, {
								title: it.financialProduct.productName }),
							_react2.default.createElement(
								_antdMobile.Card.Body,
								null,
								_react2.default.createElement(
									'ul',
									{ className: 'list-content' },
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											'div',
											{ className: 'price-mony' },
											it.financialProduct.availableAmount,
											'\u5143'
										),
										_react2.default.createElement(
											'div',
											{ className: 'price-sub' },
											'\u5269\u4F59\u91D1\u989D'
										)
									),
									_react2.default.createElement(
										'li',
										{ className: 'main-price' },
										_react2.default.createElement(
											'div',
											{ className: 'info' },
											_react2.default.createElement(
												'span',
												null,
												'\u5E74\u5229\u7387'
											),
											_react2.default.createElement(
												'span',
												{ className: 'font-green' },
												it.financialProduct.preYearRate,
												'%'
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'info' },
											'\u6295\u8D44\u671F\u9650',
											it.financialProduct.deadline,
											['', '天', '周', '月', '年'][it.financialProduct.deadlineUnit]
										)
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											_reactRouterDom.Link,
											{ to: {
													'pathname': '/detail',
													'search': '?id=' + it.financialProduct.productCode
												} },
											_react2.default.createElement(
												'div',
												{ className: 'label' },
												'\u7ACB\u5373\u6295\u8D44'
											)
										)
									)
								)
							),
							_react2.default.createElement(_antdMobile.Card.Footer, { content: _react2.default.createElement(
									'div',
									{ className: 'price-btm' },
									_react2.default.createElement(
										'div',
										{ className: 'label-tag' },
										_react2.default.createElement(
											'span',
											{ className: 'label ' + [, 'red', 'green', 'yellow'][it.financialProduct.productType] },
											[, '新手专享', '精选理财', '爆款推荐'][it.financialProduct.productType]
										),
										_react2.default.createElement(
											'span',
											null,
											it.financialTagList.map(function (t) {
												return t.name + '  ';
											})
										)
									)
								) }),
							_react2.default.createElement(
								_reactRouterDom.Link,
								{
									to: {
										'pathname': '/list',
										'search': '?type=' + it.financialProduct.productType
									},
									className: 'list-more' },
								'\u67E5\u770B\u66F4\u591A'
							)
						)
					);
				})
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_user2.default,
				{ className: 'home-list user-index' },
				_react2.default.createElement(
					_antdMobile.Card,
					null,
					_react2.default.createElement(
						_antdMobile.Card.Body,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'yqhy' },
							_react2.default.createElement(
								'table',
								null,
								_react2.default.createElement(
									'tbody',
									null,
									_react2.default.createElement(
										'tr',
										null,
										_react2.default.createElement(
											'th',
											null,
											_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/yaoqinghaoyouicon.png', style: { "width": "60px", "height": "60px" } })
										),
										_react2.default.createElement(
											'th',
											null,
											_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/choujiangicon.png', style: { "width": "60px", "height": "60px" } })
										),
										_react2.default.createElement(
											'th',
											null,
											_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/paihangbangicon.png', style: { "width": "60px", "height": "60px" } })
										)
									),
									_react2.default.createElement(
										'tr',
										null,
										_react2.default.createElement(
											'td',
											null,
											'\u9080\u8BF7\u597D\u53CB\u8D5A\u4F63\u91D1'
										),
										_react2.default.createElement(
											'td',
											null,
											'\u79EF\u5206\u62BD\u5956\u4E50\u4E0D\u505C'
										),
										_react2.default.createElement(
											'td',
											null,
											'\u6295\u8D44\u8FBE\u4EBA\u6392\u884C\u699C'
										)
									)
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'guide' },
							_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/guide.png' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'att' },
							_react2.default.createElement(
								'i',
								{ className: 'icon icon-bullhorn' },
								'\xA0\xA0\u6295\u8D44\u6709\u98CE\u9669\uFF0C\u5165\u5E02\u9700\u8C28\u614E\uFF01'
							)
						)
					)
				),
				this.renderList(),
				_react2.default.createElement(_antdMobile.WhiteSpace, { size: 'sm' })
			);
		}
	}]);

	return Index;
}(_react.Component), _class.contextTypes = {
	'$store': _propTypes2.default.object.isRequired,
	'$utils': _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Index;

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

var _reactRouterDom = __webpack_require__(244);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		_classCallCheck(this, Index);

		return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
	}

	_createClass(Index, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_user2.default,
				{ module: 'list', className: 'home-list', title: '\u8D37\u6B3E' },
				_react2.default.createElement(
					'div',
					{ style: { 'backgroundColor': '#FFF', 'padding': '10px 0' } },
					_react2.default.createElement(
						_antdMobile.WingBlank,
						null,
						_react2.default.createElement(_antdMobile.SegmentedControl, { values: ['极速贷', '银行贷'] })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'price-info' },
					_react2.default.createElement(
						'div',
						{ className: 'price-title' },
						'\u8D37\u6B3E\u989D\u5EA6',
						_react2.default.createElement(
							'i',
							null,
							'0'
						),
						'\u5143'
					),
					_react2.default.createElement(
						_antdMobile.Button,
						{ icon: _react2.default.createElement('i', { className: 'icon icon-line-chart' }) },
						'\u63D0\u5347\u989D\u5EA6'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'hot-list' },
					_react2.default.createElement(
						_antdMobile.Card,
						{ full: true },
						_react2.default.createElement(_antdMobile.Card.Header, { title: '\u5DE5\u884C\u4E50\u4FE1\u8D37' }),
						_react2.default.createElement(
							_antdMobile.Card.Body,
							null,
							_react2.default.createElement(
								'ul',
								{ className: 'list-content' },
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'div',
										{ className: 'price-mony' },
										'2000'
									),
									_react2.default.createElement(
										'div',
										{ className: 'price-sub' },
										'\u6D4B\u8BD5\u4E0B'
									)
								),
								_react2.default.createElement(
									'li',
									{ className: 'main-price' },
									_react2.default.createElement(
										'div',
										{ className: 'info' },
										_react2.default.createElement(
											'span',
											{ className: 'font-green' },
											'10\u5206\u949F'
										),
										_react2.default.createElement(
											'span',
											null,
											'\u653E\u6B3E'
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'info' },
										'\u6708\u8D39\u738710%'
									),
									_react2.default.createElement(
										'div',
										{ className: 'info' },
										'\u8D37\u6B3E\u671F\u96503~12\u6708'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{ to: '/detail' },
										_react2.default.createElement(
											'div',
											{ className: 'label' },
											'\u4E00\u952E\u7533\u8BF7'
										)
									)
								)
							)
						),
						_react2.default.createElement(_antdMobile.Card.Footer, { content: _react2.default.createElement(
								'div',
								{ className: 'price-btm' },
								_react2.default.createElement(
									'div',
									{ className: 'label-tag' },
									_react2.default.createElement(
										'span',
										{ className: 'label red' },
										'\u63D0\u989D'
									),
									_react2.default.createElement(
										'span',
										null,
										'\u8001\u7528\u6237\u8001\u7528\u6237\u8001\u7528\u6237\u8001\u7528\u6237'
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'label-tag' },
									_react2.default.createElement(
										'span',
										{ className: 'label green' },
										'\u63D0\u989D'
									),
									_react2.default.createElement(
										'span',
										null,
										'\u8001\u7528\u6237\u8001\u7528\u6237\u8001\u7528\u6237\u8001\u7528\u6237'
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'label-tag' },
									_react2.default.createElement(
										'span',
										{ className: 'label yellow' },
										'\u63D0\u989D'
									),
									_react2.default.createElement(
										'span',
										null,
										'\u8001\u7528\u6237\u8001\u7528\u6237\u8001\u7528\u6237\u8001\u7528\u6237'
									)
								)
							) })
					)
				)
			);
		}
	}]);

	return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _reactRouterDom = __webpack_require__(244);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		_classCallCheck(this, Index);

		return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
	}

	_createClass(Index, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_user2.default,
				{ module: 'list', className: 'home-detail', footer: _react2.default.createElement(
						'div',
						{ className: 'detail-footer' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ style: { 'color': '#FFF' }, to: '/apply' },
							'\u5F00\u59CB\u7533\u8BF7'
						)
					) },
				_react2.default.createElement(
					_antdMobile.Card,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'top' },
						_react2.default.createElement(
							'div',
							{ className: 'item' },
							_react2.default.createElement(
								'div',
								{ className: 'item-content' },
								_react2.default.createElement(
									'div',
									{ className: 'label' },
									'\u91D1\u989D'
								),
								_react2.default.createElement(
									'div',
									{ className: 'input-field' },
									_react2.default.createElement('input', { type: 'text' }),
									_react2.default.createElement(
										'span',
										null,
										'\u5143'
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'item-tip' },
								'\u91D1\u989D\u4E3A100-5000'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'item' },
							_react2.default.createElement(
								'div',
								{ className: 'item-content' },
								_react2.default.createElement(
									'div',
									{ className: 'label' },
									'\u671F\u9650'
								),
								_react2.default.createElement(
									'div',
									{ className: 'input-field' },
									_react2.default.createElement('input', { type: 'text' }),
									_react2.default.createElement('i', { className: 'icon icon-sort' })
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'item-tip' },
								'\u671F\u9650\u4E3A1-24\u4E2A\u6708'
							)
						)
					)
				),
				_react2.default.createElement(_antdMobile.WhiteSpace, { size: 'sm' }),
				_react2.default.createElement(
					_antdMobile.Card,
					null,
					_react2.default.createElement(_antdMobile.Card.Header, { title: '\u8BA4\u8BC1\u6750\u6599' }),
					_react2.default.createElement(
						_antdMobile.Card.Body,
						{ className: 'user-info' },
						_react2.default.createElement(
							'div',
							{ className: 'user-title' },
							_react2.default.createElement('i', { className: 'icon icon-user-circle' }),
							_react2.default.createElement(
								'span',
								null,
								'\u4E2A\u4EBA\u4FE1\u606F'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'user-res' },
							_react2.default.createElement(
								'div',
								{ className: 'user-tag' },
								_react2.default.createElement(
									'span',
									null,
									'\u5DF2\u8BA4\u8BC1'
								),
								_react2.default.createElement('i', { className: 'icon icon-check' })
							),
							_react2.default.createElement(_antdMobile.Icon, { type: 'right', color: '#c7c7cc' })
						)
					)
				),
				_react2.default.createElement(_antdMobile.WhiteSpace, { size: 'sm' }),
				_react2.default.createElement(
					_antdMobile.List,
					{ className: 'list' },
					_react2.default.createElement(
						_antdMobile.List.Item,
						{
							extra: _react2.default.createElement(
								'div',
								{ className: 'check-tag' },
								'\u53BB\u8BA4\u8BC1'
							),
							thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
							arrow: 'horizontal',
							onClick: function onClick() {}
						},
						'\u829D\u9EBB\u4FE1\u7528'
					),
					_react2.default.createElement(
						_antdMobile.List.Item,
						{
							thumb: 'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png',
							onClick: function onClick() {},
							extra: _react2.default.createElement(
								'div',
								{ className: 'check-tag' },
								'\u53BB\u8BA4\u8BC1'
							),
							arrow: 'horizontal'
						},
						'\u8054\u7CFB\u4EBA'
					)
				)
			);
		}
	}]);

	return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			'accountAmount': 0,
			'investmentAmount': 0,
			'scale': 0
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var accountAmount, scale;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.context.$store.api.user.account();

							case 2:
								accountAmount = _context.sent;
								scale = this.context.$utils.queryString('scale', this.props.location.search);

								scale = parseFloat((parseFloat(scale) * 0.0001).toFixed(4));
								scale = isNaN(scale) ? 0 : scale;
								// console.log({scale})
								this.setState({ accountAmount: accountAmount, scale: scale });

							case 7:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'applyAccout',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var _this2 = this;

				var _state, accountAmount, investmentAmount, status, productCode, res;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_state = this.state, accountAmount = _state.accountAmount, investmentAmount = _state.investmentAmount;

								if (investmentAmount) {
									_context2.next = 3;
									break;
								}

								return _context2.abrupt('return', _antdMobile.Toast.info('请输入投资金额'));

							case 3:
								if (!(accountAmount < investmentAmount)) {
									_context2.next = 8;
									break;
								}

								_context2.next = 6;
								return new Promise(function (resolve) {
									return _antdMobile.Modal.alert('温馨提示', '您的账户余额不足，是否充值？', [{ 'text': '取消' }, { 'text': '前往', 'onPress': function onPress() {
											return resolve(true);
										} }]);
								});

							case 6:
								status = _context2.sent;
								return _context2.abrupt('return', status && this.props.history.push('/recharge'));

							case 8:
								productCode = this.context.$utils.queryString('id', this.props.location.search);
								_context2.next = 11;
								return this.context.$utils.clientCall('/api/saveOrder', { investmentAmount: investmentAmount, productCode: productCode });

							case 11:
								res = _context2.sent;

								if (res.success) {
									_antdMobile.Toast.success('下单成功', 1);
								} else {
									_antdMobile.Toast.fail('下单失败', 1);
								}
								setTimeout(function () {
									return _this2.props.history.push('/');
								}, 2000);

							case 14:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function applyAccout() {
				return _ref3.apply(this, arguments);
			}

			return applyAccout;
		}()
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				_user2.default,
				{ title: '\u6295\u8D44\u64CD\u4F5C', module: 'list', className: 'user-apply',
					footer: _react2.default.createElement(
						'div',
						{ className: 'apply-footer' },
						_react2.default.createElement(
							'div',
							{ className: 'apply-footer-btm', onClick: this.applyAccout.bind(this) },
							'\u7ACB\u5373\u6295\u8D44'
						)
					) },
				_react2.default.createElement(
					'div',
					{ className: 'show-mony' },
					_react2.default.createElement(
						'div',
						{ className: 'show-title' },
						'\u5B9E\u9645\u6295\u8D44\u6536\u76CA'
					),
					_react2.default.createElement(
						'div',
						{ className: 'show-num', 'data-txt': (this.state.scale * this.state.investmentAmount).toFixed(2) },
						'\u5143'
					)
				),
				_react2.default.createElement(_antdMobile.WhiteSpace, { size: 'sm' }),
				_react2.default.createElement(
					_antdMobile.List,
					null,
					_react2.default.createElement(
						_antdMobile.List.Item,
						{ className: 'input-money' },
						_react2.default.createElement(
							'label',
							null,
							'\xA5'
						),
						_react2.default.createElement('input', {
							value: this.state.investmentAmount, type: 'number', onChange: function onChange(e) {
								return _this3.setState({ 'investmentAmount': e.currentTarget.value });
							} })
					),
					_react2.default.createElement(
						_antdMobile.List.Item,
						null,
						'\u8D26\u6237\u4F59\u989D',
						_react2.default.createElement(
							_antdMobile.List.Item.Brief,
							null,
							this.state.accountAmount,
							'\u5143'
						)
					)
				)
			);
		}
	}]);

	return Index;
}(_react.Component), _class.contextTypes = {
	'$store': _propTypes2.default.object.isRequired,
	'$utils': _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Index;

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(244);

var _antdMobile = __webpack_require__(243);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _list = __webpack_require__(667);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			'tabs': [{ title: '新手专享', 'list': [], 'productType': 1 }, { title: '精选理财', 'list': [], 'productType': 2 }, { title: '爆款推荐', 'list': [], 'productType': 3 }],
			'tabsSort': [{ 'title': '默认' }, { 'title': '利息' }, { 'title': '金额' }, { 'title': '期限' }]
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'renderTab',
		value: function renderTab(tab) {
			var tabsSort = this.state.tabsSort;

			return _react2.default.createElement(_list2.default, { type: tab.productType });
		}
	}, {
		key: 'render',
		value: function render() {
			var tabs = this.state.tabs;

			var page = this.context.$utils.queryString('type', this.props.location.search);
			page = parseInt(page);
			page = isNaN(page) ? 0 : page - 1;
			return _react2.default.createElement(
				_user2.default,
				{ className: 'user-invest', module: 'list', title: '\u6295\u8D44' },
				_react2.default.createElement(
					_antdMobile.Tabs,
					{ tabs: tabs, initialPage: page },
					this.renderTab.bind(this)
				),
				_react2.default.createElement(_antdMobile.WhiteSpace, { size: 'sm' })
			);
		}
	}]);

	return Index;
}(_react.Component), _class.contextTypes = {
	'$store': _propTypes2.default.object.isRequired,
	'$utils': _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Index;

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(244);

var _antdMobile = __webpack_require__(243);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			'data': []
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var productType, data;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								productType = this.props.type;
								_context.next = 3;
								return this.context.$store.api.user.queryList({ 'page': 1, productType: productType });

							case 3:
								data = _context.sent;

								this.setState({ data: data });

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'renderChild',
		value: function renderChild(data) {
			// console.log(info)
			var info = data.financialProduct;
			var tagList = data.financialTagList;
			return _react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(_antdMobile.WhiteSpace, { size: 'sm' }),
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: {
							'pathname': '/detail',
							'search': '?id=' + info.productCode
						}, style: { 'display': 'block' } },
					_react2.default.createElement(
						_antdMobile.Card,
						null,
						_react2.default.createElement(_antdMobile.Card.Header, {
							extra: _react2.default.createElement(
								'span',
								{ 'data-txt': '\u671F\u9650', className: 'invest-date' },
								info.deadline,
								[, '天', '周', '月', '年'][info.deadlineUnit]
							),
							title: info.productName }),
						_react2.default.createElement(
							_antdMobile.Card.Body,
							null,
							_react2.default.createElement(
								_antdMobile.Flex,
								{ justify: 'between' },
								_react2.default.createElement(
									_antdMobile.Flex.Item,
									{ className: 'invest-content' },
									_react2.default.createElement(
										'div',
										{ className: 'tags-list' },
										tagList.map(function (t) {
											return _react2.default.createElement(
												_antdMobile.Tag,
												{ small: true },
												t.name
											);
										})
									),
									_react2.default.createElement(
										'div',
										{ className: 'invest-price' },
										_react2.default.createElement(
											'div',
											{ className: 'show-price' },
											info.preYearRate,
											'%'
										),
										_react2.default.createElement(
											'div',
											{ className: 'show-price-sub' },
											_react2.default.createElement(
												'span',
												null,
												'\u5269'
											),
											_react2.default.createElement(
												'span',
												{ className: 'show-price-mony' },
												info.availableAmount
											),
											_react2.default.createElement(
												'span',
												null,
												'\u5143'
											)
										)
									)
								),
								_react2.default.createElement(
									_antdMobile.Flex.Item,
									{ className: 'invest-present' },
									((info.totalAmount - info.availableAmount) / info.totalAmount * 100).toFixed(2),
									'%'
								)
							)
						),
						_react2.default.createElement(_antdMobile.Card.Footer, { content: '\u6807\u7F16\u53F7\uFF1A' + info.productCode })
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'ul',
				{ style: { 'listStyle': 'none' } },
				this.state.data.map(function (d) {
					return _this2.renderChild(d);
				})
			);
		}
	}]);

	return Index;
}(_react.Component), _class.defaultProps = {
	'type': 1
}, _class.propTypes = {
	'type': _propTypes2.default.string
}, _class.contextTypes = {
	'$store': _propTypes2.default.object.isRequired,
	'$utils': _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Index;

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _reactRouterDom = __webpack_require__(244);

var _antdMobile = __webpack_require__(243);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			'info': {
				'financialProduct': {},
				'financialAudit': {},
				'financialCar': {},
				'financialFileList': {},
				'financialRecordList': [],
				'financialUser': {}
			},
			'scale': 0,
			'productCode': null
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var productCode, info, _info$financialProduc, preYearRate, deadlineDays, scale;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								productCode = this.context.$utils.queryString('id', this.props.location.search);
								// console.log(this)

								console.log(productCode);
								_context.next = 4;
								return this.context.$store.api.user.queryDetail({ productCode: productCode });

							case 4:
								info = _context.sent;

								if (info) {
									_context.next = 7;
									break;
								}

								return _context.abrupt('return');

							case 7:
								_info$financialProduc = info.financialProduct, preYearRate = _info$financialProduc.preYearRate, deadlineDays = _info$financialProduc.deadlineDays;

								preYearRate = isNaN(preYearRate) ? 0 : preYearRate;
								deadlineDays = isNaN(deadlineDays) ? 0 : deadlineDays;
								scale = parseInt(preYearRate * 0.01 * deadlineDays / 365 * 10000);
								// preYearRate = parseFloat(preYearRate)

								this.setState({ info: info, scale: scale, productCode: productCode });

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'render',
		value: function render() {
			var info = this.state.info;

			return _react2.default.createElement(
				_user2.default,
				{
					title: info.financialProduct.productName,
					module: 'list',
					className: 'home-order-main',
					footer: _react2.default.createElement(
						'div',
						{ className: 'detail-footer' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ style: { 'display': 'block', 'color': '#FFF', 'width': '100%' }, to: {
									'pathname': '/apply',
									'search': '?id=' + this.state.productCode + '&scale=' + this.state.scale
								} },
							'\u7ACB\u5373\u6295\u8D44'
						)
					) },
				_react2.default.createElement(
					'div',
					{ className: 'top-content' },
					_react2.default.createElement(
						'div',
						{ className: 'top-present' },
						'\u9884\u671F\u5E74\u5316\u6536\u76CA\u7387\uFF08%\uFF09'
					),
					_react2.default.createElement(
						'div',
						{ className: 'top-title' },
						info.financialProduct.preYearRate
					),
					_react2.default.createElement(
						'div',
						{ className: 'top-tip' },
						'\u8FDB\u5EA6',
						((info.financialProduct.totalAmount - info.financialProduct.availableAmount) / info.financialProduct.totalAmount * 100).toFixed(2),
						'%,\u5269\u4F59\u53EF\u6295\u91D1\u989D',
						info.financialProduct.availableAmount,
						'\u5143'
					)
				),
				_react2.default.createElement(_antdMobile.WhiteSpace, { size: 'sm' }),
				_react2.default.createElement(
					_antdMobile.Accordion,
					null,
					_react2.default.createElement(
						_antdMobile.Accordion.Panel,
						{ header: _react2.default.createElement(
								'span',
								{ className: 'icon icon-file' },
								' \u9879\u76EE\u8BE6\u60C5 '
							) },
						_react2.default.createElement(
							'ul',
							{ className: 'mdl-content' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u9879\u76EE\u540D\u79F0'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialProduct.productName
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u9884\u671F\u5E74\u5316\u6536\u76CA'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialProduct.preYearRate,
									'%'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u6807\u603B\u91D1\u989D'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialProduct.totalAmount
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u6295\u8D44\u671F\u9650'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialProduct.deadline,
									[, '天', '周', '月', '年'][info.financialProduct.deadlineUnit]
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u8D77\u6295\u91D1\u989D'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialProduct.leastAmount
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u8FD8\u6B3E\u65B9\u5F0F'
								),
								_react2.default.createElement(
									'span',
									null,
									[, '等额本息', '先息后本'][info.financialProduct.repaymentMethod]
								)
							),
							_react2.default.createElement(
								'li',
								null,
								'\u63CF\u8FF0\uFF1A',
								info.financialProduct.remark
							)
						)
					),
					_react2.default.createElement(
						_antdMobile.Accordion.Panel,
						{ header: _react2.default.createElement(
								'span',
								{ className: 'icon icon-user' },
								' \u8D37\u6B3E\u4EBA\u57FA\u672C\u8D44\u6599 '
							) },
						_react2.default.createElement(
							'ul',
							{ className: 'mdl-content' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u59D3\u540D'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialUser.addUser
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u6027\u522B'
								),
								_react2.default.createElement(
									'span',
									null,
									[, '男', '女'][info.financialUser.sex]
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u5E74\u9F84'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialUser.age
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u5C45\u4F4F\u5730'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialUser.adress
								)
							)
						)
					),
					_react2.default.createElement(
						_antdMobile.Accordion.Panel,
						{ header: _react2.default.createElement(
								'span',
								{ className: 'icon icon-car' },
								' \u8F66\u8F86\u57FA\u672C\u8D44\u6599 '
							) },
						_react2.default.createElement(
							'ul',
							{ className: 'mdl-content' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u8F66\u8F86\u578B\u53F7'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialCar.carModel
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u8F66\u8F86\u989C\u8272'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialCar.carColor
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u8F66\u724C\u53F7'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialCar.carNum
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u8D2D\u4E70\u4EF7\u683C'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialCar.carPrice
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u62B5\u62BC\u4EF7\u683C'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialCar.mortgagePrice
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u8F66\u8F86\u5E74\u9650'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialCar.carLife,
									'\u5E74'
								)
							)
						)
					),
					_react2.default.createElement(
						_antdMobile.Accordion.Panel,
						{ header: _react2.default.createElement(
								'span',
								{ className: 'icon icon-file-word-o' },
								' \u8D44\u8D28\u5BA1\u6838 '
							) },
						_react2.default.createElement(
							'ul',
							{ className: 'mdl-content' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u5BA1\u6838\u8D44\u6599'
								),
								_react2.default.createElement(
									'span',
									null,
									'\u5BA1\u6838\u7ED3\u679C'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u5408\u540C\u8D44\u6599:'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialAudit.contract == 2 ? '通过' : '未通过'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u767B\u8BB0\u8BC1\u4E66:'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialAudit.registrationCertificate == 2 ? '通过' : '未通过'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u884C\u9A76\u8BC1:'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialAudit.drivingLicense == 2 ? '通过' : '未通过'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u4EBA\u8F66\u5408\u5F71:'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialAudit.manCarPhoto == 2 ? '通过' : '未通过'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u501F\u6B3E\u627F\u8BFA\u4E66:'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialAudit.acceptanceAgreement == 2 ? '通过' : '未通过'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u4E8C\u4EE3\u8EAB\u4EFD\u8BC1:'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialAudit.certificate == 2 ? '通过' : '未通过'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u8EAB\u4EFD\u8BC1\u9A8C\u8BC1\u56FE:'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialAudit.certificatePhoto == 2 ? '通过' : '未通过'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u62B5\u62BC\u60C5\u51B5\u58F0\u660E:'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialAudit.mortgageDeclare == 2 ? '通过' : '未通过'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u8FDD\u7AE0\u4FE1\u606F:'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialAudit.peccancy == 2 ? '通过' : '未通过'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'label',
									null,
									'\u94ED\u724C\u7167\u7247:'
								),
								_react2.default.createElement(
									'span',
									null,
									info.financialAudit.nameplatePhoto == 2 ? '通过' : '未通过'
								)
							)
						)
					),
					_react2.default.createElement(
						_antdMobile.Accordion.Panel,
						{ header: _react2.default.createElement(
								'span',
								{ className: 'icon icon-file-text' },
								' \u6295\u8D44\u8BB0\u5F55 '
							) },
						_react2.default.createElement(
							_antdMobile.List,
							null,
							info.financialRecordList.map(function (d) {
								return _react2.default.createElement(
									_antdMobile.List.Item,
									{ multipleLine: true, extra: d.amount + '元' },
									d.phone,
									' ',
									_react2.default.createElement(
										_antdMobile.List.Item.Brief,
										null,
										d.addTime
									)
								);
							})
						)
					)
				)
			);
		}
	}]);

	return Index;
}(_react.Component), _class.contextTypes = {
	'$store': _propTypes2.default.object.isRequired,
	'$utils': _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Index;

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = _antdMobile.List.Item;
var Index = (_temp2 = _class = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			'info': {
				'financialProduct': {},
				'financialAudit': {},
				'financialCar': {},
				'financialFileList': {},
				'financialRecordList': [],
				'financialUser': {}
			},
			'scale': 0,
			'productCode': null
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return { $store: $store, $utils: $utils };
		}
	}, {
		key: 'componentDidMount',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var info, _info$financialProduc, preYearRate, deadlineDays, scale;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.context.$store.api.user.account({});

							case 2:
								info = _context.sent;

								console.log(222);
								console.log(info);
								console.log(this.context.$store.api.user);
								console.log(this.context);

								if (info) {
									_context.next = 9;
									break;
								}

								return _context.abrupt('return');

							case 9:
								_info$financialProduc = info.financialProduct, preYearRate = _info$financialProduc.preYearRate, deadlineDays = _info$financialProduc.deadlineDays;

								preYearRate = isNaN(preYearRate) ? 0 : preYearRate;
								deadlineDays = isNaN(deadlineDays) ? 0 : deadlineDays;
								scale = parseInt(preYearRate * 0.01 * deadlineDays / 365 * 10000);
								// preYearRate = parseFloat(preYearRate)

								this.setState({ info: info, scale: scale, productCode: productCode });

							case 14:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_user2.default,
				{ title: '\u4E2A\u4EBA\u4E2D\u5FC3', module: 'userDetail', className: 'user-detail' },
				_react2.default.createElement(
					_antdMobile.NoticeBar,
					{ mode: 'closable' },
					'\u8BE5\u4FE1\u606F\u5C06\u4F5C\u4E3A\u4F60\u7684\u5B9E\u540D\u51ED\u8BC1\uFF0C\u8BF7\u786E\u4FDD\u771F\u5B9E'
				),
				_react2.default.createElement(
					_antdMobile.WingBlank,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'userInfo' },
						_react2.default.createElement(
							'a',
							{ href: '/setting' },
							_react2.default.createElement(
								'div',
								{ className: 'J_Avatar' },
								_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/user_defualt.png' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'J_DetailInfo' },
								_react2.default.createElement(
									'p',
									{ className: 'userName' },
									'leeexmxmx'
								),
								_react2.default.createElement(
									'p',
									{ className: 'phoneNum' },
									'137****3044'
								)
							),
							_react2.default.createElement('i', { 'class': 'icon icon-chevron-right J_icon', 'aria-hidden': 'true' })
						)
					)
				),
				_react2.default.createElement(
					_antdMobile.WingBlank,
					null,
					_react2.default.createElement(
						_antdMobile.Flex,
						null,
						_react2.default.createElement(
							_antdMobile.Flex.Item,
							null,
							_react2.default.createElement(
								'div',
								{ className: 'J_priceWrapper' },
								_react2.default.createElement(
									'p',
									{ className: 'J_price' },
									'0'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u603B\u8D44\u4EA7(\u5143)'
								)
							)
						),
						_react2.default.createElement(
							_antdMobile.Flex.Item,
							null,
							_react2.default.createElement(
								'div',
								{ className: 'J_priceWrapper' },
								_react2.default.createElement(
									'p',
									{ className: 'J_price' },
									'0'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u53EF\u7528\u4F59\u989D(\u5143)'
								)
							)
						),
						_react2.default.createElement(
							_antdMobile.Flex.Item,
							null,
							_react2.default.createElement(
								'div',
								{ className: 'J_priceWrapper' },
								_react2.default.createElement(
									'p',
									{ className: 'J_price' },
									'0'
								),
								_react2.default.createElement(
									'p',
									null,
									'\u6295\u8D44\u91D1\u989D(\u5143)'
								)
							)
						)
					)
				),
				_react2.default.createElement(
					_antdMobile.WingBlank,
					null,
					_react2.default.createElement(
						_antdMobile.Flex,
						null,
						_react2.default.createElement(
							_antdMobile.Flex.Item,
							null,
							_react2.default.createElement(
								'a',
								{ href: '/recharge' },
								_react2.default.createElement(
									'div',
									{ className: 'J_operation' },
									_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/recharge_defualt.png' }),
									_react2.default.createElement(
										'p',
										null,
										'\u5145\u503C'
									)
								)
							)
						),
						_react2.default.createElement(
							_antdMobile.Flex.Item,
							null,
							_react2.default.createElement(
								'a',
								{ href: '/withdrawals' },
								_react2.default.createElement(
									'div',
									{ className: 'J_operation' },
									_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/withdrawals_defualt.png' }),
									_react2.default.createElement(
										'p',
										null,
										'\u63D0\u73B0'
									)
								)
							)
						),
						_react2.default.createElement(
							_antdMobile.Flex.Item,
							null,
							_react2.default.createElement(
								'a',
								{ href: '/cardInfo' },
								_react2.default.createElement(
									'div',
									{ className: 'J_operation' },
									_react2.default.createElement('img', { src: 'http://1989591.51vip.biz:7001/public/i/card_defualt.png' }),
									_react2.default.createElement(
										'p',
										null,
										'\u94F6\u884C\u5361'
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'J_listWrapper' },
					_react2.default.createElement(
						_antdMobile.Accordion,
						{ accordion: true, className: 'my-accordion', onChange: this.onChange },
						_react2.default.createElement(
							_antdMobile.Accordion.Panel,
							{ header: '\u76F8\u5173\u7EDF\u8BA1\u91D1\u989D(\u5143)' },
							_react2.default.createElement(
								_antdMobile.List,
								{ className: 'my-list' },
								_react2.default.createElement(
									Item,
									{ extra: 0 },
									'\u7D2F\u8BA1\u6295\u6807\u6536\u76CA(\u5143)'
								),
								_react2.default.createElement(
									Item,
									{ extra: 0 },
									'\u7D2F\u8BA1\u6295\u6807\u6536\u76CA(\u5143)'
								),
								_react2.default.createElement(
									Item,
									{ extra: 0 },
									'\u7D2F\u8BA1\u6295\u6807\u6536\u76CA(\u5143)'
								)
							)
						)
					),
					_react2.default.createElement(
						'a',
						{ href: '/history' },
						_react2.default.createElement(
							_antdMobile.List,
							{ className: 'my-list' },
							_react2.default.createElement(
								Item,
								null,
								_react2.default.createElement(
									'div',
									{ className: 'J_listItem' },
									'\u6295\u8D44\u5386\u53F2',
									_react2.default.createElement('i', { 'class': 'icon icon-chevron-right J_icon', 'aria-hidden': 'true' })
								)
							)
						)
					),
					_react2.default.createElement(
						'a',
						{ href: '/transactionDetails' },
						_react2.default.createElement(
							_antdMobile.List,
							{ className: 'my-list' },
							_react2.default.createElement(
								Item,
								null,
								_react2.default.createElement(
									'div',
									{ className: 'J_listItem' },
									'\u8D44\u91D1\u660E\u7EC6',
									_react2.default.createElement('i', { 'class': 'icon icon-chevron-right J_icon', 'aria-hidden': 'true' })
								)
							)
						)
					),
					_react2.default.createElement(
						_antdMobile.WingBlank,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'J_logout' },
							_react2.default.createElement(
								_antdMobile.Button,
								{ type: 'warning' },
								'\u9000\u51FA\u767B\u5F55'
							)
						)
					)
				)
			);
		}
	}]);

	return Index;
}(_react.Component), _class.contextTypes = {
	'$store': _propTypes2.default.object.isRequired,
	'$utils': _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Index;

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = _antdMobile.List.Item;

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (key) {
      console.log(key);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _user2.default,
        { title: '\u4E2A\u4EBA\u8BBE\u7F6E', module: 'userDetail', className: 'user-detail',
          footer: _react2.default.createElement('div', null)
        },
        _react2.default.createElement(
          'div',
          { className: '' },
          _react2.default.createElement(
            _antdMobile.List,
            { className: 'my-list' },
            _react2.default.createElement(
              Item,
              { extra: _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    "leeexmxmx" + " "
                  ),
                  _react2.default.createElement('i', { 'class': 'icon icon-chevron-right J_icon', 'aria-hidden': 'true' })
                ) },
              _react2.default.createElement(
                'div',
                { className: 'J_listItem' },
                '\u7528\u6237\u540D'
              )
            )
          ),
          _react2.default.createElement(
            _antdMobile.List,
            { className: 'my-list' },
            _react2.default.createElement(
              Item,
              {
                extra: _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('span', null),
                  _react2.default.createElement('i', { 'class': 'icon icon-chevron-right J_icon', 'aria-hidden': 'true' })
                )
              },
              _react2.default.createElement(
                'div',
                { className: 'J_listItem' },
                '\u4E2A\u4EBA\u4FE1\u606F'
              )
            )
          ),
          _react2.default.createElement(
            _antdMobile.List,
            { className: 'my-list' },
            _react2.default.createElement(
              Item,
              {
                extra: _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    "个人账户"
                  )
                )
              },
              _react2.default.createElement(
                'div',
                { className: 'J_listItem' },
                '\u8D26\u6237\u7C7B\u578B'
              )
            )
          ),
          _react2.default.createElement(
            _antdMobile.List,
            { className: 'my-list' },
            _react2.default.createElement(
              Item,
              {
                extra: _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    "137****3044"
                  )
                )
              },
              _react2.default.createElement(
                'div',
                { className: 'J_listItem' },
                '\u624B\u673A'
              )
            )
          ),
          _react2.default.createElement(
            'a',
            { href: '/cardInfo' },
            _react2.default.createElement(
              _antdMobile.List,
              { className: 'my-list' },
              _react2.default.createElement(
                Item,
                {
                  extra: _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('i', { 'class': 'icon icon-chevron-right J_icon', 'aria-hidden': 'true' })
                  )
                },
                _react2.default.createElement(
                  'div',
                  { className: 'J_listItem' },
                  '\u94F6\u884C\u5361'
                )
              )
            )
          ),
          _react2.default.createElement(
            'a',
            { href: '/resetPassword' },
            _react2.default.createElement(
              _antdMobile.List,
              { className: 'my-list' },
              _react2.default.createElement(
                Item,
                {
                  extra: _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('i', { 'class': 'icon icon-chevron-right J_icon', 'aria-hidden': 'true' })
                  )
                },
                _react2.default.createElement(
                  'div',
                  { className: 'J_listItem' },
                  '\u66F4\u6362\u5BC6\u7801'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = _antdMobile.List.Item;
var Step = _antdMobile.Steps.Step;


var customIcon = function customIcon() {
  return _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 42 42', className: 'am-icon am-icon-md' },
    _react2.default.createElement(
      'g',
      { fillRule: 'evenodd', stroke: 'transparent', strokeWidth: '4' },
      _react2.default.createElement('path', { d: 'M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z' }),
      _react2.default.createElement('path', { fill: '#FFF', d: 'M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z' })
    )
  );
};

var steps = [{
  title: '实名认证',
  description: 'This is description'
}, {
  title: '绑定银行卡',
  description: 'This is description'
}, {
  title: '人工验证',
  description: 'This is description'
}].map(function (s, i) {
  return _react2.default.createElement(Step, { key: i, title: s.title, description: "" });
});

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      bankName: "",
      cardId: "",
      province: "",
      city: ""
    };

    _this.changeInfo = _this.changeInfo.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'checkInfo',
    value: function checkInfo() {
      _antdMobile.Toast.loading("请稍后", 2, function (e) {
        window.location.href = "/verification";
      });
    }
  }, {
    key: 'changeInfo',
    value: function changeInfo(e, key) {
      this.setState(_defineProperty({}, key, e.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      return _react2.default.createElement(
        _user2.default,
        { title: '\u7ED1\u5B9A\u94F6\u884C\u5361', module: 'userDetail', className: 'user-detail',
          footer: _react2.default.createElement('div', null)
        },
        _react2.default.createElement(
          'div',
          { className: 'J_steps' },
          _react2.default.createElement(
            _antdMobile.WingBlank,
            { mode: 20, className: 'stepsExample' },
            _react2.default.createElement(_antdMobile.WhiteSpace, null),
            _react2.default.createElement(
              _antdMobile.Steps,
              { current: 1, direction: 'horizontal' },
              steps
            ),
            _react2.default.createElement(_antdMobile.WhiteSpace, null)
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '请输入银行名:';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'text', value: this.state.bankName, onChange: function onChange(e) {
                  self.changeInfo(e, "bankName");
                } })
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '请输入银行卡号:';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'number', value: this.state.cardId, onChange: function onChange(e) {
                  self.changeInfo(e, "cardId");
                } })
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '请输入开户省份:';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'text', value: this.state.province, onChange: function onChange(e) {
                  self.changeInfo(e, "province");
                } })
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '请输入开户城市:';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'text', value: this.state.city, onChange: function onChange(e) {
                  self.changeInfo(e, "city");
                } })
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            'div',
            { className: 'J_logout' },
            _react2.default.createElement(
              _antdMobile.Button,
              { type: 'primary', onClick: this.checkInfo },
              '\u786E\u8BA4'
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = _antdMobile.List.Item;
var Step = _antdMobile.Steps.Step;


var customIcon = function customIcon() {
  return _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 42 42', className: 'am-icon am-icon-md' },
    _react2.default.createElement(
      'g',
      { fillRule: 'evenodd', stroke: 'transparent', strokeWidth: '4' },
      _react2.default.createElement('path', { d: 'M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z' }),
      _react2.default.createElement('path', { fill: '#FFF', d: 'M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z' })
    )
  );
};

var steps = [{
  title: '实名认证',
  description: 'This is description'
}, {
  title: '绑定银行卡',
  description: 'This is description'
}, {
  title: '人工验证',
  description: 'This is description'
}].map(function (s, i) {
  return _react2.default.createElement(Step, { key: i, title: s.title, description: "" });
});

var seasons = [{
  label: '男',
  value: 1
}, {
  label: '女',
  value: 0
}];

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      data: [],
      cols: 1,
      pickerValue: [],
      asyncValue: [],
      sValue: ['男', 1],
      visible: false,

      name: "",
      idNum: ""
    }, _this.onChange = function (value) {
      console.log(value);
      _this.setState({
        value: value
      });
    }, _this.onScrollChange = function (value) {
      console.log(value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'changeInfo',
    value: function changeInfo(e, key) {
      this.setState(_defineProperty({}, key, e.target.value));
    }
  }, {
    key: 'checkInfo',
    value: function checkInfo() {
      _antdMobile.Toast.loading("请稍后", 2, function (e) {
        window.location.href = "/bindCard";
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var self = this;
      return _react2.default.createElement(
        _user2.default,
        { title: '\u5B9E\u540D\u8BA4\u8BC1', module: 'userDetail', className: 'user-detail',
          footer: _react2.default.createElement('div', null)
        },
        _react2.default.createElement(
          'div',
          { className: 'J_steps' },
          _react2.default.createElement(
            _antdMobile.WingBlank,
            { mode: 20, className: 'stepsExample' },
            _react2.default.createElement(_antdMobile.WhiteSpace, null),
            _react2.default.createElement(
              _antdMobile.Steps,
              { current: 0, direction: 'horizontal' },
              steps
            ),
            _react2.default.createElement(_antdMobile.WhiteSpace, null)
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '姓名';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'text', value: this.state.name, onChange: function onChange(e) {
                  self.changeInfo(e, "name");
                } })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '身份证号';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'number', value: this.state.idNum, onChange: function onChange(e) {
                  self.changeInfo(e, "idNum");
                } })
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.Picker,
          {
            data: seasons,
            cols: this.state.cols,
            value: this.state.asyncValue,
            onChange: function onChange(v) {
              return _this2.setState({ sValue: v }, function (x) {
                return console.log(_this2.state);
              });
            },
            onOk: function onOk(v) {
              return console.log(v);
            },
            title: '\u9009\u62E9\u6027\u522B'
          },
          _react2.default.createElement(
            _antdMobile.List.Item,
            { arrow: 'horizontal', onClick: this.onClick },
            '\u6027\u522B'
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            'div',
            { className: 'J_logout' },
            _react2.default.createElement(
              _antdMobile.Button,
              { type: 'primary', onClick: this.checkInfo },
              '\u786E\u8BA4'
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 充值


var Item = _antdMobile.List.Item;
var Step = _antdMobile.Steps.Step;

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      value: 0
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState({
        value: e.target.value
      });
    }

    // 确认按钮统一甩锅 @丹君

  }, {
    key: 'determine',
    value: function determine() {
      console.log(1111);
      _antdMobile.Toast.loading("请稍后", 2, function (e) {
        _antdMobile.Toast.offline('服务器端网络异常!!!', 1);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _user2.default,
        { title: '\u5145\u503C', module: 'userDetail', className: 'user-detail',
          footer: _react2.default.createElement('div', null)
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '请输入充值金额:';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'number', value: this.state.value, onChange: this.onChange })
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            'div',
            { className: 'J_logout' },
            _react2.default.createElement(
              _antdMobile.Button,
              { type: 'primary', onClick: this.determine },
              '\u786E\u8BA4'
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 提现


var Item = _antdMobile.List.Item;
var Step = _antdMobile.Steps.Step;

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      value: 0
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState({
        value: e.target.value
      });
    }

    // 确认按钮统一甩锅 @丹君

  }, {
    key: 'determine',
    value: function determine() {
      console.log(1111);
      _antdMobile.Toast.loading("请稍后", 2, function (e) {
        _antdMobile.Toast.offline('服务器端网络异常!!!', 1);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _user2.default,
        { title: '\u63D0\u73B0', module: 'userDetail', className: 'user-detail',
          footer: _react2.default.createElement('div', null)
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '请输入提现金额:';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'number', value: this.state.value, onChange: this.onChange })
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            'div',
            { className: 'J_logout' },
            _react2.default.createElement(
              _antdMobile.Button,
              { type: 'primary', onClick: this.determine },
              '\u786E\u8BA4'
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 银行卡信息


var Item = _antdMobile.List.Item;
var Step = _antdMobile.Steps.Step;

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _user2.default,
        { title: '\u94F6\u884C\u5361\u4FE1\u606F', module: 'userDetail', className: 'user-detail',
          footer: _react2.default.createElement('div', null)
        },
        _react2.default.createElement(
          _antdMobile.WingBlank,
          { size: 'lg' },
          _react2.default.createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
          _react2.default.createElement(
            _antdMobile.Card,
            null,
            _react2.default.createElement(
              _antdMobile.Card.Body,
              null,
              _react2.default.createElement(
                'div',
                { className: 'J_msgText' },
                '\u6682\u672A\u53D1\u73B0\u5DF2\u7ED1\u5B9A\u7684\u94F6\u884C\u5361~~~'
              )
            )
          ),
          _react2.default.createElement(_antdMobile.WhiteSpace, { size: 'lg' })
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            'div',
            { className: 'J_logout' },
            _react2.default.createElement(
              'a',
              { href: '/certification' },
              _react2.default.createElement(
                _antdMobile.Button,
                { type: 'primary' },
                '\u53BB\u7ED1\u5B9A\u94F6\u884C\u5361'
              )
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 密码重置


var Item = _antdMobile.List.Item;
var Step = _antdMobile.Steps.Step;

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      value: 0,

      oldPass: "",
      oldPassHideText: "",
      newPass: "",
      newPassHideText: "",
      newPassCheck: "",
      newPassCheckHideText: ""
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState({
        value: e.target.value
      });
    }

    // 确认按钮统一甩锅 @丹君

  }, {
    key: 'determine',
    value: function determine() {
      console.log(1111);
      _antdMobile.Toast.loading("请稍后", 2, function (e) {
        _antdMobile.Toast.offline('服务器端网络异常!!!', 1);
      });
    }
  }, {
    key: 'changeInfo',
    value: function changeInfo(e, key) {
      var _setState;

      var length = e.target.value.length;
      var hideText = "";
      for (var i = 0; i < length; i++) {
        hideText += "*";
      };
      this.setState((_setState = {}, _defineProperty(_setState, key, e.target.value), _defineProperty(_setState, key + "HideText", hideText), _setState));
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      return _react2.default.createElement(
        _user2.default,
        { title: '\u91CD\u7F6E\u5BC6\u7801', module: 'userDetail', className: 'user-detail',
          footer: _react2.default.createElement('div', null)
        },
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '请输入旧密码:';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'text', value: this.state.oldPassHideText,
                onChange: function onChange(e) {
                  self.changeInfo(e, "oldPass");
                } })
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '请输入新密码:';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'text', value: this.state.newPassHideText, onChange: function onChange(e) {
                  self.changeInfo(e, "newPass");
                } })
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            _antdMobile.List,
            { renderHeader: function renderHeader() {
                return '请重新输入新密码:';
              }, className: 'my-list' },
            _react2.default.createElement(
              Item,
              null,
              _react2.default.createElement('input', { type: 'text', value: this.state.newPassCheckHideText, onChange: function onChange(e) {
                  self.changeInfo(e, "newPassCheck");
                } })
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            'div',
            { className: 'J_logout' },
            _react2.default.createElement(
              _antdMobile.Button,
              { type: 'primary', onClick: this.determine },
              '\u786E\u8BA4'
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 历史


var Item = _antdMobile.List.Item;
var Step = _antdMobile.Steps.Step;


var history = [];

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      history: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _user2.default,
        { title: '\u6295\u8D44\u5386\u53F2', module: 'userDetail', className: 'user-detail',
          footer: _react2.default.createElement('div', null)
        },
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          history.length > 0 ? history.map(function (item) {
            return _react2.default.createElement(
              'div',
              { className: 'J_historyItem' },
              _react2.default.createElement(
                _antdMobile.Card,
                null,
                _react2.default.createElement(
                  _antdMobile.Card.Body,
                  null,
                  _react2.default.createElement(
                    'div',
                    null,
                    'This is content of `Card`'
                  )
                )
              )
            );
          }) : _react2.default.createElement(
            'div',
            { className: 'J_historyItem' },
            _react2.default.createElement(
              _antdMobile.Card,
              null,
              _react2.default.createElement(
                _antdMobile.Card.Body,
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'J_msgText' },
                  '\u6682\u65F6\u6CA1\u6709\u6295\u8D44\u5386\u53F2!!!'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 资金明细


var Item = _antdMobile.List.Item;
var Step = _antdMobile.Steps.Step;


var history = [];

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      history: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _user2.default,
        { title: '\u8D44\u91D1\u660E\u7EC6', module: 'userDetail', className: 'user-detail',
          footer: _react2.default.createElement('div', null)
        },
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          history.length > 0 ? history.map(function (item) {
            return _react2.default.createElement(
              'div',
              { className: 'J_historyItem' },
              _react2.default.createElement(
                _antdMobile.Card,
                null,
                _react2.default.createElement(
                  _antdMobile.Card.Body,
                  null,
                  _react2.default.createElement(
                    'div',
                    null,
                    'This is content of `Card`'
                  )
                )
              )
            );
          }) : _react2.default.createElement(
            'div',
            { className: 'J_historyItem' },
            _react2.default.createElement(
              _antdMobile.Card,
              null,
              _react2.default.createElement(
                _antdMobile.Card.Body,
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'J_msgText' },
                  '\u6682\u65F6\u6CA1\u6709\u4EFB\u4F55\u8D44\u91D1\u8BB0\u5F55!!!'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(657);

var _user2 = _interopRequireDefault(_user);

var _antdMobile = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 人工验证


var Item = _antdMobile.List.Item;
var Step = _antdMobile.Steps.Step;


var history = [];

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      history: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'toHome',
    value: function toHome() {
      window.location.href = "/user";
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _user2.default,
        { title: '\u9A8C\u8BC1\u4E2D', module: 'userDetail', className: 'user-detail',
          footer: _react2.default.createElement('div', null)
        },
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          history.length > 0 ? history.map(function (item) {
            return _react2.default.createElement(
              'div',
              { className: 'J_historyItem' },
              _react2.default.createElement(
                _antdMobile.Card,
                null,
                _react2.default.createElement(
                  _antdMobile.Card.Body,
                  null,
                  _react2.default.createElement(
                    'div',
                    null,
                    'This is content of `Card`'
                  )
                )
              )
            );
          }) : _react2.default.createElement(
            'div',
            { className: 'J_historyItem' },
            _react2.default.createElement(
              _antdMobile.Card,
              null,
              _react2.default.createElement(
                _antdMobile.Card.Body,
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'J_msgText' },
                  '\u6B63\u5728\u4EBA\u5DE5\u9A8C\u8BC1\u4E2D~'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _antdMobile.WingBlank,
          null,
          _react2.default.createElement(
            'div',
            { className: 'J_logout' },
            _react2.default.createElement(
              _antdMobile.Button,
              { type: 'primary', onClick: this.toHome },
              '\u8FD4\u56DE'
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ })

});