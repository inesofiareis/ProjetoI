import UserModel from '../models/userModel.js'

export default class UserController{
    constructor() {
        this.utilizadores = localStorage.utilizadores ? JSON.parse(localStorage.utilizadores) : [];
    }

    registar(nomeUtilizador, palavraPasse){
        if(this.utilizadores.find(utilizador => utilizador.nomeUtilizador === nomeUtilizador)) {
            throw Error(`Já existe um utilizador com esse nome de utilizador: "${nomeUtilizador}"`)
        }
        else {
            const novoID = this.utilizadores.length > 0 ? this.utilizadores[this.utilizadores.length - 1].id + 1 : 1
            this.utilizadores.push(new UserModel(nomeUtilizador, palavraPasse))
            localStorage.setItem('utilizador', JSON.stringify(this.utilizadores))
        }
    }

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
}