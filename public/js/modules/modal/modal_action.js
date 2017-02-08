class ModalAction {
	
	constructor(){
		this.mainWrapperModals = document.querySelector('.modal-window-cover');
	}

	windowOpen(targetClass){
		
		let windows = this.mainWrapperModals.querySelector('.' + targetClass);

		if(!windows) return;

		this.mainWrapperModals.classList.remove('hidden');
		windows.classList.remove('hidden');

	}

	windowClose(target){
		let parent = target.closest('.modal-window');
		if(!parent) return;
		parent.classList.add('hidden');
		this.mainWrapperModals.classList.add('hidden');
	}

}

export default new ModalAction;