export default class HomeController {
	constructor(TitleService) {
		'ngInject';

		TitleService.setTitle({
			newTitle: 'Home'
		});

	}
}
