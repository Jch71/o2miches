export default class PopinLoginController {

    constructor($state, $scope, loginService) {
        this.$state = $state;
        this.$scope = $scope;
        this.loginService = loginService;
        this.formError = false;
    }
    submitLogin() {
        if (this.loginService.doLogin(this.login)) {

            this.formError = false;
            this.$state.go('produitsAdmin');
            this.$scope.$close();
        } else {
            this.formError = true;
        }

    }
}

PopinLoginController.$inject = ['$state', '$scope', 'loginService'];