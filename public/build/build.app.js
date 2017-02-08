/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".build." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./public/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _modal_controller = __webpack_require__(1);

	var _modal_controller2 = _interopRequireDefault(_modal_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	window.__app = {};
	__app.global = {};

	var App = function App() {
		_classCallCheck(this, App);

		new _modal_controller2.default();
	};

	window.addEventListener('DOMContentLoaded', function () {
		new App();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _helper = __webpack_require__(2);

	var _helper2 = _interopRequireDefault(_helper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalController = function (_Helper) {
		_inherits(ModalController, _Helper);

		function ModalController() {
			_classCallCheck(this, ModalController);

			var _this = _possibleConstructorReturn(this, (ModalController.__proto__ || Object.getPrototypeOf(ModalController)).call(this));

			_this.modalButtons = document.querySelectorAll('.modal-open-action');
			_this.modalClose = document.querySelectorAll('.modal-window__window-close');
			_this.defineAttribute = 'data-modal';

			if (!_this.modalButtons || _this.modalButtons.length < 1) return _possibleConstructorReturn(_this);

			_this.startListener();
			return _this;
		}

		_createClass(ModalController, [{
			key: 'startListener',
			value: function startListener() {
				this.flyEvent('add', ['click'], [this.modalButtons, this.modalClose], [this.handlerToOpen.bind(this), this.handlerToClose.bind(this)]);
			}
		}, {
			key: 'handlerToOpen',
			value: function handlerToOpen(event) {
				var _this2 = this;

				__webpack_require__.e/* nsure */(1, function () {
					var Contact = __webpack_require__(3);
					__app.global.modal = Contact.default;
					var target = event.target.classList.contains('modal-open-action') ? event.target : event.target.closest('.modal-open-action');
					if (!target) return;
					__app.global.modal.windowOpen(target.getAttribute(_this2.defineAttribute));
				});
			}
		}, {
			key: 'handlerToClose',
			value: function handlerToClose(event) {
				__app.global.modal.windowClose(event.target);
			}
		}]);

		return ModalController;
	}(_helper2.default);

	exports.default = ModalController;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Helper = function () {
	    function Helper() {
	        _classCallCheck(this, Helper);

	        (function Base() {

	            console.info('Base define');
	            if (!Element.prototype.closest) {

	                Element.prototype.closest = function (css) {
	                    var node = this;

	                    while (node) {
	                        if (node.matches(css)) return node;else node = node.parentElement;
	                    }
	                    return null;
	                };
	            }
	        })();
	    }

	    _createClass(Helper, [{
	        key: 'flyEvent',
	        value: function flyEvent(action, listen, element, callback) {

	            var oneCallback = false,
	                callbackTohandler = void 0,
	                count = 0;

	            if (callback instanceof Array && element.length != callback.length) {
	                throw {
	                    message: "The number of elements handler does not match"
	                };
	            } else if (typeof callback == "function") {
	                oneCallback = true;
	            }

	            listen.forEach(listener);

	            function listener(item, i) {
	                element.forEach(elements.bind(this, item));
	            }

	            function elements(item, items, j) {

	                if (!items) return;

	                callbackTohandler = oneCallback ? callback : callback[j];

	                try {
	                    items[action + 'EventListener'](item, callbackTohandler);
	                } catch (e) {
	                    [].forEach.call(items, function (el, c) {
	                        el[action + 'EventListener'](item, callbackTohandler);
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'classChange',
	        value: function classChange(what, events, el) {

	            for (var i = 0; i < what.length; i++) {

	                for (var j = 0; j < el.length; j++) {

	                    try {
	                        el[j].classList[events](what[i]);
	                    } catch (e) {
	                        console.log(e);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'cssHelper',
	        value: function cssHelper(el, styles) {

	            if (!el || !styles) return;

	            if (el.length != styles.length) {
	                throw {
	                    message: "The number of elements does not match"
	                };
	            }

	            el.forEach(cicleElements);

	            function cicleElements(item, i) {
	                try {
	                    item.style.cssText += styles[i];
	                } catch (e) {
	                    [].forEach.call(item, function (elem, j) {
	                        elem.style.cssText += styles[i];
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'xhrRequest',
	        value: function xhrRequest(method, url, header, data, callback, self) {

	            var xhr = new XMLHttpRequest();

	            xhr.open(method, url, true);

	            if (header) {
	                xhr.setRequestHeader('Content-Type', header);
	            }

	            xhr.onreadystatechange = function () {
	                if (xhr.readyState == 4 && xhr.status == 200) {
	                    callback(xhr.responseText, self);
	                }
	            };

	            xhr.send(data || null);
	        }
	    }]);

	    return Helper;
	}();

	exports.default = Helper;

/***/ }
/******/ ]);