import infoModel from '../models/infoModel.js'

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
        sessionStorage.setItem('irformacao', titulo)
    }

    getCapituloAtual(){
        return this.capitulos.find(capitulo => capitulo.titulo == this.capituloAtual)
    }

    //filtros
    // getCapitulos(filtroTitulo = '', filtroGenero = '', ordenado = false) {
    //     let filtroCapitulos = this.capitulos.filter(
    //         capitulo =>
    //             (capitulo.titulo.toLowerCase().includes(filtroTitulo.toLowerCase()) || filtroTitulo === '')
    //             &&
    //             (capitulo.genero == filtroGenero || filtroGenero === '')
    //     )

    //     filtroCapitulos = ordenado ? filtroCapitulos.sort(this.#comparar) : filtroCapitulos

    //     return filtroCapitulos
    // }

    // #comparar(tituloA, tituloB) {
    //     if (tituloA.titulo < tituloB.titulo)
    //             return -1;
    //     if (tituloA.titulo > tituloB.titulo)
    //             return 1;
    //     return 0;
    // }
}