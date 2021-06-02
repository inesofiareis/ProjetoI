import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class UserView {
    constructor() {
        this.utilizadorControlador = new utilizadorControlador();

        // login DOM
        this.utilizadorLogin = document.getElementById('nomeUtilizador');
        this.passwordLogin = document.getElementById('passwordLogin');
        this.loginBotao = document.getElementById('entrar');
        this.verificarLogin();

        // this.messages = document.querySelector('#messages')
        // this.checkLoginStatus();
    }

    verificarLogin() {
        this.loginBotao.addEventListener('click', event => {

            try {
                this.utilizadorControlador.login(this.utilizadorLogin.value, this.passwordLogin.value);
                alert('Login efecutado com sucesso')
                location.href = '../html/inicio.html'
                // Wait 1 second before reloading, so the user can see the login success message
                // setTimeout(() => {
                //     this.updateButtons('login');
                //     location.reload()
                // },
                //     1000);

            } 
            catch (e) {
                this.displayMessage(e, 'danger');
            }
            event.preventDefault()
        });
        
    }



    checkLoginStatus() {
        if (this.utilizadorControlador.isLogged()) {
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