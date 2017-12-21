import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { PacksComponent } from './packs.component';

export * from './packs.component';

export default angular.module('packs', [ 
  AppCore,
  uiRouter
])
  .config(config)
  .component(PacksComponent.selector, PacksComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('Produits', {
  //         url: '/Produits',
  //         template: '<other></other>'
  //     });
}
