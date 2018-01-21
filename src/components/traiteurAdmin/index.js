import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { TraiteurAdminComponent } from './traiteurAdmin.component';

export * from './traiteurAdmin.component';

export default angular.module('traiteurAdmin', [ 
  AppCore,
  uiRouter
])
  .config(config)
  .component(TraiteurAdminComponent.selector, TraiteurAdminComponent)
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
