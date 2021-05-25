import UserModel from '../models/userModel.js'

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
            let pontos = 0  //utilizador começa com 0 pontos
            let avatar = '../img/navbar/tatudobem.png' //avatar do utilizador
            this.utilizadores.push(new UserModel(novoID, nome, apelido, nomeUtilizador, email, palavraPasse, dataNascimento, genero, pontos, avatar))
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
            let utilizadorAtual = sessionStorage['utilizadorLogado']
            let novoPerfil = localStorage['utilizadores']
            novoPerfil = JSON.parse(novoPerfil)

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
    //em teste
    /**
     * Atualizar os pontos do utilizador
     * @param {string} pontos Os pontos para adicionar ou subtrair 
     */
    setPontos(pontos){
        let utilizador = sessionStorage['utilizadorLogado']
        let utilizadorInfo = localStorage['utilizadores']
        utilizadorInfo = JSON.parse(utilizadorInfo)

        for (let i = 0; i < utilizadorInfo.length; i++){
            if(utilizadorInfo[i].nomeUtilizador == utilizador){
                const novaPontuacao = utilizadorInfo[i].pontos + pontos //somar os pontos atuais com os novos pontos

                utilizadorInfo[i].pontos = novaPontuacao

                this.utilizadores[i] = utilizadorInfo[i]
                localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))

                break
            }
        }
    }

    /**
     * Função para returnar o genero do utilizador para os textos
     * @returns genero do utilizador
     */
    getGenero(){
        let utilizador = sessionStorage['utilizadorLogado']
        let utilizadorInfo = localStorage['utilizadores']
        utilizadorInfo = JSON.parse(utilizadorInfo)

        for (let i = 0; i = utilizadorInfo.length; i++){
            if(utilizadorInfo[i].nomeUtilizador == utilizador){
                const genero = utilizadorInfo[i].genero
                
                break
            }
        }

        return genero
    }
}
