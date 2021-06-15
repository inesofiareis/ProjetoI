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

        //alimentar a pagina
        let jogo = this.jogoControlador.getJogoAtual();

        document.querySelector('.nomeJogo').innerHTML = jogo.nome;
        document.querySelector('.descJogo').innerHTML = jogo.descricao;
    }


    gerarJogoQuestionarios() {
        let perguntasErespostas = this.jogoControlador.getJogo()

        this.posJogo.innerHTML = `<h1 class="display-4 text-center" style="color:#205D76; margin-left:5px">Vê o que aprendeste!</h1>
        <h3 class="perguntaUm" style="color:#4685BD; margin-left:30px">${perguntasErespostas.perguntas[0]}</h3>
        <input type="radio" name="respostaUm" value="${perguntasErespostas.alternativas[0][0]}" class="opcaoUm" style="margin-left:30px"> ${perguntasErespostas.alternativas[0][0]}<br>
        <input type="radio" style="margin-left:30px" name="respostaUm" value="${perguntasErespostas.alternativas[0][1]}" class="opcaoDois">${perguntasErespostas.alternativas[0][1]}<br>
        <input type="radio" style="margin-left:30px" name="respostaUm" value="${perguntasErespostas.alternativas[0][2]}" class="opcaoTres">${perguntasErespostas.alternativas[0][2]}<br>
        <input type="radio" style="margin-left:30px" name="respostaUm" value="${perguntasErespostas.alternativas[0][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[0][3]}<br>
    
        <h3 class="perguntaDois" style="color:#4685BD;margin-left:30px"">${perguntasErespostas.perguntas[1]}</h3>
        <input type="radio" style="margin-left:30px" name="respostaDois" value="${perguntasErespostas.alternativas[1][0]}" class="opcaoUm">${perguntasErespostas.alternativas[1][0]} <br>
        <input type="radio" style="margin-left:30px" name="respostaDois" value="${perguntasErespostas.alternativas[1][1]}" class="opcaoDois">${perguntasErespostas.alternativas[1][1]} <br>
        <input type="radio" style="margin-left:30px" name="respostaDois" value="${perguntasErespostas.alternativas[1][2]}" class="opcaoTres">${perguntasErespostas.alternativas[1][2]} <br>
        <input type="radio" style="margin-left:30px" name="respostaDois" value="${perguntasErespostas.alternativas[1][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[1][3]} <br>
    
        <h3 class="perguntaTres" style="color:#4685BD;margin-left:30px"">${perguntasErespostas.perguntas[2]}</h3>
        <input type="radio" style="margin-left:30px" name="respostaTres" value="${perguntasErespostas.alternativas[2][0]}" class="opcaoUm">${perguntasErespostas.alternativas[2][0]} <br>
        <input type="radio" style="margin-left:30px" name="respostaTres" value="${perguntasErespostas.alternativas[2][1]}" class="opcaoDois">${perguntasErespostas.alternativas[2][1]} <br>
        <input type="radio" style="margin-left:30px" name="respostaTres" value="${perguntasErespostas.alternativas[2][2]}" class="opcaoTres">${perguntasErespostas.alternativas[2][2]} <br>
        <input type="radio" style="margin-left:30px" name="respostaTres" value="${perguntasErespostas.alternativas[2][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[2][3]} <br>
    
        <h3 class="perguntaQuatro" style="color:#4685BD; margin-left:30px"">${perguntasErespostas.perguntas[3]}</h3>
        <input type="radio" style="margin-left:30px" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][0]}" class="opcaoUm">${perguntasErespostas.alternativas[3][0]} <br>
        <input type="radio" style="margin-left:30px" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][1]}" class="opcaoDois">${perguntasErespostas.alternativas[3][1]} <br>
        <input type="radio" style="margin-left:30px" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][2]}" class="opcaoTres">${perguntasErespostas.alternativas[3][2]} <br>
        <input type="radio" style="margin-left:30px" name="respostaQuatro" value="${perguntasErespostas.alternativas[3][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[3][3]} <br>
    
        <h3 class="perguntaCinco" style="color:#4685BD; margin-left:30px"">${perguntasErespostas.perguntas[4]}</h3>
        <input type="radio" style="margin-left:30px" name="respostaCinco" value="${perguntasErespostas.alternativas[4][0]}" class="opcaoUm">${perguntasErespostas.alternativas[4][0]} <br>
        <input type="radio" style="margin-left:30px" name="respostaCinco" value="${perguntasErespostas.alternativas[4][1]}" class="opcaoDois">${perguntasErespostas.alternativas[4][1]} <br>
        <input type="radio" style="margin-left:30px" name="respostaCinco" value="${perguntasErespostas.alternativas[4][2]}" class="opcaoTres">${perguntasErespostas.alternativas[4][2]} <br>
        <input type="radio" style="margin-left:30px; margin-bottom:20px;" name="respostaCinco" value="${perguntasErespostas.alternativas[4][3]}" class="opcaoQuatro">${perguntasErespostas.alternativas[4][3]} <br>
    
        <input type="submit" name="submit" value="Diz-me a pontuação!" id="resultado" style="background-color:#205D76; color:white; border:1px solid #133C4D; border-radius:5px; margin-top:-50px; margin-right:7px; padding:10px;float:right;">`

        this.confirmar()


    }


    gerarJogoArrastar() {
        let jogo = this.jogoControlador.getJogo()

        this.posJogo.innerHTML = `<div class="row elementosArrastar">
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="${jogo[0].imagem}" id="virusDrop" height="120px">
                                    </div>
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="${jogo[1].imagem}" id="mascaraDrop" height="120px">
                                    </div>
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="${jogo[2].imagem}" id="alcoolDrop" height="120px">
                                    </div> 
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="${jogo[3].imagem}" id="distanciamentoDrop" height="120px">
                                    </div>
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="${jogo[4].imagem}" id="lavarAsMaosDrop" height="120px">
                                    </div>
                                    <div class="col imgdrop" draggable="true">
                                        <img class="imagemJogo" src="${jogo[5].imagem}" id="doencaDrop" height="120px">
                                    </div>
                                </div>
                                <br><br><br>
                                <div class=" row elementoLargar" style="margin-left:10px">
                                    <div class="caixasDragDrop" style=" border: 2px solid #1C6785; text-align:center;" id="virusdrop">
                                        <span style="font-size:20px; color:#1C6785;">${jogo[0].caixa}</span>
                                    </div>

                                    <div class="caixasDragDrop" id="mascaradrop" style=" border: 2px solid #1C6785; text-align:center;">
                                        <span style="font-size:20px; color:#1C6785;">${jogo[1].caixa}</span>
                                    </div>
                                    <div class="caixasDragDrop" id="alcooldrop" style=" border: 2px solid #1C6785; text-align:center;">
                                        <span style="font-size:20px; color:#1C6785;">${jogo[2].caixa}</span>
                                    </div>
                                    <div class="caixasDragDrop" id="distanciamentodrop" style=" border: 2px solid #1C6785; text-align:center;">
                                        <span style="font-size:20px; color:#1C6785;">${jogo[3].caixa}</span>
                                    </div>
                                    <div class="caixasDragDrop" id="lavarAsMaosdrop" style=" border: 2px solid #1C6785; text-align:center;">
                                        <span style="font-size:20px; color:#1C6785;">${jogo[4].caixa}</span>
                                    </div>
                                    <div class="caixasDragDrop" id="doencadrop" style=" border: 2px solid #1C6785; text-align:center;">
                                        <span style="font-size:20px; color:#1C6785;">${jogo[5].caixa}</span>
                                    </div>
                                </div>

                                <input type="button" value="Confirmar" id="confirmar" style="background-color:#205D76; color:white; border:1px solid #133C4D; border-radius:5px; padding:10px; margin-top:10px; margin-left:10px; margin-bottom:10px;">
                                <input type="button" value="Recomeçar" id="resete" style="background-color:#205D76; color:white; border:1px solid #133C4D; border-radius:5px; padding:10px;">
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

            document.querySelector('.caixaJogos').innerHTML += `<div class="alert alert-success" role="alert">Tens ${certas} respostas certas! <br>A tua pontuação foi de ${pontos} pontos</div>`
            

            this.utilizadorControlador.setPontos(pontos);
            this.utilizadorControlador.setAtividades(sessionStorage['jogos'], pontos);
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

            let pontos = resultado*20


            document.querySelector('.caixaJogos').innerHTML += `<div class="alert alert-success" role="alert">Tens ${resultado} respostas certas! <br>A tua pontuação foi de ${pontos} pontos</div>`

            this.utilizadorControlador.setPontos(pontos);
            this.utilizadorControlador.setAtividades(sessionStorage['jogos'], pontos);

            this.botaoResetar = document.querySelector('#resete')
            this.resetar()
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