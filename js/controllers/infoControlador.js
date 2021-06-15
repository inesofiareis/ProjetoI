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
    setCapituloAtual(capitulo){
        this.capituloAtual = capitulo
        sessionStorage.setItem('informacao', capitulo)
    }

    getCapituloAtual(){
        return this.capitulos.find(capitulo => capitulo.capitulo == this.capituloAtual)
    }

    
}