import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { ProduitsAdminComponent } from './produitsAdmin.component';

export * from './produitsAdmin.component';

export default angular.module('produitsAdmin', [ 
  AppCore,
  uiRouter
])
  .config(config)
  .component(ProduitsAdminComponent.selector, ProduitsAdminComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('ProduitsAdmin', {
  //         url: '/ProduitsAdmin',
  //         template: '<other></other>'
  //     });
}
