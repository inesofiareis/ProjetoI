export default class Band {
    constructor(name, genre, photo, desc, music) {
        this.name = name
        this.genre = genre
        this.photo = photo
        this.desc = desc
        this.music = music
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