import jogosController from '../controllers/jogoControlador.js';

export default class UserVista {
    constructor() {
        this.jogoControlador = new jogosController();

        // registo DOM nome do jogo, perguntas, resposta correta, 
        this.nomeJogo = document.getElementById('nome');
        this.pergunta = document.getElementById('dataNascimento');
        this.primeiraOpcao = document.getElementById('apelido');
        this.segundaOpacao = document.getElementById('nomeUtilizadorR');
        this.terceiraOpcao = document.getElementById('email');
        this.quartaOpcao = document.getElementById('password');
        this.opcaoCorreta = document.getElementById('confirmarPassword');
        
        this.concluidoBotao = document.getElementById('registar');

        this.mensagem = document.querySelector('#mensagem')
        this.novoJogo();

        // novoJogo() {
        //     // Junta toda a informação que a passa para o controller :)
        // }
    }

    // verificarRegisto() {
    //     this.registoBotao.addEventListener('click', event => {
            
    //         try {  
    //             if (this.palavraPasseUser.value !== this.palavraPasseUser2.value) {
    //                 throw Error('As passswords não são iguais');
    //             }
    //             for (let i = 0; i < this.genero.length; i++){
    //                 if (this.genero[i].checked){
    //                     this.utilizadorControlador.registar(this.nomeUtilizador.value, this.apelidoUtilizador.value, this.utilizador.value, this.emailUtilizador.value, this.palavraPasseUtilizador.value, this.nascimento.value, this.genero[i].value);
    //                     location.href = '../html/inicio.html'
    //                 }
    //             } 
    //         } catch (e) {
    //             mensagem.innerHTML = `<div class="alert alert-danger" role="alert">${e}</div>`
    //         }

    //         event.preventDefault()
    //     });
    // }
}