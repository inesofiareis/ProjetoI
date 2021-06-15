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

    /**
     * Função para returnar o jogo que utilizador escolheio jogar
     * @returns retorna toda as informações do jogo
     */
    getJogoAtual(){
        return this.jogos.find(jogo => jogo.nome == this.jogoAtual)
    }

    /**
     * Quando o admin carrega em remover o jogo a lista dos jogos
     * @param {string} nome do jogo
     */
    removerJogo(nome){
        this.jogos = this.jogos.filter(jogo => jogo.nome != nome)
        localStorage.setItem('jogos', JSON.stringify(this.jogos))
    }

    /**
     * Função que vai filtrar os jogos
     * @param {string} filtroNome se quiser ordenar por nome
     * @param {string} filtroGenero se quiser ordenar por genero
     * @param {boolean} ordenado 
     * @returns todos os jogos a ser mostrado no catalogo
     */
    getJogos(filtroGenero = ''){
        if(filtroGenero != ''){
            if (filtroGenero == 'todos'){  //se o utilizador quiseres ver todos os jogos, limpa o filtro
                filtroGenero = ''
            }
            else if(filtroGenero == 'questionarios'){
                filtroGenero = 'Questionários'
            }
            else if (filtroGenero == 'preencherEspacos'){
                filtroGenero = 'Preencher espaços'
            }
        }

        let filtroJogos = this.jogos.filter(
            jogo =>
                (
                (jogo.genero == filtroGenero || filtroGenero === ''))
        )
                
        return filtroJogos
    }

    /**
     * Quando o jogo escolhi pelo o utilizador é um do genero Questionario
     * @returns terna todas as infromações (perguntas e respostas) do jogo
     */
    getJogo(){
        let jogo = this.jogosInformacoes(sessionStorage['jogos'])

        return jogo.detelhesJogo  
    }

    /**
     * Função para ver as avaliações do jogo que o utilizador esta a jogar no momento
     * @returns retorna a informações das informações do jogo
     */
    jogoAvaliacao(){
        let jogo = this.jogosInformacoes(sessionStorage['jogos']);
        let avaliacao = jogo.avaliacao;

        return avaliacao
    }

    /**
     * função para ver se o utilizador acertou as nas perguntas feitas pelo questionario
     * @param {string} rUm resposta a primeira pergunta
     * @param {string} rDois resposta a segunda pergunta
     * @param {string} rTres resposta a terceira pergunta
     * @param {string} rQuatro resposta a quarta pergunta
     * @param {string} rCinco resposta a quinta pergunta
     * @returns retorna a quantidade de respostas certas
     */
    respostasQuestionario(rUm, rDois, rTres, rQuatro, rCinco){
        let jogo = this.getJogo()
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

    /**
     * Função para returnar todas as informações do jogo
     * @param {string} jogo 
     * @returns 
     */
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
    /**
     * Função para guardar um jogo tipo questionario
     * @param {string} nomeJogo nome do jogo
     * @param {string} imgJogo imagem do jogo
     * @param {string} descricao descrição do jogo
     * @param {string} generoJogo genero do jogo
     * @param {string} pergunta1 primeira pergunta
     * @param {string} alternativa1 primeiro conjunto de alternativas
     * @param {string} resposta1 primeira resposta correta
     * @param {string} pergunta2 segunda pergunta
     * @param {string} alternativa2 segundo conjunto de alternativas
     * @param {string} resposta2 segunda resposta correta
     * @param {string} pergunta3 terceira pergunta
     * @param {string} alternativa3 terceiro conjunto de alternativas
     * @param {string} resposta3 terceira resposta correta
     * @param {string} pergunta4 quarta pergunta
     * @param {string} alternativa4 quarto conjunto de alternativas
     * @param {string} resposta4 quarta resposta correta
     * @param {string} pergunta5 quinta pergunta
     * @param {string} alternativa5 quinto conjunto de alternativas
     * @param {string} resposta5 quinta resposta correta
     */
    novoJogoQuestionario(nomeJogo, imgJogo, descricao, generoJogo, pergunta1, alternativa1, resposta1, pergunta2, alternativa2, resposta2, pergunta3, alternativa3, resposta3, pergunta4, alternativa4, resposta4, pergunta5, alternativa5, resposta5){
        const novoID = this.jogos.length > 0 ? this.jogos[this.jogos.length - 1].id + 1 : 1

        const perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5]  //guardar todas as perguntas no array

        const resp1 = this.respostaCorreta(resposta1, alternativa1)
        const resp2 = this.respostaCorreta(resposta2, alternativa2)
        const resp3 = this.respostaCorreta(resposta3, alternativa3)
        const resp4 = this.respostaCorreta(resposta4, alternativa4)
        const resp5 = this.respostaCorreta(resposta5, alternativa5)


        const respostas = [resp1, resp2, resp3, resp4, resp5] //guardar todas as respostas num array pela mesma ordem das perguntas

        const alternativas1 = this.guardarAlternativas(alternativa1)
        const alternativas2 = this.guardarAlternativas(alternativa2)    
        const alternativas3 = this.guardarAlternativas(alternativa3)
        const alternativas4 = this.guardarAlternativas(alternativa4)
        const alternativas5 = this.guardarAlternativas(alternativa5)
        const alternativas = [alternativas1, alternativas2, alternativas3, alternativas4, alternativas5] //guardar todos os conjuntos de alternativas num array pela mesma ordem das perguntas

        const avalicao = [{postiva: 0,
                            normal: 0,
                            negativa: 0}]
        
        const detelhesJogo = [{perguntas: perguntas,
                                    respostasCorretas: respostas,
                                    alternativas: alternativas}]
        
        this.jogos.push(new jogoModelo(novoID, nomeJogo, imgJogo, generoJogo, descricao, avalicao, detelhesJogo))
        localStorage.setItem('jogos', JSON.stringify(this.jogos))
    }

    /**
     * Função para guardar um jogo tipo Preencher Espaços
     * @param {string} nomeJogo nome do jogo
     * @param {string} imgJogo imagem do jogo
     * @param {string} descricao descrição do jogo
     * @param {string} generoJogo genero do jogo
     * @param {string} caixa1 primeiro conjunto (caixa)
     * @param {string} img1 primeiro conjunto (imagem)
     * @param {string} caixa2 segundo conjunto (caixa)
     * @param {string} img2 segundo conjunto (imagem)
     * @param {string} caixa3 terceiro conjunto (caixa)
     * @param {string} img3 terceiro conjunto (imagem)
     * @param {string} caixa4 quarta conjunto (caixa)
     * @param {string} img4 quarta conjunto (imagem)
     * @param {string} caixa5 quinta conjunto (caixa)
     * @param {string} img5 quinta conjunto (imagem)
     * @param {string} caixa6 sexta conjunto (caixa)
     * @param {string} img6 sexta conjunto (imagem)
     */
    novoJogoPreencher(nomeJogo, imgJogo, descricao, generoJogo, caixa1, img1, caixa2, img2, caixa3, img3, caixa4, img4, caixa5, img5, caixa6, img6){
        const novoID = this.jogos.length > 0 ? this.jogos[this.jogos.length - 1].id + 1 : 1

        const caixaJogo1 = this.guardarCaixa(caixa1, img1)
        const caixaJogo2 = this.guardarCaixa(caixa2, img2)
        const caixaJogo3 = this.guardarCaixa(caixa3, img3)
        const caixaJogo4 = this.guardarCaixa(caixa4, img4)
        const caixaJogo5 = this.guardarCaixa(caixa5, img5)
        const caixaJogo6 = this.guardarCaixa(caixa6, img6)

        const avalicao = [{postiva: 0,
                            normal: 0,
                            negativa: 0}]

        const detelhesJogo = [caixaJogo1, caixaJogo2, caixaJogo3, caixaJogo4, caixaJogo5, caixaJogo6,]  //guardar toda a informação do jogo numa array
        
        this.jogos.push(new jogoModelo(novoID, nomeJogo, imgJogo, generoJogo, descricao, avalicao, detelhesJogo))
        localStorage.setItem('jogos', JSON.stringify(this.jogos))
    }

    /**
     * Função para guardar as alternativas das perguntas do questionarios num array
     * @param {conjunto de alternativas} alternativas 
     * @returns retorna o array das alternativas das perguntas
     */
    guardarAlternativas(alternativas){
        const alternativasArray = []
        for (let alternativa of alternativas){
            alternativasArray.push(alternativa.value)
        }

        return alternativasArray
    }

    /**
     * Função para ver qual é a resposta correta da pergunta
     * @param {string} resposta alternativa correta
     * @param {string} alternativas alternativas
     * @returns retorna a resposta correta da pergunta
     */
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

    /**
     * Função para guardar o conjundo de imagem e caixa num mesmo objeto
     * @param {string} caixa caixa com o nome
     * @param {string} img imagem
     * @returns retorna o objeto do conjuto
     */
    guardarCaixa(caixa, img){
        let resultado = {caixa: caixa, imagem: img}

        return resultado
    }
    //guardar novos jogos

    //preencher espaços
    /**
     * Ver quantas certas tem no jogo Preencher Espaços
     * @param {string} caixa1 
     * @param {string} imagem1
     * @param {string} caixa2 
     * @param {string} imagem2 
     * @param {string} caixa3 
     * @param {string} imagem3 
     * @param {string} caixa4 
     * @param {string} imagem4 
     * @param {string} caixa5 
     * @param {string} imagem5 
     * @param {string} caixa6 
     * @param {string} imagem6 
     * @returns retonar quantas respostas certas teve
     */
    jogoPreencherEspacos(caixa1, imagem1, caixa2, imagem2, caixa3, imagem3, caixa4, imagem4, caixa5, imagem5, caixa6, imagem6){
        let certas = 0

        if (caixa1.toLocaleLowerCase() == imagem1.toLocaleLowerCase()){
            certas++
        }
        if (caixa2.toLocaleLowerCase() == imagem2.toLocaleLowerCase()){
            certas++
        }
        if (caixa3.toLocaleLowerCase() == imagem3.toLocaleLowerCase()){
            certas++
        }
        if (caixa4.toLocaleLowerCase() == imagem4.toLocaleLowerCase()){
            certas++
        }
        if (caixa5.toLocaleLowerCase() == imagem5.toLocaleLowerCase()){
            certas++
        }
        if (caixa6.toLocaleLowerCase() == imagem6.toLocaleLowerCase()){
            certas++
        }

        return certas
    }

    //pontos
    /**
     * Adicionar no jogo mais uma avaliação posiva
     */
    positivo(){
        let avaliacao = this.jogoAvaliacao()
        avaliacao.positiva++
        this.guardarAvaliacao(avaliacao)
    }
    /**
     * Adicionar no jogo mais uma avaliação normal
     */
    medio(){
        let avaliacao = this.jogoAvaliacao()
        avaliacao.normal++
        this.guardarAvaliacao(avaliacao)
    }
    /**
     * Adicionar no jogo mais uma avaliação negativa
     */
    negativo(){
        let avaliacao = this.jogoAvaliacao()
        avaliacao.negativa++
        this.guardarAvaliacao(avaliacao)
    }

    /**
     * Guardar a nova avalização dada pelo utilizador
     * @param {number} avaliacao avaliação a ser alterada
     */
    guardarAvaliacao(avaliacao){
        let jogo = sessionStorage['jogos']
        let todosJogos = localStorage['jogos']
        todosJogos = JSON.parse(todosJogos)

        for (let i = 0; i < todosJogos.length; i++){
            if(todosJogos[i].nome == jogo){
                todosJogos[i].avaliacao = avaliacao
                this.jogos[i] = todosJogos[i]
                localStorage.setItem('jogos', JSON.stringify(this.jogos))
            }
        }
    }
}