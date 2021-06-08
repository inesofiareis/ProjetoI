import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class UserView {
    constructor() {
        this.utilizadorControlador = new utilizadorControlador();

        this.utilizador = document.getElementById('nome');
        this.imagem = document.getElementById('avatar');

        this.navbar();   
    }

    navbar(){
        let nomeApelido = this.utilizadorControlador.nomeApelido();
        let avatar = this.utilizadorControlador.avatar();

        this.utilizador.innerHTML = `<span id="perfil" class="avatarTexto navbar-text" id="nomeUtilizador">${nomeApelido}</span>`;
        this.imagem.scr = avatar; 

    }
}