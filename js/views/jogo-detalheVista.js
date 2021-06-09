import jogoControlador from '../controllers/jogoControlador.js';

export default class JogosDetalhes {
    constructor(){
        this.jogoControlador = new jogoControlador()

        this.posJogo = document.querySelector(".caixaJogos");
        this.jogo()   



        let jogo = this.jogoControlador.getJogoAtual();

        //alimentar a pagina

        document.querySelector('.nomeJogo').innerHTML = jogo.nome;
        document.querySelector('.descJogo').innerHTML = jogo.descricao;
    }

    gerarJogoEspaços(){
        this.posJogo.innerHTML = `<h1 class="display-4">Vê o que aprendeste!</h1>
        <h3 class="perguntaUm">${}</h3>
        <input type="radio" name="questaoUm" id="corretaUm" class="opcaoUm">${}<br>
        <input type="radio" name="questaoUm" class="opcaoDois">${}<br>
        <input type="radio" name="questaoUm" class="opcaoTres">${}<br>
        <input type="radio" name="questaoUm" class="opcaoQuatro">${}<br>
    
        <h3 class="perguntaDois">${}</h3>
        <input type="radio" name="questaoDois" class="opcaoUm">${} <br>
        <input type="radio" name="questaoDois" class="opcaoDois">${} <br>
        <input type="radio" name="questaoDois" id="corretaDois" class="opcaoTres">${} <br>
        <input type="radio" name="questaoDois" class="opcaoQuatro">${} <br>
    
        <h3 class="perguntaTres">${}</h3>
        <input type="radio" name="question3" class="opcaoUm">${} <br>
        <input type="radio" name="question3" id="corretaDois" class="opcaoDois">${} <br>
        <input type="radio" name="question3" class="opcaoTres">${} <br>
        <input type="radio" name="question3" class="opcaoQuatro">${} <br>
    
        <h3 class="perguntaQuatro">${}</h3>
        <input type="radio" name="question3" class="opcaoUm">${} <br>
        <input type="radio" name="question3" id="corretaTres" class="opcaoDois">${} <br>
        <input type="radio" name="question3" class="opcaoTres">${} <br>
        <input type="radio" name="question3" class="opcaoQuatro">${} <br>
    
        <h3 class="perguntaCinco">${}</h3>
        <input type="radio" name="question3" class="opcaoUm">${} <br>
        <input type="radio" name="question3" id="corretaQuatro" class="opcaoDois">${} <br>
        <input type="radio" name="question3" class="opcaoTres">${} <br>
        <input type="radio" name="question3" class="opcaoQuatro">${} <br>
    
        <input type="submit" name="submit" value="Diz-me a pontuação!" onClick="resultado()">`
    }

    jogo() {
        //let jogo = this.jogoControlador.jogoSelecionado();
        let jogo = 'Preencher espaços'
        if(jogo == 'Preencher espaços') {
            this.posJogo += this.gerarJogoEspaços();
        }else if(jogo ==''){

        }else if(jogo == ''){

        }else{

        }
    }

}