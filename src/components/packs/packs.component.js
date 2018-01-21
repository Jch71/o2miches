import template from './packs.html';

export let PacksComponent = {
    templateUrl: template,
    selector: 'packs',
    bindings: {},
    /* @ngInject */
    controller: class PacksCtrl {
        /* @ngInject */
        constructor($state, $stateParams, ApiService) {
            // TODO - constructor arguments that should be available on "this"
            // should be added to the assign object
            Object.assign(this, {
                $state
            });
            this.$stateParams = $stateParams;
            this.itemToAdd = {};
            this.isAddingItem = true;

            this.ApiService = ApiService;
            this.loadList(this.$stateParams.minPrix,this.$stateParams.maxPrix);

        }

        getItemTypeText(type) {
            let text;
            switch (type) {
                case 1:
                    text = "Structures gonflables";
                    break;
                case 2:
                    text = "Mascottes";
                    break;
                case 3:
                    text = "Jeux de kermesse";
                    break;
                case 4:
                    text = "Appareils sucré salé";
                    break;
                case 5:
                    text = "Pack";
                    break;
                case 6:
                    text = "Animation";
                    break;
                default:
                    text = null;
                    break;
            }
            return text;
        }


        loadList(minPrix, maxPrix) {
            let queryParams = {
                'table': 'packs'
            }
            if (minPrix != 0) {
                queryParams.filter = {'minPrix' : minPrix}
                if (maxPrix != 0)
                    queryParams.filter.maxPrix = maxPrix;
            }

            this.ApiService.callApi('GET', queryParams).then((data) => {
                this.listObjects = data.packs;
            });
        }
    }
};