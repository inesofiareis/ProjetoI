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

    gerarJogoEspaços(jogo){
        // let perguntas = this.jogoControlador.perguntasJogo()
        // let respostas = this.jogoControlador.respostasJogo()

        console.log(jogo.perguntasErespostas[0].alternativas[0][0])

        this.posJogo.innerHTML = `<h1 class="display-4">Vê o que aprendeste!</h1>
        <h3 class="perguntaUm">${jogo.perguntasErespostas[0].perguntas[0]}</h3>
        <input type="radio" name="questaoUm" id="corretaUm" class="opcaoUm">${jogo.perguntasErespostas[0].alternativas[0][0]}<br>
        <input type="radio" name="questaoUm" class="opcaoDois">${jogo.perguntasErespostas[0].alternativas[0][1]}<br>
        <input type="radio" name="questaoUm" class="opcaoTres">${jogo.perguntasErespostas[0].alternativas[0][2]}<br>
        <input type="radio" name="questaoUm" class="opcaoQuatro">${jogo.perguntasErespostas[0].alternativas[0][3]}<br>
    
        <h3 class="perguntaDois">${jogo.perguntasErespostas[0].perguntas[1]}</h3>
        <input type="radio" name="questaoDois" class="opcaoUm">${jogo.perguntasErespostas[0].alternativas[1][0]} <br>
        <input type="radio" name="questaoDois" class="opcaoDois">${jogo.perguntasErespostas[0].alternativas[1][1]} <br>
        <input type="radio" name="questaoDois" id="corretaDois" class="opcaoTres">${jogo.perguntasErespostas[1].alternativas[0][2]} <br>
        <input type="radio" name="questaoDois" class="opcaoQuatro">${jogo.perguntasErespostas[0].alternativas[1][3]} <br>
    
        <h3 class="perguntaTres">${jogo.perguntasErespostas[0].perguntas[2]}</h3>
        <input type="radio" name="question3" class="opcaoUm">${jogo.perguntasErespostas[0].alternativas[2][0]} <br>
        <input type="radio" name="question3" id="corretaDois" class="opcaoDois">${jogo.perguntasErespostas[0].alternativas[2][1]} <br>
        <input type="radio" name="question3" class="opcaoTres">${jogo.perguntasErespostas[0].alternativas[2][2]} <br>
        <input type="radio" name="question3" class="opcaoQuatro">${jogo.perguntasErespostas[0].alternativas[0][3]} <br>
    
        <h3 class="perguntaQuatro">${jogo.perguntasErespostas[0].perguntas[3]}</h3>
        <input type="radio" name="question3" class="opcaoUm">${jogo.perguntasErespostas[0].alternativas[3][0]} <br>
        <input type="radio" name="question3" id="corretaTres" class="opcaoDois">${jogo.perguntasErespostas[0].alternativas[0][1]} <br>
        <input type="radio" name="question3" class="opcaoTres">${jogo.perguntasErespostas[0].alternativas[3][2]} <br>
        <input type="radio" name="question3" class="opcaoQuatro">${jogo.perguntasErespostas[0].alternativas[3][3]} <br>
    
        <h3 class="perguntaCinco">${jogo.perguntasErespostas[0].perguntas[4]}</h3>
        <input type="radio" name="question3" class="opcaoUm">${jogo.perguntasErespostas[0].alternativas[4][0]} <br>
        <input type="radio" name="question3" id="corretaQuatro" class="opcaoDois">${jogo.perguntasErespostas[0].alternativas[4][1]} <br>
        <input type="radio" name="question3" class="opcaoTres">${jogo.perguntasErespostas[0].alternativas[4][2]} <br>
        <input type="radio" name="question3" class="opcaoQuatro">${jogo.perguntasErespostas[0].alternativas[4][3]} <br>
    
        <input type="submit" name="submit" value="Diz-me a pontuação!" onClick="resultado()">`
    }

    jogo() {
        let jogo = this.jogoControlador.getJogoAtual();
        if(jogo.genero == 'Preencher espaços') {
            this.posJogo += this.gerarJogoEspaços(jogo);
        }else if(jogo ==''){

        }else if(jogo == ''){

        }else{

        }
    }

}