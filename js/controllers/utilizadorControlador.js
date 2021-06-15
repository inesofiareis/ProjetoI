import utilizadorModelo from '../models/utilizadorModelo.js'

export default class utilizadorControlador {
    constructor() {
        this.utilizadores = localStorage.utilizadores ? JSON.parse(localStorage.utilizadores) : [];
    }

    // registo.html
    registar(nome, apelido, nomeUtilizador, email, palavraPasse, dataNascimento, genero) {
        if (nome == '' || apelido == '' || nomeUtilizador == '' || email == '' || dataNascimento == '') { //caso o utilizador tenha esquecido de preencher algum campo
            throw Error(`Campos em falta! Verifique novamente, por favor!`)
        } else if (this.utilizadores.find(utilizador => utilizador.nomeUtilizador === nomeUtilizador)) { //se já existir um usuario com o nome de usuario escolhido
            throw Error(`Já existe um utilizador com este nome: "${nomeUtilizador}"`)
        } else if (palavraPasse.length < 5) { //Se a palavra passe tiver menos que 5 caracteres (para a segurança do utilizador)
            throw Error(`A palavra passe tem que ter pelo menos 5 caracteres!`)
        } else if (email.indexOf('@') == -1) { //caso o email não tenha o @
            throw Error(`Email inválido!`)
        } else {
            const novoID = this.utilizadores.length > 0 ? this.utilizadores[this.utilizadores.length - 1].id + 1 : 1
            const pontos = 0 //utilizador começa com 0 pontos
            const avatar = '../img/avatares/Avatar.png' //avatar do utilizador
            const tipo = 'utilizador' //tipo de utilizador, para novos são sempre utilizadores
            const estado = 'regular' //utilizador estra com estado de utilizador regular
            const amigos = [] //lista vazia para puder ser adicionado novos amigos
            const atividades = [] //numero de ativades que utilizador já fez (0 no inicio)
            this.utilizadores.push(new utilizadorModelo(novoID, nome, apelido, nomeUtilizador, email, palavraPasse, dataNascimento, genero, pontos, avatar, tipo, estado, amigos, atividades))
            localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))
            sessionStorage.setItem('utilizadorLogado', nomeUtilizador)
        }
    }

    // login.html
    login(nomeUtilizador, palavraPasse) {
        let estado = this.utilizadoresInfo(nomeUtilizador)
        if (estado.estado == 'bloqueado'){
            throw Error('Não podes entrar na nossa aplicação porque foste bloquado')
        }
        else{
            if (this.utilizadores.some(utilizador => utilizador.nomeUtilizador === nomeUtilizador && utilizador.palavraPasse === palavraPasse)) {
                sessionStorage.setItem('utilizadorLogado', nomeUtilizador)
            } else {
                throw Error('Dados inválidos!')
            }
        }
    }

    logout() {
        sessionStorage.removeItem('utilizadorLogado')
    }

    isLogged() {
        return sessionStorage.getItem('utilizadorLogado') ? true : false
    }

    /**
     * Função para juntar o primeiro e ultimo nome do utilizador numa só string
     * @returns primeiro e ultimo nome do utilizador
     */
    nomeApelido() {
        const utilizador = this.utilizadoresInfo()

        let nomeCompleto = utilizador.nome + ' ' + utilizador.apelido //Primeiro e ultimo nome 

        return nomeCompleto
    }

    /**
     * Função para ver qual é a idade do utilizador
     * @returns returna a idade atual do utilizador
     */
    idade(){
        const utizador = this.utilizadoresInfo()
        const data = new Date

        const ano = +utizador.dataNascimento.slice(0, utizador.dataNascimento.indexOf('-'))  //ano que utilizador nasceu
        const mes = +utizador.dataNascimento.slice(utizador.dataNascimento.indexOf('-')+1, utizador.dataNascimento.lastIndexOf('-')+1) //mes em que o utilizador nasceu
        const dia = +utizador.dataNascimento.slice(utizador.dataNascimento.lastIndexOf('-'))  //mes em que utilizador nasceu

        const anoAtual = data.getFullYear()
        const mesAtual = data.getMonth()
        const diaAtual = data.getDay()

        let idade = anoAtual - ano - 1 // calcular a idade do utilizador e retirar 1 para caso ainda não tenha feito anos no ano atual

        //verificar se o utilizador já fez anos no ano atual e se sim somar 1
        if (mesAtual > mes){
            idade++
        }
        else if (mesAtual == mes && diaAtual >= dia ){
            idade++
        }

        return idade
    }

    /**
     * Função para pegar o avatar do utilizador
     * @returns avatar do utilizador
     */
    avatar() {
        const utilizador = this.utilizadoresInfo()
        
        return utilizador.avatar
    }

    setAvatar(avatar){
        let utilizador = this.utilizadoresInfo()
        
        utilizador.avatar = avatar

        this.guardarLocalStorage(utilizador)
    }

    // perfil.html
    /**
     * Função para pegar o email do utilizador (para o perfil)
     * @returns email do utilizador
     */
    email() {
        const utilizador = this.utilizadoresInfo()

        return utilizador.email
    }

    /**
     * Função que recebe alterações no perfil do utilizador
     * @param {string} nomeUtilizador Nome de utilizador (caso haja alterações)
     * @param {string} email Novo email (caso haja alterações)
     * @param {string} palavraPasse Nova palavra passe (caso haja alterações)
     */
    setEditar(nomeUtilizador = '', email = '', palavraPasse = '') {
        let utilizador = this.utilizadoresInfo()

        if (nomeUtilizador != '') { // alterar o nome de utilizador
            this.alterarNomeUtilizador(utilizador, nomeUtilizador)
            sessionStorage.setItem('utilizadorLogado', nomeUtilizador)
        }
        
        if (email != '') { // alterar o email do utilizador
            utilizador.email = email
        }

        if (palavraPasse != '') { //alterar a palavra passe do utilizador
            utilizador.palavraPasse = palavraPasse
        }

        this.guardarLocalStorage(utilizador)
    }

    /**
     * Função para returnar quantas atividades o utilizador já fez
     * @returns numero de atividades que o utilizador já fez
     */
    getAtividades() {
        const utilizador = this.utilizadoresInfo()

        return utilizador.atividades
    }

    /**
     * Função para adicionar mais uma atividade feita quando o utilizador conclui mais uma atividade
     */
    setAtividades(atividade, pontos) {
        let utilizador = this.utilizadoresInfo()
        let atividadeRealizada = false //ver se a atividade foi realizada anteriormente

        for (let i of utilizador.atividades){
            if (i.atividade == atividade){
                if (i.pontuacao < pontos){
                    i.pontuacao = pontos
                }

                atividadeRealizada = true
                break
            }
        }

        if(!atividadeRealizada){
            utilizador.atividades.push({atividade: atividade, pontuacao: pontos})
        }
        this.guardarLocalStorage(utilizador)
    }

    atividadePontuacao(atividades, atividade){
        for (const ati of atividades){
            if(ati.atividade == atividade){
                return ati.pontuacao
            }
        }
    }
    //perfil.html

    //sistema de pontuação
    /**
     * Atualizar os pontos do utilizador
     * @param {string} pontos Os pontos para adicionar ou subtrair 
     */
    setPontos(pontos) {
        let utilizador = this.utilizadoresInfo()

        const novaPontuacao = utilizador.pontos + pontos //somar os pontos atuais com os novos pontos

        utilizador.pontos = novaPontuacao

        this.guardarLocalStorage(utilizador)
    }

    /**
     * Função para retornar os pontos que o utilizador tem no momento
     * @returns pontos atuais do utilizador
     */
    getPontos() {
        const utilizador = this.utilizadoresInfo()

        return utilizador.pontos
    }
    //sistema de pontuação

    /**
     * Função para retornar o genero do utilizador para os textos
     * @returns genero do utilizador
     */
    getGenero() {
        const utilizador = this.utilizadoresInfo()

        return utilizador.genero
    }

    /**
     * Função para adicionar amigos ao utilizador
     * @param {string} amigo amigo a ser adicionado
     */
    adcionarAmigos(amigo) {
        let utilizador = this.utilizadoresInfo()

        if (utilizador.nomeUtilizador == amigo) {
            throw Error(`Não te podes adicionar a ti proprio!`)
        } else {
            if (utilizador.amigos.some(amigos => amigos == amigo)) {
                throw Error(`${amigo} já é teu amiguinho!`)
            } else if (!this.utilizadores.some(utilizador => utilizador.nomeUtilizador == amigo)) {
                throw Error(`${amigo} não existe :(`)
            } else {
                utilizador.push(amigo) //guardar o novo amigo na lista
                this.guardarLocalStorage(utilizador)

                let utilizadorAmigo = this.utilizadoresInfo(amigo)

                utilizadorAmigo.amigos.push(utilizador.nomeUtilizador) //guardar o nome do utilizador na lista do amigo
                this.guardarLocalStorage(utilizadorAmigo)
            }
        }
    }

    /**
     * Função para returnar uma lista de todos os amigos que ele tem
     * @returns Returna a lista de amigos do utilizador
     */
    listaAmigos() {
        const utilizador = this.utilizadoresInfo()

        return utilizador.amigos
    }

    /**
     * Função para remover amigos do utilizador
     * @param {string} amigo amigo a ser removido
     */
    removerAmigos(amigo) {
        let utilizador = this.utilizadoresInfo()
        let utilizadorAmigo = this.utilizadoresInfo(amigo)

        utilizador.amigos.splice(utilizador.amigos.indexOf(amigo), 1)
        this.guardarLocalStorage(utilizador)

        utilizadorAmigo.amigos.splice(utilizadorAmigo.amigos.indexOf(utilizador.nomeUtilizador), 1)
        this.guardarLocalStorage(utilizadorAmigo)
    }

    //admin - gerir utilizadores
    /**
     * Função para ver se o utilizador é administrador ou utilizador
     * @returns returna true se for administrador e false se for utilizador
     */
    admin(){
        let utilizador = this.utilizadoresInfo()

        return utilizador.tipo == 'administrador' ? true : false
    }

    /**
     * Função para alterar o tipo de utilizador (administrador <=> utilizador)
     * @param {string} nomeUtilizador 
     */
    alterar(nomeUtilizador) {
        let utilizador = this.utilizadoresInfo(nomeUtilizador)

        let tipo = utilizador.tipo

        if (tipo == 'administrador') {
            tipo = 'utilizador'
        } else {
            tipo = 'administrador'
        }

        utilizador.tipo = tipo
        this.guardarLocalStorage(utilizador)
    }

    /**
     * Função para alterar o estado de utilizador (regular <=> bloqueado)
     * @param {string} nomeUtilizador 
     */
    bloquearUtilizador(nomeUtilizador) {
        let utilizador = this.utilizadoresInfo(nomeUtilizador)

        let estado = utilizador.estado

        if (estado == 'regular') {
            estado = 'bloqueado'
        } else if (estado == 'bloqueado') {
            estado = 'regular'
        }

        utilizador.estado = estado
        this.guardarLocalStorage(utilizador)
    }

    remover(nomeUtilizador){
        let todosUtilizadores = this.todosUtilizadores()

        for (let i = 0; i < todosUtilizadores.length; i++) {
            if (todosUtilizadores[i].nomeUtilizador == nomeUtilizador) {
                this.utilizadores.splice(i, 1)
                break
            }
        } 

        localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))
    }

    /**
     * Função para returnar o estado do utilizador para a tabela dos utilizadores
     * @param {string} nomeUtilizador 
     * @returns estado do utilizador
     */
    estados(nomeUtilizador) {
        const utilizador = this.utilizadoresInfo(nomeUtilizador)

        return utilizador.estado
    }
    //admin - gerir utilizadores

    alterarNomeUtilizador(utilizador, novoUtilizador){
        const todosUtilizadores = this.todosUtilizadores()

        for (let i = 0; i < todosUtilizadores.length; i++){
            if(todosUtilizadores[i].nomeUtilizador == utilizador.nomeUtilizador){
                utilizador.nomeUtilizador = novoUtilizador
                this.utilizadores[i] = utilizador
                localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))
            }
        }
    }

    /**
     * Função para guardar alterações das informações do utilizador feitas
     * @param {object} utilizador lista de informação do utilizador
     */
    guardarLocalStorage(utilizador) {    
        const todosUtilizadores = this.todosUtilizadores()

        for (let i = 0; i < todosUtilizadores.length; i++) {
            if (todosUtilizadores[i].nomeUtilizador == utilizador.nomeUtilizador) {
                this.utilizadores[i] = utilizador
                localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))
            }
        }
    }

    /**
     * Função que só retorna a informação de um utilizador
     * @param {object} utilizador lista de informação de todos utilizadores
     * @returns Returna o objeto com a informação do utilizador
     */
    utilizadoresInfo(utilizador = '') {
        if (utilizador == '') { //caso não seja passado nenhum utilizador como parametro, utilizar o utilizador logado
            utilizador = sessionStorage['utilizadorLogado']
        }
        const todosUtilizadores = this.todosUtilizadores()

        for (let i = 0; i < todosUtilizadores.length; i++) {
            if (todosUtilizadores[i].nomeUtilizador == utilizador) {
                return todosUtilizadores[i]
            }
        }
    }

    /**
     * Função para retonar todos utilizadores que estão guardados na local storage
     * @returns retorna uma lista com todos utilizadores com as suas informações
     */
    todosUtilizadores() {
        let utilizadores = localStorage['utilizadores']
        utilizadores = JSON.parse(utilizadores)

        return utilizadores
    }
}