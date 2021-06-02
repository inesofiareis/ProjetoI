import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class UserView {
    constructor() {
        this.utilizadorControlador = new utilizadorControlador();

        // registo DOM
        this.nomeUser = document.getElementById('nome');
        this.apelidoUser = document.getElementById('apelido');
        this.utilizador = document.getElementById('nomeUtilizadorR');
        this.emailUser = document.getElementById('email');
        this.passwordUser = document.getElementById('password');
        this.passwordUser2 = document.getElementById('confirmarPassword');
        this.nascimento = document.getElementById('dataNascimento');
        this.genero = document.getElementById('genero').checked;
        this.registoBotao = document.getElementById('registar');
        
        this.verificarRegisto();
    }

    verificarRegisto() {
        this.registoBotao.addEventListener('click', () => {

            try {
                if (this.passwordUser.value !== this.passwordUser2.value) {
                    throw Error('As passswords não são iguais');
                }
                this.utilizadorControlador.registar(this.nomeUser.value, this.apelidoUser.value, this.passwordUser.value, this.utilizador.value, this.emailUser.value, this.passwordUser, this.nascimento, this.genero);
                this.displayMessage('Registo efetuado com sucesso!', 'success');
            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });
    }


    // checkLoginStatus() {
    //     if (this.userController.isLogged()) {
    //         this.updateButtons('login');
    //     }
    //     // } else {
    //     //     this.updateButtons('logout');
    //     // }
    // }

    // displayMessage(message, type) {
    //     this.messages.innerHTML =
    //         `<div class="alert alert-${type}" role="alert">${message}</div>`;
    // }
}