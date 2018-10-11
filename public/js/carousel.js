class CarouselModule {

	constructor() {

		this.props = new function() {
				this.wrap = document.querySelector('.frame-carousel') || null;
				this.list = document.querySelector('.frame-carousel__list', this.wrap);
				this.children = this.list && this.list.children;
				let margin = window.innerWidth * 0.04; //это ширина окна умноженная на 0.02(это 2vw - марджин одного слайда), и умноженная на 2 - т.к. марджин с 2 сторон
				this.margin = margin || 0;
				this.direction = 'translateX';
				this.speed = '.3s';
				this.arrows = document.querySelector('.frame-carousel-controls', this.wrap);
				this.clients = {
					sizes: (this.direction == 'translateY') ? 'height' : 'width',
					state: (this.direction == 'translateY') ? 'clientHeight' : 'clientWidth'
				};
				this.state = 0;
		}

		if(
			!this.props.children ||
			this.props.children.length < 1 ||
			!this.props.arrows
		) {
			return;
		}

		this.init();
	}

	init() {

		this.moveSlide();
		this.props.arrows.addEventListener('click', this.__handlerActionSlide.bind(this));

	}

	moveSlide(left, time){

		let child = this.props.children,
			firstChild = Array.from( this.props.children ).shift(),
			width = (child.length + 2) * (firstChild[this.props.clients.state] + this.props.margin * 2) + "px",
			leftOffset = left || 0,
			timeDuration = time || '0s';

		this.count = Math.floor(this.props.wrap.clientWidth / firstChild[this.props.clients.state]);

		this.props.list.style.cssText += this.props.clients.sizes + ":" + width + ";transition: " + timeDuration + " ease-out ;transform: "+this.props.direction+"("+leftOffset+"px)";

	}

	__handlerActionSlide(event){

		if(!event || !event.target || !event.target.getAttribute('data-controls')) return;

		let props = this.getLocalProps(event);

		this.calculateState(props.attr);

		this.moveSlide(-(props.offset * this.props.state), this.props.speed);

	}

	getLocalProps(event){

		let props = {};

		props.attr = event.target.getAttribute('data-controls');
		props.child = Array.from( this.props.children ).shift();
		props.offset = (props.child[this.props.clients.state] + this.props.margin);

		return props;
	}

	calculateState(attr){

		if(attr == 'left'){
			this.props.state++;
		} else {
			this.props.state--;
		}

		if(this.props.state > this.props.children.length - this.count){
			this.props.state = 0;
		} else if(this.props.state < 0){
			this.props.state = this.props.children.length - this.count;
		}
	}

}

export default CarouselModule;
