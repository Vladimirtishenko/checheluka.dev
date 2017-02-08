webpackJsonp([1],{

/***/ 3:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ModalAction = function () {
		function ModalAction() {
			_classCallCheck(this, ModalAction);

			this.mainWrapperModals = document.querySelector('.modal-window-cover');
		}

		_createClass(ModalAction, [{
			key: 'windowOpen',
			value: function windowOpen(targetClass) {

				var windows = this.mainWrapperModals.querySelector('.' + targetClass);

				if (!windows) return;

				this.mainWrapperModals.classList.remove('hidden');
				windows.classList.remove('hidden');
			}
		}, {
			key: 'windowClose',
			value: function windowClose(target) {
				var parent = target.closest('.modal-window');
				if (!parent) return;
				parent.classList.add('hidden');
				this.mainWrapperModals.classList.add('hidden');
			}
		}]);

		return ModalAction;
	}();

	exports.default = new ModalAction();

/***/ }

});