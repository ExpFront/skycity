const config = ($stateProvider, $urlRouterProvider, $locationProvider, $logProvider, $qProvider) => {
	'ngInject';

	$logProvider.debugEnabled(true);  /** Turn debug mode on/off */
	$locationProvider.html5Mode(true);  /** Turn html5 mode on */
	$urlRouterProvider.otherwise('/home');  /** If current route not in routes then redirect to home */
  $qProvider.errorOnUnhandledRejections(false)

	$stateProvider
		.state({
			url: '/',
			name: 'home',
			controller: 'HomeController',
			controllerAs: 'Home',
			template: require('./blocks/Home/views/home.jade')()
		})
		.state({
			url: '/test/list',
			name: 'testList',
			controller: 'TestListController',
			controllerAs: 'TestList',
			template: require('./blocks/TestList/views/testList.jade')()
		})
		.state({
			url: '/test/form',
			name: 'testForm',
			controller: 'TestFormController',
			controllerAs: 'TestForm',
			template: require('./blocks/TestForm/views/testForm.jade')()
		})
		.state({
			url: '/docs',
			name: 'docs',
			controller: 'DocsController',
			controllerAs: 'Docs',
			template: require('./blocks/Docs/views/docs.jade')()
		})
		.state({
			url: '/login',
			name: 'login',
			controller: 'LoginController',
			controllerAs: 'Login',
			template: require('./blocks/Login/views/login.jade')()
		});
};

export default config;
