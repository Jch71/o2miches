import template from './mainTemplateAdmin.html';

export let MainTemplateAdminComponent = {
    templateUrl: template,
    selector: 'mainTemplateAdmin',
    bindings: {},
    /* @ngInject */
    controller: class MainTemplateAdminCtrl {
        /* @ngInject */
        constructor($state, loginService) {
            // TODO - constructor arguments that should be available on "this"
            // should be added to the assign object
            Object.assign(this, {
                $state
            });
            this.loginService = loginService;
            this.title = 'SuperNova';
            this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
        }
    }
};