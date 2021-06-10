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

    gerarJogoQuestionarios(jogo){
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

    gerarJogoArrastar(){
        this.posJogo.innerHTML = `<div class="jogoDeArrastar">
        <section class="elementosArrastar">
            <img class="arastar" draggable="true" src="" id="virusdrop">
            <img class="arastar" draggable="true" src="" id="mascaradrop">
            <img class="arastar" draggable="true" src="" id="alcooldrop">
            <img class="arastar" draggable="true" src="" id="distanciamentodrop">
            <img class="arastar" draggable="true" src="" id="lavarAsMaosdrop">
            <img class="arastar" draggable="true" src="" id="doencadrop">
        </section>
        <section class="elementoLargar">
            <div class="largar" data-id="virusdrop"><span>Vírus</span>
            </div>
            <div class="largar" data-id="mascaradrop">
                <span>Máscara</span>
            </div>
            <div class="largar" data-id="alcooldrop">
                <span>Álcool-gel</span>
            </div>
            <div class="largar" data-id="distanciamentodrop">
                <span>Distanciamento</span>
            </div>
            <div class="largar" data-id="lavarAsMaosdrop">
                <span>Lavar as mãos</span>
            </div>
            <div class="largar" data-id="doencadrop">
                <span>Doença</span>
            </div>
        </section>
        </div>`

        const elementosArrastar = document.querySelectorAll('.arrastar');
        const elementosLargar = document.querySelectorAll('.largar');

        elementosArrastar.forEach(elem => {
            elem.addEventListener('arrastarInicio', arrastarInicio);
            elem.addEventListener("arrastar", arrastar);
            elem.addEventListener("arrastarFim",arrastarFim);

        })

        elementosLargar.forEach(elem => {
            elem.addEventListener('largarEntrada',largarEntrada);
            elem.addEventListener('largarValido',largarValido);
            elem.addEventListener('largarFim',largarFim);
            elem.addEventListener('largar',largar);
        })
        // controller mas sem certezas 

        // function arrastarInicio(event){
        //     event.dataTransfer.setData("text", event.target.id);
        // }

        // function largarEntrada(event) {
        //     if(!event.target.classList.contains("dropped")) {
        //       event.target.classList.add("droppable-hover");
        //     }
        //   }
          
        //   function largarValido(event) {
        //     if(!event.target.classList.contains("dropped")) {
        //       event.preventDefault(); // Prevent default to allow drop
        //     }
        //   }
          
        //   function largarFim(event) {
        //     if(!event.target.classList.contains("dropped")) {
        //       event.target.classList.remove("droppable-hover");
        //     }
        //   }
          
        //   function largar(event) {
        //     event.preventDefault(); // This is in order to prevent the browser default handling of the data
        //     event.target.classList.remove("droppable-hover");
        //     const elementosArrastarData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
        //     const elementosLargarData = event.target.getAttribute("data-draggable-id");
        //     const respostaCorreta = elementosArrastarData === elementosLargarData;
        //     if(respostaCorreta) {
        //       const elementoArrastar = document.getElementById(elementosArrastarData);
        //       event.target.classList.add("dropped");
        //       // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
        //       event.target.style.backgroundColor = window.getComputedStyle(elementoArrastar).color;
        //       elementoArrastar.classList.add("dragged");
        //       elementoArrastar.setAttribute("draggable", "false");
        //       event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${elementoArrastar}"></i>`);
        //     }
        //   }


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

}