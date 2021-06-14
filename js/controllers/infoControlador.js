import infoModelo from '../models/infoModelo.js'

export default class infoController {
    constructor() {
        this.capitulos = localStorage.informacao ? JSON.parse(localStorage.informacao) : [];
        this.capituloAtual = sessionStorage.informacao ? sessionStorage.informacao : null
    }

    /**
     * 
     * @param {string} titulo titulo do capitulo
     */
    setCapituloAtual(titulo){
        this.capituloAtual = titulo
        sessionStorage.setItem('informacao', titulo)
    }

    getCapituloAtual(){
        return this.capitulos.find(capitulo => capitulo.titulo == this.capituloAtual)
    }

    
}