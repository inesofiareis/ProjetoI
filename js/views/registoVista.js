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
        this.genero = document.querySelectorAll('input[name="genero"]');
        this.registoBotao = document.getElementById('registar');
        
        this.verificarRegisto();
    }

    verificarRegisto() {
        this.registoBotao.addEventListener('click', event => {
            
            try {  
                if (this.passwordUser.value !== this.passwordUser2.value) {
                    alert('Erro')
                    throw Error('As passswords não são iguais');
                }
                for (let i = 0; i < this.genero.length; i++){
                    if (this.genero[i].checked){
                        this.utilizadorControlador.registar(this.nomeUser.value, this.apelidoUser.value, this.utilizador.value, this.emailUser.value, this.passwordUser.value, this.nascimento.value, this.genero[i].value);
                        location.href = '../html/inicio.html'
                        // this.displayMessage('Registo efetuado com sucesso!', 'success');
                    }
                } 
            } catch (e) {
                // this.displayMessage(e, 'danger');
            }

            event.preventDefault()
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