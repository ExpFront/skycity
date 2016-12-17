export default class DocsController {
	constructor(TitleService) {
		'ngInject';

		TitleService.setTitle({
			newTitle: 'Docs'
		});
	}
}
