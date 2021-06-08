import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class UtilizadorVista {
    constructor() {
        this.utilizadorControlador = new utilizadorControlador();

        // registo DOM
        this.nomeUtilizador = document.getElementById('nome');
        this.apelidoUtilizador = document.getElementById('apelido');
        this.utilizador = document.getElementById('nomeUtilizadorR');
        this.emailUtilizador = document.getElementById('email');
        this.palavraPasseUtilizador = document.getElementById('password');
        this.palavraPasseUtilizador2 = document.getElementById('confirmarPassword');
        this.nascimento = document.getElementById('dataNascimento');
        this.genero = document.querySelectorAll('input[name="genero"]');
        this.registoBotao = document.getElementById('registar');

        this.mensagem = document.querySelector('#mensagem')
        this.verificarRegisto();
    }

    verificarRegisto() {
        this.registoBotao.addEventListener('click', event => {
            try { 
                if (this.palavraPasseUtilizador.value !== this.palavraPasseUtilizador2.value) {
                    throw Error('As passswords não são iguais');
                }
                
                for (let i = 0; i < this.genero.length; i++){
                    if (this.genero[i].checked){
                        this.utilizadorControlador.registar(this.nomeUtilizador.value, this.apelidoUtilizador.value, this.utilizador.value, this.emailUtilizador.value, this.palavraPasseUtilizador.value, this.nascimento.value, this.genero[i].value);
                        location.href = '../html/inicio.html'
                    }
                } 
            } catch (e) {
                mensagem.innerHTML = `<div class="alert alert-danger" role="alert">${e}</div>`
            }

            event.preventDefault()
        });
    }
}