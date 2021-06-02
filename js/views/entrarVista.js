import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class UserView {
    constructor() {
        this.userController = new UserController();

        // login DOM
        this.utilizadorLogin = document.getElementById('nomeUtilizador');
        this.passwordLogin = document.getElementById('passwordLogin');
        this.loginBotao = document.getElementById('entrar');
        this.verificarLogin();

        // this.messages = document.querySelector('#messages')
        // this.checkLoginStatus();
    }

    verificarLogin() {
        this.loginBotao.addEventListener('click', () => {
            try {
                this.userController.login(this.utilizadorLogin.value, this.passwordLogin.value);
                this.displayMessage('Login efetuado com sucesso!', 'success');

                // Wait 1 second before reloading, so the user can see the login success message
                setTimeout(() => {
                    this.updateButtons('login');
                    location.reload()
                },
                    1000);

            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });

        // this.logoutButton.addEventListener('click', () => {
        //     this.userController.logout();
        //     this.updateButtons('logout');
        //     location.reload()
        // });
    }



    checkLoginStatus() {
        if (this.userController.isLogged()) {
            this.updateButtons('login');
        }
        // } else {
        //     this.updateButtons('logout');
        // }
    }

    // displayMessage(message, type) {
    //     this.messages.innerHTML =
    //         `<div class="alert alert-${type}" role="alert">${message}</div>`;
    // }
}