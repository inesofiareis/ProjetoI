import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class UtilizadorVista {
    constructor() {
        this.utilizadorControlador = new utilizadorControlador();

        // login DOM
        this.utilizadorLogin = document.getElementById('nomeUtilizador');
        this.palavraPasseLogin = document.getElementById('passwordLogin');
        this.loginBotao = document.getElementById('entrar');
        this.mensagem = document.querySelector('#mensagem')
        this.verificarLogin();

        // this.messages = document.querySelector('#messages')
        // this.checkLoginStatus();
    }

    verificarLogin() {
        this.loginBotao.addEventListener('click', event => {

            try {
                this.utilizadorControlador.login(this.utilizadorLogin.value, this.palavraPasseLogin.value);
                location.href = '../html/inicio.html'
            } 
            catch (e) {
                mensagem.innerHTML = `<div class="alert alert-danger" role="alert">${e}</div>`
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
}