import jogoControlador from '../controllers/jogoControlador.js';

export default class JogosDetalhes {
    constructor(){
        this.jogoControlador = new jogoControlador()

        this.posJogo = document.querySelector(".caixaJogos");
        this.escolhaUm = document.querySelectorAll('input[name = "respostaUm"]');
        this.escolhaDois = document.querySelectorAll('input[name = "respostaDois"]');
        this.escolhaTres = document.querySelectorAll('input[name = "respostaTres"]');
        this.escolhaQuatro = document.querySelectorAll('input[name = "respostaQuatro"]');
        this.escolhaCinco = document.querySelectorAll('input[name = "respostaCinco"]');
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
        <input type="radio" name="respostaUm" id="corretaUm" class="opcaoUm">${jogo.perguntasErespostas[0].alternativas[0][0]}<br>
        <input type="radio" name="respostaUm" class="opcaoDois">${jogo.perguntasErespostas[0].alternativas[0][1]}<br>
        <input type="radio" name="respostaUm" class="opcaoTres">${jogo.perguntasErespostas[0].alternativas[0][2]}<br>
        <input type="radio" name="respostaUm" class="opcaoQuatro">${jogo.perguntasErespostas[0].alternativas[0][3]}<br>
    
        <h3 class="perguntaDois">${jogo.perguntasErespostas[0].perguntas[1]}</h3>
        <input type="radio" name="respostaDois" class="opcaoUm">${jogo.perguntasErespostas[0].alternativas[1][0]} <br>
        <input type="radio" name="respostaDois" class="opcaoDois">${jogo.perguntasErespostas[0].alternativas[1][1]} <br>
        <input type="radio" name="respostaDois" id="corretaDois" class="opcaoTres">${jogo.perguntasErespostas[1].alternativas[0][2]} <br>
        <input type="radio" name="respostaDois" class="opcaoQuatro">${jogo.perguntasErespostas[0].alternativas[1][3]} <br>
    
        <h3 class="perguntaTres">${jogo.perguntasErespostas[0].perguntas[2]}</h3>
        <input type="radio" name="respostaTres" class="opcaoUm">${jogo.perguntasErespostas[0].alternativas[2][0]} <br>
        <input type="radio" name="respostaTres" id="corretaDois" class="opcaoDois">${jogo.perguntasErespostas[0].alternativas[2][1]} <br>
        <input type="radio" name="respostaTres" class="opcaoTres">${jogo.perguntasErespostas[0].alternativas[2][2]} <br>
        <input type="radio" name="respostaTres" class="opcaoQuatro">${jogo.perguntasErespostas[0].alternativas[0][3]} <br>
    
        <h3 class="perguntaQuatro">${jogo.perguntasErespostas[0].perguntas[3]}</h3>
        <input type="radio" name="respostaQuatro" class="opcaoUm">${jogo.perguntasErespostas[0].alternativas[3][0]} <br>
        <input type="radio" name="respostaQuatro" id="corretaTres" class="opcaoDois">${jogo.perguntasErespostas[0].alternativas[0][1]} <br>
        <input type="radio" name="respostaQuatro" class="opcaoTres">${jogo.perguntasErespostas[0].alternativas[3][2]} <br>
        <input type="radio" name="respostaQuatro" class="opcaoQuatro">${jogo.perguntasErespostas[0].alternativas[3][3]} <br>
    
        <h3 class="perguntaCinco">${jogo.perguntasErespostas[0].perguntas[4]}</h3>
        <input type="radio" name="respostaCinco" class="opcaoUm">${jogo.perguntasErespostas[0].alternativas[4][0]} <br>
        <input type="radio" name="respostaCinco" id="corretaQuatro" class="opcaoDois">${jogo.perguntasErespostas[0].alternativas[4][1]} <br>
        <input type="radio" name="respostaCinco" class="opcaoTres">${jogo.perguntasErespostas[0].alternativas[4][2]} <br>
        <input type="radio" name="respostaCinco" class="opcaoQuatro">${jogo.perguntasErespostas[0].alternativas[4][3]} <br>
    
        <input type="submit" name="submit" value="Diz-me a pontuação!" id="resultado">`

        this.botaoResultado = document.querySelector('#resultado').addEventListener('click', function(){
            for (let i = 0; i < 4; i++){
                if (this.escolhaUm[i].checked){
                    let rUm = this.escolhaUm[i].checked
                }
            
                if (this.escolhaDois[i].checked){
                    let rDois = this.escolhaDois[i].checked
                }
            
                if (this.escolhaTres[i].checked){
                    let rTres = this.escolhaTres[i].checked
                }
            
                if (this.escolhaQuatro[i].checked){
                    let rQuatro = this.escolhaQuatro[i].checked
                }
        
                if (this.escolhaCinco[i].checked){
                    let rCinco = this.escolhaCinco[i].checked
                }
            }

            this.utilizadorControlador.respostaDada(rUm, rDois, rTres, rQuatro, rCinco)

        })
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