import jogoControlador from '../controllers/jogoControlador.js';
import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class JogosDetalhes {
    constructor(){
        this.jogoControlador = new jogoControlador()
        this.utilizadorControlador = new utilizadorControlador()
 
        this.posJogo = document.querySelector(".caixaJogos");

        this.txtJogos = document.querySelector('.textoJogos');  
        this.jogo()   

        let jogo = this.jogoControlador.getJogoAtual();

        //alimentar a pagina

        document.querySelector('.nomeJogo').innerHTML = jogo.nome;
        document.querySelector('.descJogo').innerHTML = jogo.descricao;

        this.confirmar()
    }
    

    gerarJogoQuestionarios(){
        let perguntasErespostas = this.jogoControlador.jogoQuestionario()
        // let respostas = this.jogoControlador.respostasJogo()

        this.posJogo.innerHTML = `<h1 class="display-4">Vê o que aprendeste!</h1>
        <h3 class="perguntaUm">${perguntasErespostas.perguntas[0]}</h3>
        <input type="radio" name="respostaUm" value="${perguntasErespostas.alternativas[0][0]}" class="opcaoUm">${perguntasErespostas.alternativas[0][0]}<br>
        <input type="radio" name="respostaUm" value="${perguntasErespostas.alternativas[0][1]}" class="opcaoDois">${perguntasErespostas.alternativas[0][1]}<br>
        <input type="radio" name="respostaUm" value="${perguntasErespostas.alternativas[0][2]}" class="opcaoTres">${perguntasErespostas.alternativas[0][2]}<br>
        <input type="radio" name="respostaUm" value="${perguntasErespostas.alternativas[0][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[0][3]}<br>
    
        <h3 class="perguntaDois">${perguntasErespostas.perguntas[1]}</h3>
        <input type="radio" name="respostaDois" value="${perguntasErespostas.alternativas[1][0]}" class="opcaoUm">${perguntasErespostas.alternativas[1][0]} <br>
        <input type="radio" name="respostaDois" value="${perguntasErespostas.alternativas[1][1]}" class="opcaoDois">${perguntasErespostas.alternativas[1][1]} <br>
        <input type="radio" name="respostaDois" value="${perguntasErespostas.alternativas[1][2]}" class="opcaoTres">${perguntasErespostas.alternativas[1][2]} <br>
        <input type="radio" name="respostaDois" value="${perguntasErespostas.alternativas[1][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[1][3]} <br>
    
        <h3 class="perguntaTres">${perguntasErespostas.perguntas[2]}</h3>
        <input type="radio" name="respostaTres" value="${perguntasErespostas.alternativas[2][0]}" class="opcaoUm">${perguntasErespostas.alternativas[2][0]} <br>
        <input type="radio" name="respostaTres" value="${perguntasErespostas.alternativas[2][1]}" class="opcaoDois">${perguntasErespostas.alternativas[2][1]} <br>
        <input type="radio" name="respostaTres" value="${perguntasErespostas.alternativas[2][2]}" class="opcaoTres">${perguntasErespostas.alternativas[2][2]} <br>
        <input type="radio" name="respostaTres" value="${perguntasErespostas.alternativas[2][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[2][3]} <br>
    
        <h3 class="perguntaQuatro">${perguntasErespostas.perguntas[3]}</h3>
        <input type="radio" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][0]}" class="opcaoUm">${perguntasErespostas.alternativas[3][0]} <br>
        <input type="radio" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][1]}" class="opcaoDois">${perguntasErespostas.alternativas[3][1]} <br>
        <input type="radio" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][2]}" class="opcaoTres">${perguntasErespostas.alternativas[3][2]} <br>
        <input type="radio" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[3][3]} <br>
    
        <h3 class="perguntaCinco">${perguntasErespostas.perguntas[4]}</h3>
        <input type="radio" name="respostaCinco" value="${perguntasErespostas.alternativas[4][0]}" class="opcaoUm">${perguntasErespostas.alternativas[4][0]} <br>
        <input type="radio" name="respostaCinco" value="${perguntasErespostas.alternativas[4][1]}" class="opcaoDois">${perguntasErespostas.alternativas[4][1]} <br>
        <input type="radio" name="respostaCinco" value="${perguntasErespostas.alternativas[4][2]}" class="opcaoTres">${perguntasErespostas.alternativas[4][2]} <br>
        <input type="radio" name="respostaCinco" value="${perguntasErespostas.alternativas[4][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[4][3]} <br>
    
        <input type="submit" name="submit" value="Diz-me a pontuação!" id="resultado">`
    }
    

    gerarJogoArrastar(){
        this.posJogo.innerHTML = `<div class="jogoDeArrastar">
        <div class="elementosArrastar">
            <div draggable="true"><img src="../../img/jogos/virus.png" id="virusdrop" ondragstart="drag(event)">
            </div>

            <div draggable="true"><img src="../../img/jogos/mascara.pngg" id="virusdrop" ondragstart="drag(event)">
            </div>

            <div draggable="true"><img src="../../img/jogos/alcool.png" id="virusdrop" ondragstart="drag(event)">
            </div>
            
            <div draggable="true"><img src="../../img/jogos/distanciamento.png" id="virusdrop" ondragstart="drag(event)">
            </div>

            <div draggable="true"><img src="../../img/jogos/tobias febre.png" id="virusdrop" ondragstart="drag(event)">
            </div>
        </div>
        <div class="elementoLargar">
            <div data-id="virusdrop" ondrop="drop(event)" ondragover="allowDrop(event)">
                <span>Vírus</span>
            </div>
            <div data-id="mascaradrop" ondrop="drop(event)" ondragover="allowDrop(event)">
                <span>Máscara</span>
            </div>
            <div data-id="alcooldrop" ondrop="drop(event)" ondragover="allowDrop(event)">
                <span>Álcool-gel</span>
            </div>
            <div data-id="distanciamentodrop" ondrop="drop(event)" ondragover="allowDrop(event)">
                <span>Distanciamento</span>
            </div>
            <div data-id="lavarAsMaosdrop" ondrop="drop(event)" ondragover="allowDrop(event)">
                <span>Lavar as mãos</span>
            </div>
            <div data-id="doencadrop" ondrop="drop(event)" ondragover="allowDrop(event)">
                <span>Doença</span>
            </div>
        </div>
        </div>`

        const imagens = document.querySelectorAll('[draggable = "true"]');
        const palavras = document.querySelector('.elementoLargar');
        const imagemArrastada = document.querySelector('.aArrastar');
        let imgArrastada = this.jogoControlador.largar(imagemArrastada);

        imagens.forEach((imagem) => {
            imagem.addEventListener('dragstart', comecarArrastar);
        })

        palavras.addEventListener('dragover', largar);

    }


    jogo() {
        let jogo = this.jogoControlador.getJogoAtual();
        if(jogo.genero == 'Preencher espaços') {
            this.posJogo = this.gerarJogoArrastar(jogo);
        }else if(jogo.genero =='Questionários'){
            this.posJogo = this.gerarJogoQuestionarios(jogo)
        }else if(jogo == ''){

        }else{

        }
    }

    confirmar(){
        this.botaoResultado = document.querySelector('#resultado').addEventListener('click', () =>{
            let rUm = document.querySelector('input[name="respostaUm"]:checked')
            let rDois = document.querySelector('input[name="respostaDois"]:checked')
            let rTres = document.querySelector('input[name="respostaTres"]:checked')
            let rQuatro = document.querySelector('input[name="respostaQuatro"]:checked')
            let rCinco = document.querySelector('input[name="respostaCinco"]:checked')

            let certas = this.jogoControlador.respostasQuestionario(rUm.value, rDois.value, rTres.value, rQuatro.value, rCinco.value)
            let pontos = certas*20

            alert(`Tens ${certas} respostas certas!`)
            
            alert(`A tua pontuação foi de ${pontos}`)

            this.utilizadorControlador.setPontos(pontos);

            // this.utilizadorControlador.setPontos(pontos)

            // enviar para uma tabela de classificação
        })
    }
}