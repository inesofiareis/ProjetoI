export default class Utilizador {
    constructor(id, nome, apelido, nomeUtilizador, email, palavraPasse, dataNascimento, genero, pontos, avatar, tipo, estado, amigos, atividades) {
        this.id = id
        this.nome = nome
        this.apelido = apelido
        this.nomeUtilizador = nomeUtilizador
        this.email = email
        this.palavraPasse = palavraPasse
        this.dataNascimento = dataNascimento
        this.genero = genero
        this.pontos = pontos
        this.avatar = avatar
        this.tipo = tipo
        this.estado = estado
        this.amigos = amigos
        this.atividades = atividades
    }
}