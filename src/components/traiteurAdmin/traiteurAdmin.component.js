import template from './traiteurAdmin.html';

export let TraiteurAdminComponent = {
    templateUrl: template,
    selector: 'traiteurAdmin',
    bindings: {},
    /* @ngInject */
    controller: class TraiteurAdminCtrl {
        /* @ngInject */
        constructor($state, $scope, ApiService, loginService) {
            // TODO - constructor arguments that should be available on "this"
            // should be added to the assign object
            Object.assign(this, {
                $state
            });
            this.loginService = loginService;
            if (!this.loginService.getLogged()) {
                this.$state.go('traiteur', {
                    typeList: 0
                });
            }
            this.itemToAdd = {};
            this.isAddingItem = true;

            this.ApiService = ApiService;
            this.loadList();

             $scope.$watch(() => {
                return this.itemToAdd.image;
            }, () => {
                var reader = new FileReader();

                reader.onload = (readerEvt) => {
                    var binaryString = readerEvt.target.result;
                    console.log(btoa(binaryString));
                    this.itemToAdd.image_url = btoa(binaryString);
                };

                reader.readAsBinaryString(this.itemToAdd.image);

            });

            $scope.$watch(() => {
                return this.itemToEdit.image;
            }, () => {
                var reader = new FileReader();

                reader.onload = (readerEvt) => {
                    var binaryString = readerEvt.target.result;
                    console.log(btoa(binaryString));
                    this.itemToEdit.image_url = btoa(binaryString);
                };

                reader.readAsBinaryString(this.itemToEdit.image);

            });

        }

        addItem() {
            this.ApiService.callApi('POST', {
                'table': 'traiteur'
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
                'table': 'traiteur',
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
                'table': 'traiteur',
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
                'table': 'traiteur'
            }).then((data) => {
                this.listObjects = data.traiteur;
            });
        }
    }
};