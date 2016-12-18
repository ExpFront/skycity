import angular             from 'angular';
import uiRouter            from 'angular-ui-router';
import uiRouterStateHelper from 'angular-ui-router.statehelper';

import config              from './config';
import run             from './run';
import AppView             from './blocks/Starter/views/layout.jade';

import Controllers         from './blocks/Starter/Controllers';


const appname = 'Starter';  /** App and root module name */
const deps    = [uiRouter, 'ui.router.stateHelper'];  /** All global dependencies */
const blocks = [Controllers];  /** All app dependencies */

document.getElementById('app-container').innerHTML = AppView();  /** Store our app. (Getting html from jade) */
angular.module(appname, deps.concat(blocks)).config(config).run(run);  /** Declare root module */
angular.bootstrap(document, [appname]);  /** Bootstrap our application. Поехали! */

/** Export appname. Just in case. */
export default appname;
