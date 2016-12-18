import angular        from 'angular';
import TestListController from './controller/TestListCtrl';

import './stylesheets/testList.scss';

export default angular
	.module('Starter.App.TestList', [])
	.controller('TestListController', TestListController)
	.name;
