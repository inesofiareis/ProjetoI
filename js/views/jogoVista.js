import jogoControlador from '../controllers/jogoControlador.js';
import utilizadorControlador from '../controllers/utilizadorControlador.js';

export default class jogoVista{
    constructor() {
        this.jogoControlador = new jogoControlador();
        this.utilizadorControlador = new utilizadorControlador()

        this.botaoAdicionar = document.querySelector('#botaoAdicionar')
        this.adicionarJogo()

        //filtros
        this.btnsFiltro = document.querySelectorAll('.botaoAdicionar')
        this.filtrar() 
        
        this.txtJogos = document.querySelector('#textoJogos');
        this.textoJogo()

        this.catalogoJogos = document.querySelector('#catalogoJogos');
        this.catalogoJogo(this.jogoControlador.getJogos());
    }

    /**
     * Função para por o texto do titulo corresponde com o genero do utilizador
     */
    textoJogo(){
        const generoUtilizador = this.utilizadorControlador.getGenero();

        let texto

        if (generoUtilizador == 'Feminino'){
            texto = 'Sê bem-vinda à área de jogos! Explora e diverte-te!';
        }else if(generoUtilizador == 'Masculino'){
            texto = 'Sê bem-vindo à área de jogos! Explora e diverte-te!';
            
        }else{
            texto = 'Sê bem-vinde à área de jogos! Explora e diverte-te!';
        }

        this.txtJogos.innerHTML = texto;
    }

    filtrar(){
        for (let btnFiltro of this.btnsFiltro){
                btnFiltro.addEventListener('click', () => {
                    this.catalogoJogo(this.jogoControlador.getJogos(btnFiltro.id))
            })
        }
    }

    catalogoJogo(jogos = []) {
        //gerir o botão de adicionar jogo
        if (this.utilizadorControlador.admin()){
            this.botaoAdicionar.style.visibility = 'visible'
        }

        //gerar catalogo
        let divisao = '<div class="row row-cols-2">';
        for (const jogo of jogos) {
            divisao += this.gerarCardJogo(jogo);
        }

        divisao += '</div>'
        
        this.catalogoJogos.innerHTML = divisao

        //Gerir botões de vincular um jogo e remover
        this.vicularMostrarJogo()
        this.removerJogo()
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
            resultado += `<button id="${jogo.nome}" class="btn btn-danger remover">Remover</button>`
        }

        resultado += `
                </div>
            </div>
        </div>        
        `
        return resultado
    }

    adicionarJogo(){
        this.botaoAdicionar.addEventListener('click', () => {

        })
    }

    vicularMostrarJogo() {
        for (const btnJogar of document.querySelectorAll(".jogar")) {
            btnJogar.addEventListener('click', event => {
                this.jogoControlador.setJogoAtual(event.target.id)
                location.href = '../html/jogo-detalhe.html';
            })
        }
    }

    removerJogo(){
        for (const btnRemover of document.querySelectorAll('.remover')){
            btnRemover.addEventListener('click', event => {
                this.jogoControlador.removerJogo(event.target.id)
                this.catalogoJogo(this.jogoControlador.getJogos())
            })
        }
    }
}