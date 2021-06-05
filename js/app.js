import entrarVista from './views/entrarVista.js'
import registoVista from './views/registoVista.js'
//import navbarVista from './views/navbarVista.js'
// import infoVista from './views/infoVista.js'
// import jogoVista from './views/jogoVista.js'
// import perfilVista from './views/editarperfilVista.js'
// import generoVista from './views/generoVista.js'
// import amigoVista from './views/amigoVista.js'
// import tuturialVista from './views/tutorialVista.js'
// import pontuacaoVista from './views/pontuacaoVista.js'

class App {
    constructor() {
        this.routes = {
            '': [],
            'index': [],
            'entrar': [entrarVista],
            'registo': [registoVista],
            'inicio': [],
            'info': [],
            'info-detalhe': [],
            'jogo': [],
            'jogo-detalhe': [],
            'perfil': []
        };

        // importar dados fictícios para fins de teste
        this.#importDataFixtures();

        // instanciar as visualizações mapeadas no objeto de routes
        this.#instantiateViews();
    }

    #importDataFixtures() {
        const utilizadores = [
            {
                id: 1,
                nome: "Inês",
                apelido: "Reis",
                nomeUtilizador: 'InêsReis',
                email: 'email@email.com',
                palavraPasse: 'pass1',
                dataNascimento: '2002-08-24',
                genero: 'Femenino',
                pontos: 1000,
                avatar: '../img/navbar/tatudobem.png',
                tipo: 'administrador',
                estado: 'regular',
                amigos: ['fifs', 'PauloR']
            },
            {
                id: 2,
                nome: "Sofia",
                apelido: "Freitas",
                nomeUtilizador: 'fifs',
                email: 'email@email.com',
                palavraPasse: 'pass2',
                dataNascimento: '2001-11-07',
                genero: 'Femenino',
                pontos: 1000,
                avatar: '../img/navbar/tatudobem.png',
                tipo: 'administrador',
                estado: 'regular',
                amigos: ['InêsReis', 'PauloR']
            },
            {
                id: 3,
                nome: "Paulo",
                apelido: "Rodrigues",
                nomeUtilizador: 'PauloR',
                email: 'email@email.com',
                palavraPasse: 'pass3',
                dataNascimento: '2000-09-16',
                genero: 'Masculino',
                pontos: 1000,
                avatar: '../img/navbar/tatudobem.png',
                tipo: 'administrador',
                estado: 'regular',
                amigos: ['InêsReis', 'fifs']
            }
        ];

        // Carrega as innformações, caso não haja na localStorage 
        if (!localStorage.utilizadores) {
            localStorage.setItem('utilizadores', JSON.stringify(utilizadores));
        }
    }

    #instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];
        const views = this.#getViews(route);
        for (const view of views) {
            new view();
        }
    }

    #getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }


}

new App();