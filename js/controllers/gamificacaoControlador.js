import gamificacaoModelo from '../models/gamificacaoModelo.js'

export default class gamificacaoControlador{
    constructor(){
        this.gamificacao = localStorage.gamificacao ? JSON.parse(localStorage.gamificacao) : [];
    }

    guardarMedalha(nome, descricao, img, pontos){
        this.gamificacao.push(new gamificacaoModelo(nome, descricao, img, pontos))
        localStorage.setItem('gamificacao', JSON.stringify(this.gamificacao))
    }

    getMedalhas(){
        let medalhas = localStorage['gamificacao']
        console.log(medalhas)

        medalhas = JSON.parse(medalhas)
        
        return medalhas
    }
}