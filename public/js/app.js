import CarouselModule from "./carousel";
import openBrands from "./brands";

class App {
	constructor() {
		this.init();
	}

	init() {
		new CarouselModule();
		new openBrands();
	}

}

export default App;
