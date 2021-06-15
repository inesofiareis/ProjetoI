import jogoControlador from '../controllers/jogoControlador.js';
import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class JogosDetalhes {
    constructor() {
        this.jogoControlador = new jogoControlador()
        this.utilizadorControlador = new utilizadorControlador()

        this.txtPositiva = document.querySelector('.positivoTexto');
        this.txtNormal = document.querySelector('.medioTexto');
        this.txtNegativa = document.querySelector('.negativoTexto');

        this.btnPositiva = document.querySelector('#positivo')
        this.positivo()
        this.btnNormal = document.querySelector('#medio')
        this.medio()
        this.btnNegativa = document.querySelector('#negativo')
        this.negativo()
        
        this.posJogo = document.querySelector(".caixaJogos");

        this.txtJogos = document.querySelector('.textoJogos');
        this.jogo();
        this.gostos();

        let jogo = this.jogoControlador.getJogoAtual();

        //alimentar a pagina

        document.querySelector('.nomeJogo').innerHTML = jogo.nome;
        document.querySelector('.descJogo').innerHTML = jogo.descricao;
    }


    gerarJogoQuestionarios() {
        let perguntasErespostas = this.jogoControlador.jogoQuestionario()
        // let respostas = this.jogoControlador.respostasJogo()

        this.posJogo.innerHTML = `<h1 class="display-4">Vê o que aprendeste!</h1>
        <h3 class="perguntaUm" style="color:#205D76;">${perguntasErespostas.perguntas[0]}</h3>
        <input type="radio" name="respostaUm" value="${perguntasErespostas.alternativas[0][0]}" class="opcaoUm">${perguntasErespostas.alternativas[0][0]}<br>
        <input type="radio" name="respostaUm" value="${perguntasErespostas.alternativas[0][1]}" class="opcaoDois">${perguntasErespostas.alternativas[0][1]}<br>
        <input type="radio" name="respostaUm" value="${perguntasErespostas.alternativas[0][2]}" class="opcaoTres">${perguntasErespostas.alternativas[0][2]}<br>
        <input type="radio" name="respostaUm" value="${perguntasErespostas.alternativas[0][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[0][3]}<br>
    
        <h3 class="perguntaDois" style="color:#205D76;">${perguntasErespostas.perguntas[1]}</h3>
        <input type="radio" name="respostaDois" value="${perguntasErespostas.alternativas[1][0]}" class="opcaoUm">${perguntasErespostas.alternativas[1][0]} <br>
        <input type="radio" name="respostaDois" value="${perguntasErespostas.alternativas[1][1]}" class="opcaoDois">${perguntasErespostas.alternativas[1][1]} <br>
        <input type="radio" name="respostaDois" value="${perguntasErespostas.alternativas[1][2]}" class="opcaoTres">${perguntasErespostas.alternativas[1][2]} <br>
        <input type="radio" name="respostaDois" value="${perguntasErespostas.alternativas[1][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[1][3]} <br>
    
        <h3 class="perguntaTres" style="color:#205D76;">${perguntasErespostas.perguntas[2]}</h3>
        <input type="radio" name="respostaTres" value="${perguntasErespostas.alternativas[2][0]}" class="opcaoUm">${perguntasErespostas.alternativas[2][0]} <br>
        <input type="radio" name="respostaTres" value="${perguntasErespostas.alternativas[2][1]}" class="opcaoDois">${perguntasErespostas.alternativas[2][1]} <br>
        <input type="radio" name="respostaTres" value="${perguntasErespostas.alternativas[2][2]}" class="opcaoTres">${perguntasErespostas.alternativas[2][2]} <br>
        <input type="radio" name="respostaTres" value="${perguntasErespostas.alternativas[2][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[2][3]} <br>
    
        <h3 class="perguntaQuatro" style="color:#205D76;">${perguntasErespostas.perguntas[3]}</h3>
        <input type="radio" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][0]}" class="opcaoUm">${perguntasErespostas.alternativas[3][0]} <br>
        <input type="radio" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][1]}" class="opcaoDois">${perguntasErespostas.alternativas[3][1]} <br>
        <input type="radio" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][2]}" class="opcaoTres">${perguntasErespostas.alternativas[3][2]} <br>
        <input type="radio" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[3][3]} <br>
    
        <h3 class="perguntaCinco" style="color:#205D76;">${perguntasErespostas.perguntas[4]}</h3>
        <input type="radio" name="respostaCinco" value="${perguntasErespostas.alternativas[4][0]}" class="opcaoUm">${perguntasErespostas.alternativas[4][0]} <br>
        <input type="radio" name="respostaCinco" value="${perguntasErespostas.alternativas[4][1]}" class="opcaoDois">${perguntasErespostas.alternativas[4][1]} <br>
        <input type="radio" name="respostaCinco" value="${perguntasErespostas.alternativas[4][2]}" class="opcaoTres">${perguntasErespostas.alternativas[4][2]} <br>
        <input type="radio" name="respostaCinco" value="${perguntasErespostas.alternativas[4][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[4][3]} <br>
    
        <input type="submit" name="submit" value="Diz-me a pontuação!" id="resultado" style="">`

        this.confirmar()

    }


    gerarJogoArrastar() {
        this.posJogo.innerHTML = `<div class="row elementosArrastar">
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="../../img/jogos/virus.png" id="virusDrop" height="220px">
                                    </div>
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="../../img/jogos/mascara.png" id="mascaraDrop" height="215px">
                                    </div>
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="../../img/jogos/alcool.png" id="alcoolDrop" height="220px">
                                    </div> 
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="../../img/jogos/distanciamento.png" id="distanciamentoDrop" height="220px">
                                    </div>
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="../../img/jogos/lavar maos.png" id="lavarAsMaosDrop" height="220px">
                                    </div>
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="../../img/jogos/tobias febre.png" id="doencaDrop" height="220px">
                                    </div>
                                </div>
                                <br><br><br>
                                <div class=" row elementoLargar">
                                    <div class="caixasDragDrop" id="virusdrop">
                                        <span>Vírus</span>
                                    </div>

                                    <div class="caixasDragDrop" id="mascaradrop">
                                        <span>Máscara</span>
                                    </div>
                                    <div class="caixasDragDrop" id="alcooldrop">
                                        <span>Álcool-gel</span>
                                    </div>
                                    <div class="caixasDragDrop" id="distanciamentodrop">
                                        <span>Distanciamento</span>
                                    </div>
                                    <div class="caixasDragDrop" id="lavarAsMaosdrop">
                                        <span>Lavar as mãos</span>
                                    </div>
                                    <div class="caixasDragDrop" id="doencadrop">
                                        <span>Doença</span>
                                    </div>
                                </div>

                                <input type="button" value="Confirmar" id="confirmar">
                                <input type="button" value="Resetar" id="resete">
                                </div>`

        this.imgsdrop = document.querySelectorAll('.imgdrop')
        this.caixasDragDrop = document.querySelectorAll('.caixasDragDrop')
        this.JogoArrastar()
        this.botaoResetar = document.querySelector('#resete')
        this.resetar()
        this.botaoConfirmarPreencher = document.querySelector('#confirmar')
        this.ConfirmarPreencher()
    }


    jogo() {
        let jogo = this.jogoControlador.getJogoAtual();
        if (jogo.genero == 'Preencher espaços') {
            this.posJogo = this.gerarJogoArrastar(jogo);
        } else if (jogo.genero == 'Questionários') {
            this.posJogo = this.gerarJogoQuestionarios(jogo)
        } else if (jogo == '') {

        } else {

        }
    }

    confirmar() {
        this.botaoResultado = document.querySelector('#resultado').addEventListener('click', () => {
            let rUm = document.querySelector('input[name="respostaUm"]:checked')
            let rDois = document.querySelector('input[name="respostaDois"]:checked')
            let rTres = document.querySelector('input[name="respostaTres"]:checked')
            let rQuatro = document.querySelector('input[name="respostaQuatro"]:checked')
            let rCinco = document.querySelector('input[name="respostaCinco"]:checked')

            let certas = this.jogoControlador.respostasQuestionario(rUm.value, rDois.value, rTres.value, rQuatro.value, rCinco.value)
            let pontos = certas * 20

            alert(`Tens ${certas} respostas certas!`)

            alert(`A tua pontuação foi de ${pontos}`)

            this.utilizadorControlador.setPontos(pontos);
            this.utilizadorControlador.setAtividades();

            // this.utilizadorControlador.setPontos(pontos)

            // enviar para uma tabela de classificação
        })
    }

    JogoArrastar() {
        let arrastados
        this.imgsdrop.forEach(imgdrop => {
            imgdrop.addEventListener('dragstart', e => {
                e.dataTransfer.setData("text/plain", imgdrop.id)
            })
            imgdrop.addEventListener('drag', e => {
                arrastados = e.target;
                // e.target.style.opacity = .5;
            })
            imgdrop.addEventListener('dragend', e => {
                // e.target.style.opacity = "";
            })
        })

        //local onde soltar as imagens
        this.caixasDragDrop.forEach(caixaDragDrop => {
            caixaDragDrop.addEventListener('dragenter', e => {
                e.preventDefault();
            })
            caixaDragDrop.addEventListener('dragover', e => {
                e.preventDefault()
                e.target.style.background = "lightgray";
            })
            caixaDragDrop.addEventListener('dragleave', e => {
                if (e.target.className == "caixasDragDrop") {
                    e.target.style.background = "";
                }
            })
            caixaDragDrop.addEventListener('drop', e => {
                e.preventDefault();
                if (e.target.className == "caixasDragDrop") {
                    e.target.style.background = "";
                    arrastados.parentNode.removeChild(arrastados);
                    e.target.appendChild(arrastados);
                }
            })
        })
    }

    resetar() {
        this.botaoResetar.addEventListener('click', () => {
            location.reload()
        })
    }

    ConfirmarPreencher() {
        this.botaoConfirmarPreencher.addEventListener('click', () => {
            let caixaVirus = document.querySelector('#virusdrop')
            let imagemVirus = caixaVirus.querySelector('.imagemJogo')
            let caixaMascara = document.querySelector('#mascaradrop')
            let imagemMascara = caixaMascara.querySelector('.imagemJogo')
            let caixaAlcool = document.querySelector('#alcooldrop')
            let imagemAlcool = caixaAlcool.querySelector('.imagemJogo')
            let caixaDistancia = document.querySelector('#distanciamentodrop')
            let imagemDistancia = caixaDistancia.querySelector('.imagemJogo')
            let caixaLavar = document.querySelector('#lavarAsMaosdrop')
            let imagemLavar = caixaLavar.querySelector('.imagemJogo')
            let caixaDoenca = document.querySelector('#doencadrop')
            let imagemDoenca = caixaDoenca.querySelector('.imagemJogo')

            const resultado = this.jogoControlador.jogoPreencherEspacos(caixaVirus.id, imagemVirus.id, caixaMascara.id, imagemMascara.id, caixaAlcool.id, imagemAlcool.id, caixaDistancia.id, imagemDistancia.id, caixaLavar.id, imagemLavar.id, caixaDoenca.id, imagemDoenca.id)

            alert(`Tens ${resultado} certas`)
        })
    }

    gostos(){
        let gostos = this.jogoControlador.jogoAvaliacao();
        let positivo = gostos.positiva;
        let medio = gostos.normal;
        let negativo = gostos.negativa;

        this.txtPositiva.innerHTML = `<figcaption class="figure-caption textoFiguraJogo positivoTexto">${positivo}</figcaption>`;
        this.txtNormal.innerHTML = `<figcaption class="figure-caption textoFiguraJogo positivoTexto">${medio}</figcaption>`;
        this.txtNegativa.innerHTML = `<figcaption class="figure-caption textoFiguraJogo positivoTexto">${negativo}</figcaption>`;
        
        this.btnPositivo = document.querySelector('#positivo').addEventListener('click', () => {
            positivo += 1
            this.jogoControlador.jogoAvaliacao(positivo)
            
        });
        this.btnMedio = document.querySelector('#medio').addEventListener('click', () => {
            medio += 1
            this.jogoControlador.jogoAvaliacao(medio)
        });
        this.btnNegativo = document.querySelector('#negativo').addEventListener('click',() => {
            negativo += 1
            this.jogoControlador.jogoAvaliacao(negativo)
        });
    }

    positivo(){
        this.btnPositiva.addEventListener('click', () =>{
            this.jogoControlador.positivo()
            this.gostos()
        })
    }

    medio(){
        this.btnNormal.addEventListener('click', () =>{
            this.jogoControlador.medio()
            this.gostos()
        })
    }

    negativo(){
        this.btnNegativa.addEventListener('click', () =>{
            this.jogoControlador.negativo()
            this.gostos()
        })
    }
}