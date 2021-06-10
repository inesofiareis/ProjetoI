import jogoControlador from '../controllers/jogoControlador.js';

export default class JogosDetalhes {
    constructor(){
        this.jogoControlador = new jogoControlador()
 
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

    confirmar(){
        this.botaoResultado = document.querySelector('#resultado').addEventListener('click', () =>{
            let rUm = document.querySelector('input[name="respostaUm"]:checked')
            let rDois = document.querySelector('input[name="respostaDois"]:checked')
            let rTres = document.querySelector('input[name="respostaTres"]:checked')
            let rQuatro = document.querySelector('input[name="respostaQuatro"]:checked')
            let rCinco = document.querySelector('input[name="respostaCinco"]:checked')

            let certas = this.jogoControlador.respostasQuestionario(rUm.value, rDois.value, rTres.value, rQuatro.value, rCinco.value)
            alert(`Tens ${certas} respostas certas!`)
        })
    }
}