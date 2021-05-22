import infoModel from '../models/infoModel.js'

export default class infoController {
    constructor() {
        this.capitulos = localStorage.capitulo ? JSON.parse(localStorage.bands) : [];
        this.capituloAtual = sessionStorage.capitulos ? sessionStorage.capitulo : null
    }

    setCapituloAtual(nome){
        this.capituloAtual = nome
        sessionStorage.setItem('capitulo', nome)
    }

    getCapituloAtual(){
        return this.capitulos.find(capitulo => capitulo.nome == this.capituloAtual)
    }

}