import template from './packsAdmin.html';

export let PacksAdminComponent = {
    templateUrl: template,
    selector: 'packsAdmin',
    bindings: {},
    /* @ngInject */
    controller: class PacksAdminCtrl {
        /* @ngInject */
        constructor($state, $scope, ApiService, loginService) {
            // TODO - constructor arguments that should be available on "this"
            // should be added to the assign object
            Object.assign(this, {
                $state
            });
            this.loginService = loginService;
            if (!this.loginService.getLogged()) {
                this.$state.go('packs', {
                    typeList: 0
                });
            }
            this.itemToAdd = {};
            this.isAddingItem = true;

            this.ApiService = ApiService;
            this.loadList();

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

        loadList() {
            this.ApiService.callApi('GET', {
                'table': 'packs'
            }).then((data) => {
                this.listObjects = data.packs;
            });
        }
    }
};