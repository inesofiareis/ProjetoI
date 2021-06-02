import utilizadorModelo from '../models/utilizadorModelo.js'

export default class UserController{
    constructor() {
        this.utilizadores = localStorage.utilizadores ? JSON.parse(localStorage.utilizadores) : [];
    }

    // registo.html
    registar(nome, apelido, nomeUtilizador, email, palavraPasse, dataNascimento, genero){
        if(this.utilizadores.find(utilizador => utilizador.nomeUtilizador === nomeUtilizador)) {
            throw Error(`Já existe um utilizador com esse nome de utilizador: "${nomeUtilizador}"`)
        }
        else {
            const novoID = this.utilizadores.length > 0 ? this.utilizadores[this.utilizadores.length - 1].id + 1 : 1
            const pontos = 0  //utilizador começa com 0 pontos
            const avatar = '../img/navbar/tatudobem.png' //avatar do utilizador
            const tipo = 'utilizador'  //tipo de utilizador, para novos são sempre utilizadores
            const estado = 'regular' //utilizador estra com estado de utilizador regular
            this.utilizadores.push(new utilizadorModelo(novoID, nome, apelido, nomeUtilizador, email, palavraPasse, dataNascimento, genero, pontos, avatar, tipo, estado))
            localStorage.setItem('utilizador', JSON.stringify(this.utilizadores))
        }
    }

    // login.html
    login(nomeUtilizador, palavraPasse){
        if (this.utilizadores.some(utilizador => utilizador.nomeUtilizador === nomeUtilizador && utilizador.palavraPasse === palavraPasse)) {
            sessionStorage.setItem('utilizadorLogado', nomeUtilizador)
        }
        else {
            throw Error('Login invalido!')
        }
    }

    logout() {
        sessionStorage.removeItem('utilizadorLogado')
    }

    isLogged(){
        return sessionStorage.getItem('utilizadorLogado') ? true : false
    }

    // perfil.html
    /**
     * Função que recebe alterações no perfil do utilizador
     * @param {string} nomeUtilizador Nome de utilizador
     * @param {string} email Novo email (caso haja alterações)
     * @param {string} palavraPasse Nova palavra passe (caso haja alterações)
     */
    setEditar(nomeUtilizador = '', email = '', palavraPasse = ''){
            const utilizador = sessionStorage['utilizadorLogado']
            let novoPerfil = this.todosUtilizadores()

            for(let i = 0; i < novoPerfil.length; i++){
                if(novoPerfil[i].nomeUtilizador == utilizadorAtual){
                    if (nomeUtilizador != ''){  // alterar o nome de utilizador
                        novoPerfil[i].nomeUtilizador = nomeUtilizador
                        sessionStorage.setItem('utilizadorLogado', nomeUtilizador)  //atualizar a informação da session storage
                    }

                    if (email != ''){ // alterar o email do utilizador
                        novoPerfil[i].email = email 
                    }
                    
                    if (palavraPasse != ''){ //alterar a palavra passe do utilizador
                        novoPerfil[i].palavraPasse = palavraPasse
                    }

                    this.utilizadores[i] = novoPerfil[i]
                    localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))  //atualizar a informação na local storage
                    break
                }
            }
    }

    //sistema de pontuação
    /**
     * Atualizar os pontos do utilizador
     * @param {string} pontos Os pontos para adicionar ou subtrair 
     */
    setPontos(pontos){
        const utilizador = sessionStorage['utilizadorLogado']
        let utilizadoresInfo = this.todosUtilizadores()

        for (let i = 0; i < utilizadoresInfo.length; i++){
            if(utilizadoresInfo[i].nomeUtilizador == utilizador){
                const novaPontuacao = utilizadoresInfo[i].pontos + pontos //somar os pontos atuais com os novos pontos

                utilizadoresInfo[i].pontos = novaPontuacao

                this.utilizadores[i] = utilizadoresInfo[i]
                localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))

                break
            }
        }
    }

    /**
     * Função para retornar o genero do utilizador para os textos
     * @returns genero do utilizador
     */
    getGenero(){
        const utilizador = sessionStorage['utilizadorLogado']
        let utilizadoresInfo = this.todosUtilizadores()

        for (let i = 0; i = utilizadoresInfo.length; i++){
            if(utilizadoresInfo[i].nomeUtilizador == utilizador){
                const genero = utilizadoresInfo[i].genero
                
                break
            }
        }

        return genero
    }

    /**
     * Função para retornar os pontos que o utilizador tem no momento
     * @returns pontos atuais do utilizador
     */
    getPontos(){
        const utilizador = sessionStorage['utilizadorLogado']
        let utilizadoresInfo = this.todosUtilizadores()

        for (let i = 0; i = utilizadoresInfo.length; i++){
            if(utilizadoresInfo[i].nomeUtilizador == utilizador){
                const pontos = utilizadoresInfo[i].pontos

                break
            }
        }

        return pontos
    }

    //admin - gerir utilizadores
    /**
     * Função para alterar o tipo de utilizador (utilizador <=> administrador)
     * @param {string} nomeUtilizador 
     */
    alterarTipo(nomeUtilizador) {
        let utilizadoresInfo = this.todosUtilizadores()
        for (let i = 0; i < utilizadoresInfo.length; i++){
            if(utilizadoresInfo[i].nomeUtilizador == nomeUtilizador){
                let tipo = utilizadoresInfo[i].tipo

                if (tipo == 'administrador'){
                    tipo = 'utilizador'
                }
                else{
                    tipo = 'administrador'
                }

                utilizadoresInfo[i].tipo = tipo
                this.utilizadores[i] = utilizadoresInfo[i]
                localStorage.setItem('utilizador', JSON.stringify(this.utilizadores))

                break
            }
        }
    }

    /**
     * Função para alterar o estado de utilizador (regular <=> bloqueado)
     * @param {string} nomeUtilizador 
     */
    bloquearUtilizador(nomeUtilizador){
        let utilizadoresInfo = this.todosUtilizadores()
        for (let i = 0; i < utilizadoresInfo.length; i++){
            if(utilizadoresInfo[i].nomeUtilizador == nomeUtilizador){
                let estado = utilizadoresInfo[i].estado
                
                if (estado == 'regular'){
                    estado = 'bloqueado'
                }
                else if (estado == 'bloqueado'){
                    estado = 'regular'
                }

                utilizadoresInfo[i].estado = estado
                this.utilizadores[i] = utilizadoresInfo
                localStorage.setItem('utilizador', JSON.stringify(this.utilizadores))

                break
            }
        }
    }

    /**
     * Função para alterar o estado de utilizador (regular/bloqueado <=> banido)
     * @param {*} nomeUtilizador 
     */
    banirUtilizador(nomeUtilizador){
        let utilizadoresInfo = this.todosUtilizadores()
        for (let i = 0; i < utilizadoresInfo.length; i++){
            if(utilizadoresInfo[i].nomeUtilizador == nomeUtilizador){
                let estado = utilizadoresInfo[i].estado
                
                if (estado == 'regular' || estado == 'bloqueado'){
                    estado = 'banido'
                }
                else if (estado == 'banido'){
                    estado = 'regular'
                }

                utilizadoresInfo[i].estado = estado
                this.utilizadores[i] = utilizadoresInfo
                localStorage.setItem('utilizador', JSON.stringify(this.utilizadores))

                break
            }
        }
    }

    /**
     * Função para returnar o estado do utilizador para a tabela dos utilizadores
     * @param {string} nomeUtilizador 
     * @returns estado do utilizador
     */
    estados(nomeUtilizador){
        let utilizadoresInfo = this.todosUtilizadores()
        for (let i = 0; i < utilizadoresInfo.length; i++){
            if (utilizadoresInfo[i].nomeUtilizador == nomeUtilizador){
                return utilizadoresInfo[i].estado

                break
            }
        }
    }
    //admin - gerir utilizadores


    /**
     * Função para retonar todos utilizadores que estão guardados na local storage
     * @returns retorna uma lista com todos utilizadores com as suas informações
     */
    todosUtilizadores(){
        let utilizadores = localStorage['utilizadores']
        utilizadores = JSON.parse(utilizadores)

        return utilizadores
    }
}
