class openBrands {

	constructor() {
		this.button = document.querySelector('.che-catalog-title-all-item');
		this.subcontainer = document.querySelector('.catalog-aside');
		this.activeClass = 'catalog-aside--visible';

		this.button.addEventListener('click', this.clickHandler.bind(this));
	}

	clickHandler(event) {
		if (window.innerWidth > 576) return;

		let target = event && event.target;

		if (!target.classList.contains('catalog-aside__title--mob')) return;
		this.subcontainer.classList.toggle(this.activeClass);

	}

}

export default openBrands;