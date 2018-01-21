import template from './traiteur.html';

export let TraiteurComponent = {
    templateUrl: template,
    selector: 'traiteur',
    bindings: {},
    /* @ngInject */
    controller: class TraiteurCtrl {
        /* @ngInject */
        constructor($state, $stateParams, ApiService) {
            // TODO - constructor arguments that should be available on "this"
            // should be added to the assign object
            Object.assign(this, {
                $state
            });
            this.itemToAdd = {};
            this.isAddingItem = true;

            this.ApiService = ApiService;
            this.loadList();
        }

        loadList() {

             let queryParams = {
                'table': 'traiteur'
            }
           
            this.ApiService.callApi('GET', queryParams).then((data) => {
                this.listObjects = data.traiteur;
            });
        }
    }
};