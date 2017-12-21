import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { ContactComponent } from './contact.component';

export * from './contact.component';

export default angular.module('contact', [ 
  AppCore,
  uiRouter
])
  .config(config)
  .component(ContactComponent.selector, ContactComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('contact', {
  //         url: '/contact',
  //         template: '<other></other>'
  //     });
}
 