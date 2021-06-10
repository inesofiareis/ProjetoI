import jogoControlador from '../controllers/jogoControlador.js';
import utilizadorControlador from '../controllers/utilizadorControlador.js';
import generoVista from './generoVista.js'

export default class jogoVista{
    constructor() {
        this.jogoControlador = new jogoControlador();
        this.utilizadorControlador = new utilizadorControlador()
        // this.generoVista = new generoVista()

        this.catalogoJogos = document.querySelector('#catalogoJogos');
        this.catalogoJogo(this.jogoControlador.getJogos());

        //filtros
        this.btnsFiltro = document.querySelectorAll('.botaoFiltrar')
        this.filtrar() 
        
        this.txtJogos = document.querySelector('#textoJogos');

        this.vicularMostrarJogo()
        this.textoJogo()
    }

    filtrar(){
        for (let btnFiltro of this.btnsFiltro){
                btnFiltro.addEventListener('click', () => {
                    this.catalogoJogo(this.jogoControlador.getJogos(btnFiltro.id))
            })
        }
    }

    catalogoJogo(jogos = []) {
        let divisao = '<div class="row row-cols-2">';
        for (const jogo of jogos) {
            divisao += this.gerarCardJogo(jogo);
        }

        divisao += '</div>'
        this.catalogoJogos.innerHTML = divisao
    }

    gerarCardJogo(jogo) {
        let resultado = `
        <div class="col">
            <div class="card">
                <div class="card-body" style="width:20rem;">
                    <img src="${jogo.foto}" class="card-img-top" style="height: 20rem">
                    <h4 class="card-title">${jogo.nome}</h4>
                    <p class="card-text">${jogo.genero}</p>
                    <button id="${jogo.nome}" class="btn btn-primary jogar">Jogar</button>
            `
        if (this.utilizadorControlador.admin()) {
            resultado += `<button id="${jogo.nome}" class="btn btn-danger remove">Remove</button>`
        }

        resultado += `
                </div>
            </div>
        </div>        
        `
        return resultado
    }

    vicularMostrarJogo() {
        for (const btnJogar of document.querySelectorAll(".jogar")) {
            btnJogar.addEventListener('click', event => {
                this.jogoControlador.setJogoAtual(event.target.id)
                location.href = '../html/jogo-detalhe.html';
            })
        }
    }

    textoJogo(){
        let texto = this.generoVista.textoJogo();
        this.txtJogos.innerHTML = texto;
    }
}