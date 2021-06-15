import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class UtilizadorVista {
    constructor() {
        this.utilizadorControlador = new utilizadorControlador();

        this.utilizador = document.getElementById('nome');
        this.imagem = document.getElementById('avatar');

        this.navbar();   
    }

    /**
     * Meter na barra da navbar o avatar e o primeiro e ultimo nome do utilizador
     */
    navbar(){
        let nomeApelido = this.utilizadorControlador.nomeApelido();
        let avatar = this.utilizadorControlador.avatar();

        this.utilizador.innerHTML = `<span id="perfil" class="avatarTexto navbar-text" id="nomeUtilizador">${nomeApelido}</span>`;
        this.imagem.src = avatar; 

    }
}