import utilizadorModelo from '../models/utilizadorModelo.js'

export default class utilizadorControlador{
    constructor() {
        this.utilizadores = localStorage.utilizadores ? JSON.parse(localStorage.utilizadores) : [];
    }

    // registo.html
    registar(nome, apelido, nomeUtilizador, email, palavraPasse, dataNascimento, genero){
        if(this.utilizadores.find(utilizador => utilizador.nomeUtilizador === nomeUtilizador)) {
            throw Error(`Já existe um utilizador com esse nome de utilizador: "${nomeUtilizador}"`)
        }
        else if(palavraPasse.length < 5){
            throw Error(`A Palavra Passe tem que ter pelo menos 5 caracteres!`)
        }
        else {
            const novoID = this.utilizadores.length > 0 ? this.utilizadores[this.utilizadores.length - 1].id + 1 : 1
            const pontos = 0  //utilizador começa com 0 pontos
            const avatar = '../img/navbar/tatudobem.png' //avatar do utilizador
            const tipo = 'utilizador'  //tipo de utilizador, para novos são sempre utilizadores
            const estado = 'regular' //utilizador estra com estado de utilizador regular
            const amigos = [] //array vazio para puder ser adicionado novos amigos
            this.utilizadores.push(new utilizadorModelo(novoID, nome, apelido, nomeUtilizador, email, palavraPasse, dataNascimento, genero, pontos, avatar, tipo, estado))
            localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))
            sessionStorage.setItem('utilizadorLogado', nomeUtilizador)
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

    /**
     * Função para juntar o primeiro e ultimo nome do utilizador numa só string
     * @returns primeiro e ultimo nome do utilizador
     */
    nomeApelido(){
        const utilizador = sessionStorage['utilizadorLogado']
        let utilizadoresInfo = this.todosUtilizadores()

        for(let i = 0; i < utilizadoresInfo.length; i++){
            if(utilizadoresInfo[i].nomeUtilizador == utilizador){
                let nomeCompleto = utilizadoresInfo[i].nome + ' ' + utilizadoresInfo[i].apelido

                return nomeCompleto
            }
        }
    }

    /**
     * Função para pegar o avatar do utilizador
     * @returns avatar do utilizador
     */
    avatar(){
        const utilizador = sessionStorage['utilizadorLogado']
        let utilizadoresInfo = this.todosUtilizadores()

        for(let i = 0; i < utilizadoresInfo.length; i++){
            if(utilizadoresInfo[i].nomeUtilizador == utilizador){
                return utilizadoresInfo[i].avatar
            }
        }
    }

    // perfil.html
    /**
     * Função para pegar o email do utilizador (para o perfil)
     * @returns email do utilizador
     */
     email(){
        const utilizador = sessionStorage['utilizadorLogado']
        let utilizadoresInfo = this.todosUtilizadores()

        for(let i = 0; i < utilizadoresInfo.length; i++){
            if(utilizadoresInfo[i].nomeUtilizador == utilizador){
                return utilizadoresInfo[i].email
            }
        }
    }

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
                if(novoPerfil[i].nomeUtilizador == utilizador){
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

    /**
     * Função para adicionar amigos ao utilizador
     * @param {string} amigo amigo a ser adicionado
     */
    adcionarAmigos(amigo){
        const utilizador = sessionStorage['utilizadorLogado']

        if (utilizador == amigo){
            throw Error(`Não te podes adicionar a ti proprio!`)
        }
        else{
            let utilizadoresInfo = this.todosUtilizadores()

           for (let i = 0; i = utilizadoresInfo.length; i++){
                if(utilizadoresInfo[i].nomeApelido == utilizador){
                    if(utilizadoresInfo[i].amigos.some(amigos => amigos == amigo)){
                        throw Error (`${amigo} já é teu amiguinho!`)
                    }
                    else if (!this.utilizadores.some(utilizador => utilizador.nomeUtilizador == amigo)){
                        throw Error (`${amigo} não existe :(`)
                    }
                    else {
                        utilizadoresInfo[i].amigos.push(amigo)
                        this.utilizadores[i] = utilizadoresInfo[i]

                        for (let c = 0; c < utilizadoresInfo.length; c++){
                            if (utilizadoresInfo[c].nomeUtilizador == amigo){
                                utilizadoresInfo[c].amigos.push(utilizador)
                                this.utilizadores[c] = utilizadoresInfo[c]
                            }
                        }

                        localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))
                    }
                }
            } 
        } 
    }

    /**
     * Função para remover amigos do utilizador
     * @param {string} amigo amigo a ser removido
     */
    removerAmigos(amigo){
        const utilizador = sessionStorage['utilizadorLogado']
        let utilizadoresInfo = this.todosUtilizadores()

        for (let i = 0; i = utilizadoresInfo.length; i++){
            if(utilizadoresInfo[i].nomeApelido == utilizador){
                utilizadoresInfo[i].amigos.splice(utilizadoresInfo[i].amigos.indexOf(amigo), 1)
                this.utilizadores[i] = utilizadoresInfo[i]

                for (let c = 0; c < utilizadoresInfo.length; c++){
                    if (utilizadoresInfo[c].nomeUtilizador == amigo){
                        utilizadoresInfo[c].amigos.splice(utilizadoresInfo[i].amigos.indexOf(utilizador), 1)
                        this.utilizadores[c] = utilizadoresInfo[c]
                    }
                }

                localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))
            }
        } 
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
