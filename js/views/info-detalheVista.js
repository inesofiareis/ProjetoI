import infoControlador from '../controllers/infoControlador.js'
import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class infoDetelhes {
    constructor() {
        this.infoControlador = new infoControlador()
        this.utilizadorControlador = new utilizadorControlador()
        
        this.texto = document.querySelector('#caixaInfo')

        this.informacao()
    }

    informacao(){
        let info = this.infoControlador.getCapituloAtual()
        
        this.gerarTexto(info)
    }

    gerarTexto(info){
        let resultado = `<div class="introducaoInfo" style="padding-top: 20px;">
                            <h1 class="text-center tituloInfo" style="font-size: 50px; color:#205D76; ">${info.titulo}</h1>
                            <p class="text-center conteudoInfo" style="font-size: 30px; color:#3F9999;">${info.subtitulo}</p>
                            <img class="img-fluid imgInfo" src="${info.imagem}" />
                        </div>`

        let paragrafo = this.gerarParagrados(info)

        resultado += paragrafo

        this.texto.innerHTML = resultado
    }

    gerarParagrados(info){
        let paragrafo = `<div class="text">`
        for (const texto of info.texto){
            paragrafo += `<p class="paragrafo text-justify" style="font-size: 21px; padding-top:10px; color:#2B4E5C;">${texto}</p>`
        }

        paragrafo += `</div>`

        return paragrafo
    }
}