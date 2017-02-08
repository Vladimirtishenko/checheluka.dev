import Helper from '../../helper.js';

class ModalController extends Helper {

	constructor(){
		super();
		this.modalButtons = document.querySelectorAll('.modal-open-action');
		this.modalClose = document.querySelectorAll('.modal-window__window-close');
		this.defineAttribute = 'data-modal';

		if(!this.modalButtons || this.modalButtons.length < 1) return;

		this.startListener();
	}

	startListener(){
		this.flyEvent('add', ['click'], [this.modalButtons, this.modalClose], [this.handlerToOpen.bind(this), this.handlerToClose.bind(this)]);
	}

	handlerToOpen(event){
		require.ensure([], () => {
		  let Contact = require(__dirname + '/modal_action.js');
		  __app.global.modal = Contact.default;
		  let target = event.target.classList.contains('modal-open-action') ? event.target : event.target.closest('.modal-open-action');
		  if(!target) return;
		 __app.global.modal.windowOpen(target.getAttribute(this.defineAttribute));
		})
	}

	handlerToClose(event){
		__app.global.modal.windowClose(event.target);
	}

}

export default ModalController;