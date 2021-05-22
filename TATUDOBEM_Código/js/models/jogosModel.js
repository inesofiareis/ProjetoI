/* export default */ class Jogo {
    constructor(nome, desc, avaliacao, comentario) {
        this.nome = nome
        this.desc = desc
        this.avaliacao = avaliacao
        this.comentario = comentario
    }
    // Compara duas bandas pelo seu nome. Faz uma ordenação alfabética crescente
    static compare(bandA, bandB) {
        if (bandA.name < bandB.name)
            return -1;
        if (bandA.name > bandB.name)
            return 1;
        return 0;
    }
}

/* export default */ class Comentarios{

    constructor(pessoa, texto, data){

        let tempo = new Date()
        tempo.getFullYear()
        tempo.getMonth()
        tempo.getDay()
        tempo.getTime() 
        this.pessoa = pessoa
        this.texto = texto
        this.data = tempo
    }


}

let comment1 = new Comentarios("joaquim")
