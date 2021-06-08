export default  class Jogo {
    constructor(id, nome, genero, descricao, perguntasErespostas) {
        this.id = id
        this.nome = nome
        this.genero = genero
        this.descricao = descricao
        this.perguntasErespostas = perguntasErespostas
    }


    // Compara duas bandas pelo seu nome. Faz uma ordenação alfabética crescente
    // static compare(nomeA, nomeB) {
    //     if (nomeA.nome < nomeB.nome)
    //         return -1;
    //     if (nomeA.nome > nomeB.nome)
    //         return 1;
    //     return 0;
    // }
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
