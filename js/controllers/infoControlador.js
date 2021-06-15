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

    guardarInformacao(capitulo, titulo, subtitulo, imagem, texto1, texto2){
        const todosCapitulos = this.todosCapitulos()
        let capituloExiste = false


        for (let i = 0; i < todosCapitulos.length; i++){
            if (todosCapitulos[i].capitulo == capitulo){
                todosCapitulos[i].titulo  = titulo
                todosCapitulos[i].subtitulo = subtitulo
                todosCapitulos[i].imagem = imagem
                todosCapitulos[i].texto = [texto1, texto2]

                this.capitulos[i] = todosCapitulos[i]
                localStorage.setItem('informacao', JSON.stringify(this.capitulos))

                capituloExiste = true
                break
            }
        }

        if (!capituloExiste){
            const novoID = this.capitulos.length > 0 ? this.capitulos[this.capitulos.length - 1].id + 1 : 1

            let texto = [texto1, texto2]

            this.capitulos.push(new infoModelo(novoID, capitulo, titulo, subtitulo, imagem, texto))
            localStorage.setItem('informacao', JSON.stringify(this.capitulos))
        }
    }

    todosCapitulos() {
        let capitulos = localStorage['informacao']
        capitulos = JSON.parse(capitulos)

        return capitulos
    }
}