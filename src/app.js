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
import {
    AppComponent
} from './app.component';

import MainTemplate from './components/mainTemplate';
import MainTemplateAdmin from './components/mainTemplateAdmin';
import Produits from './components/produits';
import Traiteur from './components/traiteur';
import Packs from './components/packs';

import Presentation from './components/presentation';
import ProduitsAdmin from './components/produitsAdmin';
import PacksAdmin from './components/packsAdmin';
import TraiteurAdmin from './components/traiteurAdmin';
import Contact from './components/contact';


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
        MainTemplateAdmin,
        Produits,
        Traiteur,
        Packs,
        Contact,
        Presentation,
        ProduitsAdmin,
        TraiteurAdmin,
        PacksAdmin
    ])
    .config(config)
    .filter('linebreaks', function() {
        return function(text) {
            if(text != null)
            return text.replace(/\n/g, "<br>");
        }
    })
    .directive('fileModel', [
        '$parse',
        function($parse) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;

                    element.bind('change', function() {
                        scope.$apply(function() {
                            if (attrs.multiple) {
                                modelSetter(scope, element[0].files);
                            } else {
                                modelSetter(scope, element[0].files[0]);
                            }
                        });
                    });
                }
            };
        }
    ])
    .component(AppComponent.selector, AppComponent);

/* @ngInject */
function config($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

    localStorageServiceProvider.setPrefix(appName);

    $stateProvider
        .state('mainTemplate', {
            url: '/',
            abstract: true,
            component: 'mainTemplate'
        })
        .state('mainTemplateAdmin', {
            url: '/admin',
            abstract: true,
            component: 'mainTemplateAdmin'
        })
        .state('produitsAdmin', {
            url: '/produitsAdmin',
            component: 'produitsAdmin',
            parent: 'mainTemplateAdmin'
        })
        .state('traiteurAdmin', {
            url: '/traiteurAdmin',
            component: 'traiteurAdmin',
            parent: 'mainTemplateAdmin'
        })
        .state('packsAdmin', {
            url: '/packsAdmin',
            component: 'packsAdmin',
            parent: 'mainTemplateAdmin'
        })
        .state('presentation', {
            url: 'presentation',
            component: 'presentation',
            parent: 'mainTemplate'
        })
        .state('contact', {
            url: 'contact',
            component: 'contact',
            parent: 'mainTemplate'
        })
        .state('produits', {
            url: 'produits/:typeList',
            component: 'produits',
            parent: 'mainTemplate'
        })
        .state('traiteur', {
            url: 'traiteur',
            component: 'traiteur',
            parent: 'mainTemplate'
        })
        .state('packs', {
            url: 'packs',
            params: { 'minPrix': null, 'maxPrix': null },
            component: 'packs',
            parent: 'mainTemplate'

        });

    $urlRouterProvider.otherwise('/presentation');
}

angular.element(document).ready(() => {
    angular.bootstrap(document, [appName]);
});