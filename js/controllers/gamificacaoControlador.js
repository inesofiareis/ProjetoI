import gamificacaoModelo from '../models/gamificacaoModelo.js'

export default class gamificacaoControlador{
    constructor(){
        this.gamificacao = localStorage.gamificacao ? JSON.parse(localStorage.gamificacao) : [];
    }

    /**
     * Função para guardar novas Medalhas que o administrador adicionou
     * @param {*} nome 
     * @param {*} descricao 
     * @param {*} img 
     * @param {*} pontos 
     */
    guardarMedalha(nome, descricao, img, pontos){
        this.gamificacao.push(new gamificacaoModelo(nome, descricao, img, pontos))
        localStorage.setItem('gamificacao', JSON.stringify(this.gamificacao))
    }

    getMedalhas(){
        let medalhas = localStorage['gamificacao']

        medalhas = JSON.parse(medalhas)
        
        return medalhas
    }
}