import utilizadorModelo from '../models/utilizadorModelo.js'

export default class utilizadorControlador{
    constructor() {
        this.utilizadores = localStorage.utilizadores ? JSON.parse(localStorage.utilizadores) : [];
    }

    // registo.html
    registar(nome, apelido, nomeUtilizador, email, palavraPasse, dataNascimento, genero){
        if (nome.length == 0 || apelido.length == 0 || nomeUtilizador.length == 0 || email.length == 0 || dataNascimento.length == 0){ //caso o utilizador tenha esquecido de preencher algum campo
            throw Error(`Campos em falta! Verifica outra vez!`)
        }
        else if(this.utilizadores.find(utilizador => utilizador.nomeUtilizador === nomeUtilizador)) {  //se já existir um usuario com o nome de usuario escolhido
            throw Error(`Já existe um utilizador com este nome: "${nomeUtilizador}"`)
        }
        else if(palavraPasse.length < 5){  //Se a palavra passe tiver menos que 5 caracteres (para a segurança do utilizador)
            throw Error(`A palavra passe tem que ter pelo menos 5 caracteres!`)
        }
        else if(email.indexOf('@') == -1){ //caso o email não tenha o @
            throw Error(`Email inválido!`)
        }
        else {
            const novoID = this.utilizadores.length > 0 ? this.utilizadores[this.utilizadores.length - 1].id + 1 : 1
            const pontos = 0  //utilizador começa com 0 pontos
            const avatar = '../img/navbar/tatudobem.png' //avatar do utilizador
            const tipo = 'utilizador'  //tipo de utilizador, para novos são sempre utilizadores
            const estado = 'regular' //utilizador estra com estado de utilizador regular
            const amigos = [] //lista vazia para puder ser adicionado novos amigos
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
            throw Error('Dados inválidos!')
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
        const utilizador = this.utilizadoresInfo()

        let nomeCompleto = utilizador.nome + ' ' + utilizador.apelido //Primeiro e ultimo nome 

        return nomeCompleto
    }

    /**
     * Função para pegar o avatar do utilizador
     * @returns avatar do utilizador
     */
    avatar(){
        const utilizador = this.utilizadoresInfo()

        return utilizador.avatar
    }

    // perfil.html
    /**
     * Função para pegar o email do utilizador (para o perfil)
     * @returns email do utilizador
     */
     email(){
        const utilizador = this.utilizadoresInfo()

        return utilizador.email
    }

    /**
     * Função que recebe alterações no perfil do utilizador
     * @param {string} nomeUtilizador Nome de utilizador
     * @param {string} email Novo email (caso haja alterações)
     * @param {string} palavraPasse Nova palavra passe (caso haja alterações)
     */
    setEditar(nomeUtilizador = '', email = '', palavraPasse = ''){
        let utilizador = this.utilizadoresInfo()

        if (nomeUtilizador != ''){  // alterar o nome de utilizador
            utilizador.nomeUtilizador = nomeUtilizador
            sessionStorage.setItem('utilizadorLogado', nomeUtilizador)  //atualizar a informação da session storage
        }

        if (email != ''){ // alterar o email do utilizador
            utilizador.email = email 
        }
        
        if (palavraPasse != ''){ //alterar a palavra passe do utilizador
            utilizador.palavraPasse = palavraPasse
        }

        this.guardarLocalStorage(utilizador)
    }
    //perfil.html

    //sistema de pontuação
    /**
     * Atualizar os pontos do utilizador
     * @param {string} pontos Os pontos para adicionar ou subtrair 
     */
    setPontos(pontos){
        let utilizador = this.utilizadoresInfo()

        const novaPontuacao = utilizador.pontos + pontos //somar os pontos atuais com os novos pontos

        utilizador.pontos = novaPontuacao

        this.guardarLocalStorage(utilizador)
    }

    /**
     * Função para retornar os pontos que o utilizador tem no momento
     * @returns pontos atuais do utilizador
     */
    getPontos(){
        const utilizador = this.utilizadoresInfo()

        return utilizador.pontos
    }
    //sistema de pontuação

    /**
     * Função para retornar o genero do utilizador para os textos
     * @returns genero do utilizador
     */
     getGenero(){
        const utilizador = this.utilizadoresInfo()

        return utilizador.genero
    }

    /**
     * Função para adicionar amigos ao utilizador
     * @param {string} amigo amigo a ser adicionado
     */
    adcionarAmigos(amigo){
        let utilizador = this.utilizadoresInfo()

        if (utilizador.nomeUtilizador == amigo){
            throw Error(`Não te podes adicionar a ti proprio!`)
        }
        else{
            if(utilizador.amigos.some(amigos => amigos == amigo)){
                throw Error (`${amigo} já é teu amiguinho!`)
            }
            else if (!this.utilizadores.some(utilizador => utilizador.nomeUtilizador == amigo)){
                throw Error (`${amigo} não existe :(`)
            }
            else {
                utilizador.push(amigo) //guardar o novo amigo na lista
                this.guardarLocalStorage(utilizador)

                let utilizadorAmigo = this.utilizadoresInfo(amigo)
                
                utilizadorAmigo.amigos.push(utilizador.nomeUtilizador) //guardar o nome do utilizador na lista do amigo
                this.guardarLocalStorage(utilizadorAmigo)
            }
        }
    }

    /**
     * Função para remover amigos do utilizador
     * @param {string} amigo amigo a ser removido
     */
    removerAmigos(amigo){
        let utilizador = this.utilizadoresInfo()
        let utilizadorAmigo = this.utilizadoresInfo(amigo)

        utilizador.amigos.splice(utilizador.amigos.indexOf(amigo), 1)
        this.guardarLocalStorage(utilizador)

        utilizadorAmigo.amigos.splice(utilizadorAmigo.amigos.indexOf(utilizador.nomeUtilizador), 1)
        this.guardarLocalStorage(utilizadorAmigo)
    }

    //admin - gerir utilizadores
    /**
     * Função para fazer alterações no utilizador
     * @param {string} nomeUtilizador 
     */
    alterar(nomeUtilizador) {
        let utilizador = this.utilizadoresInfo(nomeUtilizador)

        let tipo = utilizador.tipo

        if (tipo == 'administrador'){
            tipo = 'utilizador'
        }
        else{
            tipo = 'administrador'
        }

        utilizador.tipo = tipo
        this.guardarLocalStorage(utilizador)
    }

    /**
     * Função para alterar o estado de utilizador (regular <=> bloqueado)
     * @param {string} nomeUtilizador 
     */
    bloquearUtilizador(nomeUtilizador){
        let utilizador = this.utilizadoresInfo(nomeUtilizador)

        let estado = utilizador.estado
        
        if (estado == 'regular'){
            estado = 'bloqueado'
        }
        else if (estado == 'bloqueado'){
            estado = 'regular'
        }

        utilizador.estado = estado
        this.guardarLocalStorage(utilizador)
    }

    /**
     * Função para alterar o estado de utilizador (regular/bloqueado <=> banido)
     * @param {string} nomeUtilizador 
     */
    banirUtilizador(nomeUtilizador){
        let utilizador = this.utilizadoresInfo(nomeUtilizador)

        let estado = utilizador.estado
        
        if (estado == 'regular' || estado == 'bloqueado'){
            estado = 'banido'
        }
        else if (estado == 'banido'){
            estado = 'regular'
        }

        utilizador.estado = estado
        this.guardarLocalStorage(utilizador)
    }

    /**
     * Função para returnar o estado do utilizador para a tabela dos utilizadores
     * @param {string} nomeUtilizador 
     * @returns estado do utilizador
     */
    estados(nomeUtilizador){
        const utilizador = this.utilizadoresInfo(nomeUtilizador)

        return utilizador.estado
    }
    //admin - gerir utilizadores

    guardarLocalStorage(utilizador){
        const todosUtilizadores = this.todosUtilizadores()

        for (let i = 0; i < todosUtilizadores.length ; i++){
            if (todosUtilizadores[i].nomeUtilizador == utilizador.nomeUtilizador){
                this.utilizadores[i] = utilizador
                localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))
            }
        }
    }

    /**
     * Função que só retorna a informação de um utilizador
     * @returns Returna o objeto com a informação do utilizador
     */
    utilizadoresInfo(utilizador = ''){
        if (utilizador == ''){
            utilizador = sessionStorage['utilizadorLogado']
        }
        const todosUtilizadores = this.todosUtilizadores()

        for (let i = 0; i < todosUtilizadores.length ; i++){
            if (todosUtilizadores[i].nomeUtilizador == utilizador){
                return todosUtilizadores[i]
            }
        }
    }

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
