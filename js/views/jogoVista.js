import jogosController from '../controllers/jogoControlador.js';
import utilizadorControlador from '../controllers/utilizadorControlador.js';

export default class jogoVista{
    constructor() {
        this.jogoControlador = new jogosController();
        this.utilizadorControlador = new utilizadorControlador()

        this.catalogoJogos = document.querySelector('#catalogoJogos');
        this.catalogoJogo(this.jogoControlador.getJogos());
        this.gerarCardJogo();

        this.vicularMostrarJogo()
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
                
                <div class="card-body" style="width:20rem;">
                    <img src="${jogo.foto}" class="card-img-top">
                    <h4 class="card-title">${jogo.nome}</h4>
                    <p class="card-text">${jogo.genero}</p>
                    <button id="${jogo.nome}" class="btn btn-primary jogar">Jogar</button>
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

    vicularMostrarJogo() {
        console.log('ola')
        for (const btnJogar of document.querySelectorAll(".jogar")) {
            btnJogar.addEventListener('click', event => {
                alert('ola')
                this.jogosController.setJogoAtual(event.target.id)
                location.href = '../html/jogo-detalhe.html';
            })
        }
    }
}