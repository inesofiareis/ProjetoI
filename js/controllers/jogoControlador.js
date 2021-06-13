import jogoModelo from '../models/jogoModelo.js'
// import utilizadorControlador from '../controllers//utilizadorControlador.js'

export default class jogosController {
    constructor() {
        // this.utilizadorControlador = new utilizadorControlador()

        this.jogos = localStorage.jogos ? JSON.parse(localStorage.jogos) : [];
        this.jogoAtual = sessionStorage.jogos ? sessionStorage.jogos : null
    }

    /**
     * Função que recebe o nome do jogo e define-o como jogo atual (a ser exibido)
     * @param {string} nome nome do jogo
     */
    setJogoAtual(nome){
        this.jogoAtual = nome
        sessionStorage.setItem('jogos', nome)
    }

    getJogoAtual(){
        return this.jogos.find(jogo => jogo.nome == this.jogoAtual)
    }

    removerJogo(nome){
        this.jogos = this.jogos.filter(jogo => jogo.nome != nome)
        localStorage.setItem('jogos', JSON.stringify(this.jogos))
    }

    /**
     * Função que vai filtrar os jogos
     * @param {string} filtroNome se quiser ordenar por nome
     * @param {string} filtroGenero se quiser ordenar por genero
     * @param {boolean} ordenado 
     * @returns 
     */
    getJogos(filtroGenero = ''){
        if(filtroGenero != ''){
            if (filtroGenero == 'todos'){
                filtroGenero = ''
            }
            else if(filtroGenero == 'questionarios'){
                filtroGenero = 'Questionários'
            }
            else if (filtroGenero == 'Preencher'){
                filtroGenero = 'Preencher espaços'
            }
            else if (filtroGenero == 'jogodamemoria'){
                filtroGenero = 'Jogo da memória'
            }
        }

        let filtroJogos = this.jogos.filter(
            jogo =>
                (
                (jogo.genero == filtroGenero || filtroGenero === ''))
        )
                
        return filtroJogos
    }

    jogoQuestionario(){
        let jogo = this.jogosInformacoes(sessionStorage['jogos'])

        //criar um filtro para as idades 

        return jogo.perguntasErespostas[0]
        
    }

    respostasQuestionario(rUm, rDois, rTres, rQuatro, rCinco){
        let jogo = this.jogoQuestionario()
        let certas = 0 //número de respostas certas

        if  (rUm == jogo.respostasCorretas[0]){
            certas++
        }
        if  (rDois == jogo.respostasCorretas[1]){
            certas++ 
        }
        if  (rTres == jogo.respostasCorretas[2]){
            certas++ 
        }
        if  (rQuatro == jogo.respostasCorretas[3]){
            certas++ 
        }
        if  (rCinco == jogo.respostasCorretas[4]){
            certas++ 
        }

        return certas
    }

    jogosInformacoes(jogo){
        let todosJogos = localStorage['jogos']
        todosJogos = JSON.parse(todosJogos)

        for (let i = 0; i < todosJogos.length; i++){
            if(todosJogos[i].nome == jogo){
                return todosJogos[i]
            }
        }
    }

    //guardar novos jogos
    novoJogoQuestionario(nomeJogo, imgJogo, descricao, generoJogo, pergunta1, alternativa1, resposta1, pergunta2, alternativa2, resposta2, pergunta3, alternativa3, resposta3, pergunta4, alternativa4, resposta4, pergunta5, alternativa5, resposta5){
        const novoID = this.jogos.length > 0 ? this.jogos[this.jogos.length - 1].id + 1 : 1

        const perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5]

        const resp1 = this.respostaCorreta(resposta1, alternativa1)
        const resp2 = this.respostaCorreta(resposta2, alternativa2)
        const resp3 = this.respostaCorreta(resposta3, alternativa3)
        const resp4 = this.respostaCorreta(resposta4, alternativa4)
        const resp5 = this.respostaCorreta(resposta5, alternativa5)


        const respostas = [resp1, resp2, resp3, resp4, resp5]

        const alternativas1 = this.guardarAlternativas(alternativa1)
        const alternativas2 = this.guardarAlternativas(alternativa2)    
        const alternativas3 = this.guardarAlternativas(alternativa3)
        const alternativas4 = this.guardarAlternativas(alternativa4)
        const alternativas5 = this.guardarAlternativas(alternativa5)
        const alternativas = [alternativas1, alternativas2, alternativas3, alternativas4, alternativas5]

        const avalicao = [{postiva: 0,
                            normal: 0,
                            negativa: 0}]
        
        const detelhesJogo = [{perguntas: perguntas,
                                    respostasCorretas: respostas,
                                    alternativas: alternativas}]
        
        this.jogos.push(new jogoModelo(novoID, nomeJogo, imgJogo, generoJogo, descricao, avalicao, perguntasErespostas))
        localStorage.setItem('jogos', JSON.stringify(this.jogos))

    }

    guardarAlternativas(alternativas){
        const alternativasArray = []
        for (let alternativa of alternativas){
            alternativasArray.push(alternativa.value)
        }

        return alternativasArray
    }

    respostaCorreta(resposta, alternativas){
        if (resposta == 'alternativa1'){
            return alternativas[0].value 
        }
        else if (resposta == 'alternativa2'){
            return alternativas[1].value 
        }
        else if (resposta == 'alternativa3'){
            return alternativas[2].value 
        }
        else if (resposta == 'alternativa4'){
            return alternativas[3].value 
        }
    }

    //preencher espaços

    jogoPreencherEspacos(caixaVirus, imagemVirus, caixaMascara, imagemMascara, caixaAlcool, imagemAlcool, caixaDistancia, imagemDistancia, caixaLavar, imagemLavar, caixaDoenca, imagemDoenca){
        let certas = 0

        if (caixaVirus.toLocaleLowerCase() == imagemVirus.toLocaleLowerCase()){
            certas++
        }
        if (caixaMascara.toLocaleLowerCase() == imagemMascara.toLocaleLowerCase()){
            certas++
        }
        if (caixaAlcool.toLocaleLowerCase() == imagemAlcool.toLocaleLowerCase()){
            certas++
        }
        if (caixaDistancia.toLocaleLowerCase() == imagemDistancia.toLocaleLowerCase()){
            certas++
        }
        if (caixaLavar.toLocaleLowerCase() == imagemLavar.toLocaleLowerCase()){
            certas++
        }
        if (caixaDoenca.toLocaleLowerCase() == imagemDoenca.toLocaleLowerCase()){
            certas++
        }

        return certas
    }
} 