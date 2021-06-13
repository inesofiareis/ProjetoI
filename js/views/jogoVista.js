import jogoControlador from '../controllers/jogoControlador.js';
import utilizadorControlador from '../controllers/utilizadorControlador.js';

export default class jogoVista{
    constructor() {
        this.jogoControlador = new jogoControlador();
        this.utilizadorControlador = new utilizadorControlador()

        this.botaoAdicionarJogo = document.querySelector('#botaoAdicionar')
        this.adicionarJogoFormulario()

        //filtros
        this.btnsFiltro = document.querySelectorAll('.botaoFiltrar')
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
            this.botaoAdicionarJogo.style.visibility = 'visible'
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

    //criar novo jogo

    adicionarJogoFormulario(){
        this.botaoAdicionarJogo.addEventListener('click', () => {
            //cabeçalho do jogo
            this.catalogoJogos.innerHTML = `<div class="row cabeçalhoJogo"> 
                                                <div>
                                                    <div>
                                                        <label class="form-label" for="nomeJogo">Nome do jogo:</label>
                                                        <input class="form-control" type="text" name="nomeJogo" id="nomeJogo">
                                                    </div>
                                                    <div>
                                                        <label class="form-label" for="imgJogo">Imagem do jogo:</label>
                                                        <input class="form-control" type="text" name="imgJogo" id="imgJogo">
                                                    </div>
                                                    <div>
                                                        <label class="form-label" for="descricao">Descrição</label>
                                                        <br>
                                                        <textarea class="form-control" name="descricao" id="descricao" cols="40" rows="2"></textarea>
                                                    </div>
                                                    <div>
                                                        <label class="form-label" for="genero">Genero:</label>
                                                        <select name="genero" id="genero">
                                                            <option value="">-- Seleciona um genero --</option>
                                                            <option value="Questionários">Questionários</option>
                                                            <option value="Preencher espaços">Preencher espaços</option>
                                                            <option value="Jogo da memória">Jogo da memória</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='informacaoJogo'>
                                                <input class="btn btn-danger" type="button" value="Cancelar" id='cancelarAdicao'>    
                                            </div>`

            //nome
            this.nomeJogo = document.querySelector('#nomeJogo')

            //imagem
            this.imgJogo = document.querySelector('#imgJogo')

            //descrição
            this.descricao = document.querySelector('#descricao')

            //genero
            this.generoJogo = document.querySelector('#genero')

            this.informacaoJogo = document.querySelector('.informacaoJogo')
            this.adicionarJogoGenero()

            this.botaoCancelar = document.querySelector('#cancelarAdicao')
            this.cancelarAdicao()
        })
    }

    adicionarJogoGenero(){
        this.generoJogo.addEventListener('change', () => {
            if(this.generoJogo.value == 'Questionários'){
                this.adicionarJogoQuestionario()
            }
        })
    }

    adicionarJogoQuestionario(){
        this.informacaoJogo.innerHTML = `<div class="row perguntasRespostas">
                                            <form>
                                                <fieldset>
                                                    <div class='row'>
                                                        <div class='col'>
                                                            <div>
                                                                <label class="form-label" for="pergunta1">Primeira pergunta:</label>
                                                                <input class="form-control" type="text" name="pergunta1" id="pergunta1" placeholder="Primeira pergunta">
                                                            </div>
                                                            <div>
                                                                <label class="form-label" for="alternativas">Alternativas:</label>
                                                                <input class="form-control alternativa1" type="text" name="alternativa1" placeholder="Primeira alternativa">
                                                                <input class="form-control alternativa1" type="text" name="alternativa2" placeholder="Segunda alternativa">
                                                                <input class="form-control alternativa1" type="text" name="alternativa3" placeholder="Terceira alternativa">
                                                                <input class="form-control alternativa1" type="text" name="alternativa4" placeholder="Quarta alternativa">
                                                            </div>
                                                            <div>
                                                                <label class="form-label" for="resposta1">Resposta certa:</label>
                                                                <select name="resposta1" id="resposta1">
                                                                    <option value="">-- Seleciona a alternativa correta --</option>
                                                                    <option value="alternativa1">Primeira alternativa</option>
                                                                    <option value="alternativa2 espaços">Segunda alternativa</option>
                                                                    <option value="alternativa3">Terceira alternativa</option>
                                                                    <option value="alternativa4">Quarta alternativa</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class='col'>
                                                            <div>
                                                                <label class="form-label" for="pergunta2">Segunda pergunta:</label>
                                                                <input class="form-control" type="text" name="pergunta2" id="pergunta2" placeholder="Segunda pergunta">
                                                            </div>
                                                            <div>
                                                                <label class="form-label" for="alternativas">Alternativas:</label>
                                                                <input class="form-control alternativa2" type="text" name="alternativa1" placeholder="Primeira alternativa">
                                                                <input class="form-control alternativa2" type="text" name="alternativa2" placeholder="Segunda alternativa">
                                                                <input class="form-control alternativa2" type="text" name="alternativa3" placeholder="Terceira alternativa">
                                                                <input class="form-control alternativa2" type="text" name="alternativa4" placeholder="Quarta alternativa">
                                                            </div>
                                                            <div>
                                                                <label class="form-label" for="resposta2">Resposta certa:</label>
                                                                <select name="resposta2" id="resposta2">
                                                                    <option value="">-- Seleciona a alternativa correta --</option>
                                                                    <option value="alternativa1">Primeira alternativa</option>
                                                                    <option value="alternativa2 espaços">Segunda alternativa</option>
                                                                    <option value="alternativa3">Terceira alternativa</option>
                                                                    <option value="alternativa4">Quarta alternativa</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                    <div class='row'>
                                                        <div class='col'>
                                                            <div>
                                                                <label class="form-label" for="pergunta3">Terceira pergunta:</label>
                                                                <input class="form-control" type="text" name="pergunta3" id="pergunta3" placeholder="Terceira pergunta">
                                                            </div>
                                                            <div>
                                                                <label class="form-label" for="alternativas">Alternativas:</label>
                                                                <input class="form-control alternativa3" type="text" name="alternativa1" placeholder="Primeira alternativa">
                                                                <input class="form-control alternativa3" type="text" name="alternativa2" placeholder="Segunda alternativa">
                                                                <input class="form-control alternativa3" type="text" name="alternativa3" placeholder="Terceira alternativa">
                                                                <input class="form-control alternativa3" type="text" name="alternativa4" placeholder="Quarta alternativa">
                                                            </div>
                                                            <div>
                                                                <label class="form-label" for="resposta3">Resposta certa:</label>
                                                                <select name="resposta3" id="resposta3">
                                                                    <option value="">-- Seleciona a alternativa correta --</option>
                                                                    <option value="alternativa1">Primeira alternativa</option>
                                                                    <option value="alternativa2 espaços">Segunda alternativa</option>
                                                                    <option value="alternativa3">Terceira alternativa</option>
                                                                    <option value="alternativa4">Quarta alternativa</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class='col'>
                                                            <div>
                                                                <label class="form-label" for="pergunta4">Quarta pergunta:</label>
                                                                <input class="form-control" type="text" name="pergunta4" id="pergunta4" placeholder="Quarta pergunta">
                                                            </div>
                                                            <div>
                                                                <label class="form-label" for="alternativas">Alternativas:</label>
                                                                <input class="form-control alternativa4" type="text" name="alternativa1" placeholder="Primeira alternativa">
                                                                <input class="form-control alternativa4" type="text" name="alternativa2" placeholder="Segunda alternativa">
                                                                <input class="form-control alternativa4" type="text" name="alternativa3" placeholder="Terceira alternativa">
                                                                <input class="form-control alternativa4" type="text" name="alternativa4" placeholder="Quarta alternativa">
                                                            </div>
                                                            <div>
                                                                <label class="form-label" for="resposta4">Resposta certa:</label>
                                                                <select name="resposta4" id="resposta4">
                                                                    <option value="">-- Seleciona a alternativa correta --</option>
                                                                    <option value="alternativa1">Primeira alternativa</option>
                                                                    <option value="alternativa2 espaços">Segunda alternativa</option>
                                                                    <option value="alternativa3">Terceira alternativa</option>
                                                                    <option value="alternativa4">Quarta alternativa</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                    <div class='row'>
                                                        <div class='col-sm-6'>
                                                            <div>
                                                                <label class="form-label" for="pergunta5">Quinta pergunta:</label>
                                                                <input class="form-control" type="text" name="pergunta5" id="pergunta5" placeholder="Quinta pergunta">
                                                            </div>
                                                            <div>
                                                                <label class="form-label" for="alternativas">Alternativas:</label>
                                                                <input class="form-control alternativa5" type="text" name="alternativa1" placeholder="Primeira alternativa">
                                                                <input class="form-control alternativa5" type="text" name="alternativa2" placeholder="Segunda alternativa">
                                                                <input class="form-control alternativa5" type="text" name="alternativa3" placeholder="Terceira alternativa">
                                                                <input class="form-control alternativa5" type="text" name="alternativa4" placeholder="Quarta alternativa">
                                                            </div>
                                                            <div>
                                                                <label class="form-label" for="resposta5">Resposta certa:</label>
                                                                <select name="resposta5" id="resposta5">
                                                                    <option value="">-- Seleciona a alternativa correta --</option>
                                                                    <option value="alternativa1">Primeira alternativa</option>
                                                                    <option value="alternativa2 espaços">Segunda alternativa</option>
                                                                    <option value="alternativa3">Terceira alternativa</option>
                                                                    <option value="alternativa4">Quarta alternativa</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>

                                                <div class="row">
                                                    <div class="col-2">
                                                        <input class="btn btn-danger" type="button" value="Cancelar" id='cancelarAdicao'>
                                                    </div>
                                                    <div class="col"></div>
                                                    <div class="col-2">
                                                        <input class="btn btn-success" type="button" value="Confirmar" id='confirmar'>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>`
        
        this.botaoCancelar = document.querySelector('#cancelarAdicao')
        this.cancelarAdicao()

        //primeira pergunta
        this.pergunta1 = document.querySelector('#pergunta1')
        this.alternativa1 = document.querySelectorAll('.alternativa1')
        this.resposta1 = document.querySelector('#resposta1')

        //segunda pergunta
        this.pergunta2 = document.querySelector('#pergunta2')
        this.alternativa2 = document.querySelectorAll('.alternativa2')
        this.resposta2 = document.querySelector('#resposta2')

        //terceira pergunta
        this.pergunta3 = document.querySelector('#pergunta3')
        this.alternativa3 = document.querySelectorAll('.alternativa3')
        this.resposta3 = document.querySelector('#resposta3')

        //quarta pergunta
        this.pergunta4 = document.querySelector('#pergunta4')
        this.alternativa4 = document.querySelectorAll('.alternativa4')
        this.resposta4 = document.querySelector('#resposta4')

        //quinta pergunta
        this.pergunt5 = document.querySelector('#pergunta5')
        this.alternativa5 = document.querySelectorAll('.alternativa5')
        this.respost5 = document.querySelector('#resposta5')

        this.botaoConfirmarQuestionario = document.querySelector('#confirmar')
        this.confirmarQuestionario()
    }


    cancelarAdicao(){
        this.botaoCancelar.addEventListener('click', () => {
            location.reload()
        })
    }

    confirmarQuestionario(){
        this.botaoConfirmarQuestionario.addEventListener('click', () => {
            this.jogoControlador.novoJogoQuestionario(this.nomeJogo.value, this.imgJogo.value, this.descricao.value, this.generoJogo.value, this.pergunta1.value, this.alternativa1, this.resposta1.value, this.pergunta2.value, this.alternativa2, this.resposta2.value, this.pergunta3.value, this.alternativa3, this.resposta3.value, this.pergunta4.value, this.alternativa4, this.resposta4.value, this.pergunt5.value, this.alternativa5, this.respost5.value)
        })
    }
}