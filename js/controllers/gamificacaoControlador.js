import gamificacaoModelo from '../models/gamificacaoModelo.js'

export default class gamificacaoControlador{
    constructor(){
        this.gamificacao = localStorage.gamificacao ? JSON.parse(localStorage.gamificacao) : [];
    }

    /**
     * Função para guardar novas Medalhas que o administrador adicionou
     * @param {string} nome Nome da Conquista
     * @param {string} descricao Descrição da Conquista
     * @param {string} img Imagem da conquista
     * @param {string} pontos Pontos necessarios para a conquista
     */
    guardarMedalha(nome, descricao, img, pontos){
        this.gamificacao.push(new gamificacaoModelo(nome, descricao, img, pontos))
        localStorage.setItem('gamificacao', JSON.stringify(this.gamificacao))
    }

    /**
     * Função que vai buscar todas as medalhas a local storage 
     * @returns retorna todas as medalhas que estam guardada 
     */
    getMedalhas(){
        let medalhas = localStorage['gamificacao']

        medalhas = JSON.parse(medalhas)
        
        return medalhas
    }
}