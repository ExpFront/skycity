import angular        from 'angular';
import DocsController from './controller/DocsCtrl';

import './stylesheets/docs.scss';

export default angular
	.module('Starter.App.Docs', [])
	.controller('DocsController', DocsController)
	.name;
