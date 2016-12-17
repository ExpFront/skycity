export default class TestFormController {
	constructor($http, TitleService) {
		'ngInject';

		TitleService.setTitle({
			newTitle: 'TestForm'
		});

		this.postStatus = 'creating';

		this.test = {
			title: '',
			subject: '',
			questions: [{
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: null
			}, {
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: null
			}, {
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: null
			}, {
				title: '',
				answers: {
					answer_one: '',
					answer_second: '',
					answer_third: '',
					answer_fourth: ''
				},
				correct_answer: null
			}]
		};

		this.createTestForm = () => {
			console.log('ss');
			const url = 'http://localhost:9000/api/tests';
			const data = this.test;

			return $http.post(url, data).then(res => {
				console.log('1');
				this.postStatus = 'created';
			}, err => {
				console.log('2')
				this.postStatus = 'creating';
			});
		}
	}
}
