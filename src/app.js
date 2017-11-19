import './scss/style.scss';
require('font-awesome-webpack');
require("bootstrap-sass");
import angular from 'angular';
// import Angular2To1 from 'angular2to1';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import AngularSanitize from 'angular-sanitize';
import AngularBootstrap from 'angular-ui-bootstrap';

/*eslint-disable */
import LocalStorageModule from 'angular-local-storage';
/*eslint-enable */
import AppCore from './core';
import { AppComponent } from './app.component';

import MainTemplate from './components/mainTemplate';
import Produits from './components/produits';

import Presentation from './components/presentation';
import ProduitsAdmin from './components/produitsAdmin';

const appName = 'myApp'; 

angular.module(appName, [
  // framework wide components
  AngularUiRouter,
  AngularAnimate,
  AngularSanitize,
  AngularBootstrap,

  // services
  'LocalStorageModule',
  AppCore, 

  // ui-components
  MainTemplate, 
  Produits, 
  Presentation, 
  ProduitsAdmin
])
.config(config)
.component(AppComponent.selector, AppComponent);

/* @ngInject */
function config ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix(appName);

  $stateProvider
    .state('mainTemplate', {
      url: '/',
      abstract:true,
      component: 'mainTemplate'
    })
    .state('mainTemplateAdmin', {
      url: '/admin/',
      abstract:true,
      component: 'mainTemplateAdmin'
    })
    .state('produitsAdmin', {
      url: 'produitsAdmin',
      component: 'produitsAdmin',
      parent : 'mainTemplate'
    })
    .state('produits', {
      url: 'produits',
      component: 'produits',
      parent : 'mainTemplate'
    })
    .state('presentation', {
      url: 'presentation',
      component: 'presentation',
      parent : 'mainTemplate'
    });

  $urlRouterProvider.otherwise('/presentation');
}

angular.element(document).ready(() => {
  angular.bootstrap(document, [appName]);
});
