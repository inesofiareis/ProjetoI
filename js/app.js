import entrarVista from './views/entrarVista.js'
import registoVista from './views/registoVista.js'
import navbarVista from './views/navbarVista.js'
import infoVista from './views/infoVista.js'
import infoDetalheVista from './views/info-detalheVista.js'
import jogoVista from './views/jogoVista.js'
import jogoDetalheVista from './views/jogo-detalheVista.js'
import perfilVista from './views/editarperfilVista.js'
import generoVista from './views/generoVista.js'
// import amigoVista from './views/amigoVista.js'
// import tutorialVista from './views/tutorialVista.js'
import pontuacaoVista from './views/pontuacaoVista.js'

class App {
    constructor() {
        this.routes = {
            '': [],
            'index': [],
            'entrar': [entrarVista],
            'registo': [registoVista],
            'inicio': [navbarVista, generoVista],
            'info': [navbarVista, infoVista],
            'info-detalhe': [navbarVista, infoDetalheVista],
            'jogo': [navbarVista, jogoVista],
            'jogo-detalhe': [navbarVista, jogoDetalheVista],
            'perfil': [navbarVista, perfilVista, pontuacaoVista]
        };

        // importar dados fictícios para fins de teste
        this.#importDataFixtures();

        // instanciar as visualizações mapeadas no objeto de routes
        this.#instantiateViews();
    }

    #importDataFixtures() {
        const informacao =[]

        const jogos = []

        const utilizadores = [
            {
                id: 1,
                nome: "Inês",
                apelido: "Reis",
                nomeUtilizador: 'InêsReis',
                email: 'inesReis@gmail.com',
                palavraPasse: 'Ines_Reis',
                dataNascimento: '2002-08-24',
                genero: 'Feminino',
                pontos: 1000,
                avatar: '../img/navbar/Avatar.png',
                tipo: 'administrador',
                estado: 'regular',
                amigos: ['fifs', 'PauloR'],
                atividades: [{
                    atividade: 'Ajudar o Xico',
                    pontuacao: 100
                }]
            },
            {
                id: 2,
                nome: "Sofia",
                apelido: "Freitas",
                nomeUtilizador: 'fifs',
                email: 'fifs@gmail.com',
                palavraPasse: 'fifs123',
                dataNascimento: '2001-11-07',
                genero: 'Feminino',
                pontos: 1000,
                avatar: '../img/navbar/Avatar.png',
                tipo: 'administrador',
                estado: 'regular',
                amigos: ['InêsReis', 'PauloR'],
                atividades: [{
                    atividade: 'Ajudar o Xico',
                    pontuacao: 100
                }]
            },
            {
                id: 3,
                nome: "Paulo",
                apelido: "Rodrigues",
                nomeUtilizador: 'PauloR',
                email: 'paulofilipe@hotmail.com',
                palavraPasse: 'paulo123',
                dataNascimento: '2000-09-16',
                genero: 'Masculino',
                pontos: 1000,
                avatar: '../img/navbar/Avatar.png',
                tipo: 'administrador',
                estado: 'regular',
                amigos: ['InêsReis', 'fifs'],
                atividades: [{
                    atividade: 'Ajudar o Xico',
                    pontuacao: 100
                }]
            }
        ];

        const gamificacao = []

        // Carrega as innformações, caso não haja na localStorage 
        if (!localStorage.utilizadores) {
            localStorage.setItem('utilizadores', JSON.stringify(utilizadores))
        }
        if (!localStorage.jogos) {
            localStorage.setItem('jogos', JSON.stringify(jogos))
        }
        if (!localStorage.informacao) {
            localStorage.setItem('informacao', JSON.stringify(informacao));
        }
        if (!localStorage.gamificacao) {
            localStorage.setItem('gamificacao', JSON.stringify(gamificacao))
;
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