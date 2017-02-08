import ModalWindow from './modules/modal/modal_controller.js';

window.__app = {};
__app.global = {};

class App {
	constructor() {
		new ModalWindow();
	}
}


window.addEventListener('DOMContentLoaded', function () {
	new App();
})