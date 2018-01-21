import template from './produits.html';

export let ProduitsComponent = {
    templateUrl: template,
    selector: 'produits',
    bindings: {},
    /* @ngInject */
    controller: class ProduitsCtrl {
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
            this.loadList(this.$stateParams.typeList);



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


        loadList(typeList) {
            let queryParams = {
                'table': 'produits'
            }
            if (typeList != 0) {
                queryParams.filter = typeList
            }

            this.ApiService.callApi('GET', queryParams).then((data) => {
                this.listObjects = data.produits;
            });
        }
    }
};