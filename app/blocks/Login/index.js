import angular        from 'angular';
import LoginController from './controller/LoginCtrl';

import './stylesheets/login.scss';

export default angular
	.module('Starter.App.Login', [])
	.controller('LoginController', LoginController)
	.name;
