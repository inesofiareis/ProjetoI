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

    //preencher espaços

    arrastarInicio(){
        alert("a arrastar")
    }

    arrastar(){
        
    }

    arrastarFim(){

    }

    largarEntrada(){

    }

    largarValido(){
        this.appendChild(imagemArrastada);
    }

    largarFim(){

    }

    largar(){

    }
}