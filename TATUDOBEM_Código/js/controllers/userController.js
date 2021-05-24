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
            sessionStorage.setItem('loggedUser', nomeUtilizador)
        }
        else {
            throw Error('Login invalido!')
        }
    }

    logout() {
        sessionStorage.removeItem('loggedUser')
    }

    isLogged(){
        return sessionStorage.getItem('loggedUser') ? true : false
    }

    // perfil.html
    /**
     * Função que recebe alterações no perfil do utilizador
     * @param {string} nomeUtilizador Nome de utilizador
     * @param {string} email Novo email (caso haja alterações)
     * @param {string} palavraPasse Nova palavra passe (caso haja alterações)
     */
    setEditar(nomeUtilizador, email, palavraPasse){
        if (this.utilizadores.find(utilizador => utilizador.nomeUtilizador === nomeUtilizador)){
            let novoPerfil = localStorage['utilizadores']
            novoPerfil = JSON.parse(novoPerfil)

            for(let i = 0; i < novoPerfil.length; i++){
                if(novoPerfil[i].nomeUtilizador == nomeUtilizador){
                    novoPerfil[i].palavraPasse = palavraPasse
                    novoPerfil[i].email = email

                    this.utilizadores[i] = novoPerfil[i]
                    localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))
                    break
                }
            }
        }
    }

    //sistema de pontuação
    //em teste
    /**
     * Atualizar os pontos do utilizador
     * @param {string} nomeUtilizador Nome do utilizador
     * @param {string} pontos Os pontos para adicionar ou subtrair 
     */
    setPontos(nomeUtilizador, pontos){
        let utilizador = localStorage['utilizadores']
        utilizador = JSON.parse(utilizador)

        for (let i = 0; i < utilizador.length; i++){
            if(utilizador[i].nomeUtilizador == nomeUtilizador){
                const novaPontuacao = utilizador[i].pontos + pontos //somar os pontos atuas com os novos pontos

                utilizador[i].pontos = novaPontuacao

                this.utilizadores[i] = utilizador[i]
                localStorage.setItem('utilizadores', JSON.stringify(this.utilizadores))
                break
            }
        }
    }
}
