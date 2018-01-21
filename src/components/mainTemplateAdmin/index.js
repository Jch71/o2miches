import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { MainTemplateAdminComponent } from './mainTemplateAdmin.component';

export * from './mainTemplateAdmin.component';

export default angular.module('mainTemplateAdmin', [ 
  AppCore,
  uiRouter
])
  .config(config)
  .component(MainTemplateAdminComponent.selector, MainTemplateAdminComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('mainTemplateAdmin', {
  //         url: '/mainTemplateAdmin',
  //         template: '<other></other>'
  //     });
}
