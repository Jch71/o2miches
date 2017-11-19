import template from './mainTemplate.html';

export let MainTemplateComponent = {
  templateUrl: template,
  selector: 'mainTemplate',
  bindings: {},
  /* @ngInject */
  controller: class MainTemplateCtrl {
    /* @ngInject */
    constructor($state) {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, { $state });
      this.title = 'SuperNova';
      this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
    }
  }
};
 