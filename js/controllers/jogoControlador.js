import jogoModelo from '../models/jogoModelo.js'

export default class jogosController {
    constructor() {
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
        let jogo = jogosInformacoes(sessionStorage['jogos'])

        //criar um filtro para as idades 

        return jogo.perguntasErespostas
        
    }

    jogosInformacoes(jogo){
        let todosJogos = localStorage('jogos')

        for (let i = 0; i < todosJogos.length; i++){
            if(todosJogos[i] == jogo){
                return todosJogos[i]
            }
        }
    }
}