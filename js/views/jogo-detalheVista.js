import jogoControlador from '../controllers/jogoControlador.js';

export default class JogosDetalhes {
    constructor(){
        this.jogoControlador = new jogoControlador()

        let jogo = this.jogoControlador.getJogoAtual()

        //alimentar a pagina

        document.querySelector('.nomeJogo').innerHTML = jogo.nome
        document.querySelector('.descJogo').innerHTML = jogo.descricao
    }
}