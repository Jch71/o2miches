import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { PacksAdminComponent } from './packsAdmin.component';

export * from './packsAdmin.component';

export default angular.module('packsAdmin', [ 
  AppCore,
  uiRouter
])
  .config(config)
  .component(PacksAdminComponent.selector, PacksAdminComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('packsAdmin', {
  //         url: '/packsAdmin',
  //         template: '<other></other>'
  //     });
}
