import angular        from 'angular';
import HomeController from './controller/HomeCtrl';

import './stylesheets/home.scss';

export default angular
	.module('Starter.App.Home', [])
	.controller('HomeController', HomeController)
	.name;
