export default class LoginController {
	constructor(TitleService) {
		'ngInject';

		TitleService.setTitle({
			newTitle: 'Test'
		});
	}
}
