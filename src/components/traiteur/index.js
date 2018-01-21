import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { TraiteurComponent } from './traiteur.component';

export * from './traiteur.component';

export default angular.module('traiteur', [ 
  AppCore,
  uiRouter
])
  .config(config)
  .component(TraiteurComponent.selector, TraiteurComponent)
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
