import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { ProduitsComponent } from './produits.component';

export * from './produits.component';

export default angular.module('produits', [ 
  AppCore,
  uiRouter
])
  .config(config)
  .component(ProduitsComponent.selector, ProduitsComponent)
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
