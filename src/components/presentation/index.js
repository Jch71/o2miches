import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { PresentationComponent } from './presentation.component';

export * from './presentation.component';

export default angular.module('presentation', [ 
  AppCore,
  uiRouter
])
  .config(config)
  .component(PresentationComponent.selector, PresentationComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('presentation', {
  //         url: '/presentation',
  //         template: '<other></other>'
  //     });
}
