export default  class Jogo {
    constructor(id, nome, foto, genero, descricao, avaliacao, detelhesJogo) {
        this.id = id
        this.nome = nome
        this.foto = foto
        this.genero = genero
        this.descricao = descricao
        this.avaliacao = avaliacao
        this.detelhesJogo = detelhesJogo
    }
}

/* export default */ class Comentarios{

    constructor(pessoa, texto, data){

/*         let tempo = new Date()
        tempo.getFullYear()
        tempo.getMonth()
        tempo.getDay()
        tempo.getTime()  */
        this.pessoa = pessoa
        this.texto = texto
        this.data = data
    }


}
