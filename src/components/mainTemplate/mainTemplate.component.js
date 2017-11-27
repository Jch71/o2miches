import template from './mainTemplate.html';
import modalTemplate from './loginModal.html';
import modalController from './loginModal.ctrl';

export let MainTemplateComponent = {
    templateUrl: template,
    selector: 'mainTemplate',
    bindings: {},
    /* @ngInject */
    controller: class MainTemplateCtrl {
        /* @ngInject */
        constructor($state, $uibModal, loginService) {
            // TODO - constructor arguments that should be available on "this"
            // should be added to the assign object
            Object.assign(this, {
                $state
            });
            this.loginService = loginService;
            this.$uibModal = $uibModal;
            this.title = 'SuperNova';
            this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
        }

        goAdmin() {
            if (this.loginService.getLogged())
                this.$state.go('produitsAdmin');
            else {
                this.$uibModal.open({
                    backdrop: 'static',
                    keyboard: false,
                    animation: true,
                    templateUrl: modalTemplate,
                    controller: modalController,
                    controllerAs: 'ctrl'
                }).closed.then(() => {});
            }
        }
    }
};