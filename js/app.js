import entrarVista from './views/entrarVista.js'
import registoVista from './views/registoVista.js'
// import perfilVista from './views/editarperfilVista.js'

class App {
    constructor() {
        this.routes = {
            '': [],
            'index': [],
            'entrar': [entrarVista],
            'registo': [registoVista],
            // 'perfil': [utilizadorVista, perfilVista]
        };

        // import dummy data for testing purposes
        this.#importDataFixtures();

        // instantiate the views mapped in the routes object
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
                dataNascimento: '24/08/2002',
                genero: 'Femenino',
                pontos: 1000,
                avatar: '../img/navbar/tatudobem.png',
                tipo: 'administrador',
                estado: 'regular'
            },
            {
                id: 2,
                nome: "Sofia",
                apelido: "Freitas",
                nomeUtilizador: 'fifs',
                email: 'email@email.com',
                palavraPasse: 'pass2',
                dataNascimento: '07/11/2001',
                genero: 'Femenino',
                pontos: 1000,
                avatar: '../img/navbar/tatudobem.png',
                tipo: 'administrador',
                estado: 'regular'
            },
            {
                id: 3,
                nome: "Paulo",
                apelido: "Rodrigues",
                nomeUtilizador: 'PauloR',
                email: 'email@email.com',
                palavraPasse: 'pass3',
                dataNascimento: '16/09/2000',
                genero: 'Masculino',
                pontos: 1000,
                avatar: '../img/navbar/tatudobem.png',
                tipo: 'administrador',
                estado: 'regular'
            }
        ];

        // Load the fixtures in case there is no data in the local storage 
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