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
            this.loadList(this.$stateParams.minPrix);

        }

        addItem() {
            this.ApiService.callApi('POST', {
                'table': 'packs'
            }, this.itemToAdd).then((data) => {
                console.log(data);
                if (data != null) {
                    this.itemToAdd = {};
                    this.loadList();
                }
            });
        }


        editItem() {
            console.log(this.itemToEdit);
            this.ApiService.callApi('PUT', {
                'table': 'packs',
                'ID': this.itemToEdit.ID
            }, this.itemToEdit).then((data) => {

                if (data != null) {
                    this.itemToEdit = {};
                    this.loadList();
                    this.isAddingItem = true;
                    this.isEditingItem = false;
                }
            });
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


        setEditItem(item) {
            this.itemToEdit = item;
            item.isEditing = true;
        }

        deleteItem(item) {
            console.log(item);
            this.ApiService.callApi('DELETE', {
                'table': 'packs',
                'ID': item.ID
            }).then((data) => {
                console.log(data);
                if (data != null) {
                    console.log("item inséré");
                    this.loadList();
                }
            });
        }

        loadList(minPrix) {
            let queryParams = {
                'table': 'packs'
            }
            if (minPrix != 0) {
                queryParams.filter = minPrix
            }

            this.ApiService.callApi('GET', queryParams).then((data) => {
                this.listObjects = data.packs;
            });
        }
    }
};