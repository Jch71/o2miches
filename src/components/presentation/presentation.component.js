import template from './presentation.html';

export let PresentationComponent = {
  templateUrl: template,
  selector: 'presentation',
  bindings: {},
  /* @ngInject */
  controller: class PresentationCtrl {
    /* @ngInject */
    constructor($state) {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, { $state });

      
    }

   
  }
};
 