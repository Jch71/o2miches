export default class LoginService {
    constructor() {
        this.isLogged = false;
    }

    doLogin(login) {
        if (login.login == "admin" && login.password == "admin") {
            this.isLogged = true;
            return true;
        } else
            return false;
    }

    getLogged() {
        return this.isLogged;
    }
}