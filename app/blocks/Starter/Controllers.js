import angular from 'angular';

import Layout  from './Index';
import Home    from '../Home/Index';
import TestForm from '../TestForm/Index';
import TestList from '../TestList/Index';
import Login   from '../Login/Index';
import Docs    from '../Docs/Index';

export default angular
	.module('Starter.App.controllers', [
		Layout, Home, TestForm, TestList, Login, Docs
	])
	.name;
