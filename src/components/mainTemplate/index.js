import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { MainTemplateComponent } from './mainTemplate.component';

export * from './mainTemplate.component';

export default angular.module('mainTemplate', [ 
  AppCore,
  uiRouter
])
  .config(config)
  .component(MainTemplateComponent.selector, MainTemplateComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('mainTemplate', {
  //         url: '/mainTemplate',
  //         template: '<other></other>'
  //     });
}
