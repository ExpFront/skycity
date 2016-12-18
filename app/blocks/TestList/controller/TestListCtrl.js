export default class TestListController {
	constructor($http, TitleService) {
		'ngInject';

		TitleService.setTitle({
			newTitle: 'TestList'
		});

		this.getTests = () => {
			const url = 'http://localhost:9000/api/tests';

			return $http.get(url).then(res => {
				this.tests = res;
			}, err => {
				this.tests = null;
			});
		}

		this.getTests();


		this.publishTest = id => {
			const url = 'http://localhost:9000/api/publish';
			const data = {
				id
			};

			return $http.post(url, data).then(res => {
				console.log(res)
			}, err => {
				console.log(err)});
		}
	}
}
