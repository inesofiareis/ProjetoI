export default  class Jogo {
    constructor(nome, foto, genero, descricao, perguntasErespostas) {
        this.nome = nome
        this.foto = foto
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
