import angular        from 'angular';
import TestFormController from './controller/TestFormCtrl';

import './stylesheets/test.scss';

export default angular
	.module('Starter.App.TestForm', [])
	.controller('TestFormController', TestFormController)
	.name;
