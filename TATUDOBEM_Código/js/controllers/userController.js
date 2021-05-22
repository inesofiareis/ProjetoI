import UserModel from '../models/userModel.js'

export default class UserController{
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
    }

    register(username, password){
        if(this.users.find(user => user.username === username)) {
            throw Error(`Já existe um usuario com esse nome de usuario: "${username}"`)
        }
        else {
            const newId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1
            this.users.push(new UserModel(username, password))
            localStorage.setItem('user', JSON.stringify(this.users))
        }
    }

    login(username, password){
        if (this.users.some(user => user.username === username && user.password === password)) {
            sessionStorage.setItem('loggedUser', username)
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