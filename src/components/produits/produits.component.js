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
            this.listObjects = [{
                id: 1,
                text: "toto"
            }, {
                id: 2,
                text: "titi"
            }, {
                id: 3,
                text: "tutu"
            }];
            this.itemToAdd = {};
            this.isAddingItem = true;

            this.ApiService = ApiService;
            this.loadList(this.$stateParams.typeList);



        }

        addItem() {
            this.ApiService.callApi('POST', {
                'table': 'produits'
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
                'table': 'produits',
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
                    text = "type 1";
                    break;
                case 2:
                    text = "type 2";
                    break;
                case 3:
                    text = "type 3";
                    break;
                case 4:
                    text = "type 4";
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
                'table': 'produits',
                'ID': item.ID
            }).then((data) => {
                console.log(data);
                if (data != null) {
                    console.log("item inséré");
                    this.loadList();
                }
            });
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