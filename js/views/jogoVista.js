import jogosController from '../controllers/jogoControlador.js';
import utilizadorControlador from '../controllers/utilizadorControlador.js';

export default class jogoVista{
    constructor() {
        this.jogoControlador = new jogosController();

        this.catalogoJogos = document.querySelector('#catalogoJogos');
        this.catalogoJogo(this.jogoControlador.getJogos());
        this.gerarCardJogo();

        
    }

    catalogoJogo(jogos = []) {
        let divisao = '<div class="row row-cols-3">';
        for (const jogo of jogos) {
            divisao += this.gerarCardJogo(jogo);
        }

        divisao += '</div>'
        this.catalogoJogos.innerHTML = divisao
           
    }
    gerarCardJogo(jogo) {
        let html = `
        <div class="col">
            <div class="card">
                
                <div class="card-body">
                    <h4 class="card-title">${jogo.nome}</h4>
                    <p class="card-text">${jogo.genero}</p>
                    <button id="${jogo.nome}" class="btn btn-primary see">Jogar</button>
            `
        if (this.utilizadorControlador.admin()) {
            html += `<button id="${jogo.nome}" class="btn btn-danger remove">Remove</button>`
        }

        html += `
                </div>
            </div>
        </div>        
        `
        return html
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

// jogo novo// registo DOM nome do jogo, perguntas, resposta correta, 
        // this.nomeJogo = document.getElementById('nome');
        // this.pergunta = document.getElementById('dataNascimento');
        // this.primeiraOpcao = document.getElementById('apelido');
        // this.segundaOpacao = document.getElementById('nomeUtilizadorR');
        // this.terceiraOpcao = document.getElementById('email');
        // this.quartaOpcao = document.getElementById('password');
        // this.opcaoCorreta = document.getElementById('confirmarPassword');
        
        // this.concluidoBotao = document.getElementById('registar');

        // this.mensagem = document.querySelector('#mensagem')
        // this.novoJogo();