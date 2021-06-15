import infoModelo from '../models/infoModelo.js'

export default class infoController {
    constructor() {
        this.capitulos = localStorage.informacao ? JSON.parse(localStorage.informacao) : [];
        this.capituloAtual = sessionStorage.informacao ? sessionStorage.informacao : null
    }

    /**
     * Função para guardar a informação sa Session Storage o capitulo que o utilizador selecionou 
     * @param {string} titulo titulo do capitulo
     */
    setCapituloAtual(capitulo){
        this.capituloAtual = capitulo
        sessionStorage.setItem('informacao', capitulo)
    }

    /**
     * Função que pega a informação do capitulo que o utilizador esta a ver
     * @returns retorna a informação do capitulo
     */
    getCapituloAtual(){
        return this.capitulos.find(capitulo => capitulo.capitulo == this.capituloAtual)
    }

    /**
     * Função para guardar novas informações dadas a um capitulo
     * @param {string} capitulo Qual capitulo foi selecionado para ser alterado 
     * @param {string} titulo Titulo do capitulo
     * @param {string} subtitulo Subtitulo do capitulo
     * @param {string} imagem imagem que vai estar presente na informaçõa
     * @param {string} texto1 primeiro paragrafo
     * @param {string} texto2 segundo paragrafo
     */
    guardarInformacao(capitulo, titulo, subtitulo, imagem, texto1, texto2){
        const todosCapitulos = this.todosCapitulos()
        let capituloExiste = false

        //ver se o capitulo tem já informações, se sim alteras
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

        //se o capitulo não tiver informações, criar um novo
        if (!capituloExiste){
            const novoID = this.capitulos.length > 0 ? this.capitulos[this.capitulos.length - 1].id + 1 : 1

            let texto = [texto1, texto2]

            this.capitulos.push(new infoModelo(novoID, capitulo, titulo, subtitulo, imagem, texto))
            localStorage.setItem('informacao', JSON.stringify(this.capitulos))
        }
    }

    /**
     * Função que pega todos os capitulos que estam guardados na local Storage
     * @returns retorna todos os capitulo e as suas informações
     */
    todosCapitulos() {
        let capitulos = localStorage['informacao']
        capitulos = JSON.parse(capitulos)

        return capitulos
    }
}