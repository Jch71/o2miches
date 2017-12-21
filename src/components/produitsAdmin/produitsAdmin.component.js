import template from './produitsAdmin.html';

export let ProduitsAdminComponent = {
    templateUrl: template,
    selector: 'produitsAdmin',
    bindings: {},
    /* @ngInject */
    controller: class ProduitsAdminCtrl {
        /* @ngInject */
        constructor($state, $scope, ApiService, loginService) {
            // TODO - constructor arguments that should be available on "this"
            // should be added to the assign object
            Object.assign(this, {
                $state
            });
            this.loginService = loginService;
            if (!this.loginService.getLogged()) {
                this.$state.go('produits', {
                    typeList: 0
                });
            }
            this.itemToAdd = {};
            this.isAddingItem = true;

            this.ApiService = ApiService;
            this.loadList();

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

        loadList() {
            this.ApiService.callApi('GET', {
                'table': 'produits'
            }).then((data) => {
                this.listObjects = data.produits;
            });
        }
    }
};