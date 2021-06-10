import entrarVista from './views/entrarVista.js'
import registoVista from './views/registoVista.js'
import navbarVista from './views/navbarVista.js'
// import infoVista from './views/infoVista.js'
import jogoVista from './views/jogoVista.js'
import jogoDetalheVista from './views/jogo-detalheVista.js'
import perfilVista from './views/editarperfilVista.js'
import generoVista from './views/generoVista.js'
// import amigoVista from './views/amigoVista.js'
// import tutorialVista from './views/tutorialVista.js'
// import pontuacaoVista from './views/pontuacaoVista.js'

class App {
    constructor() {
        this.routes = {
            '': [],
            'index': [],
            'entrar': [entrarVista],
            'registo': [registoVista],
            'inicio': [navbarVista, generoVista],
            'info': [navbarVista],
            'info-detalhe': [navbarVista],
            'jogo': [navbarVista, jogoVista],
            'jogo-detalhe': [navbarVista, jogoDetalheVista],
            'perfil': [navbarVista, perfilVista]
        };

        // importar dados fictícios para fins de teste
        this.#importDataFixtures();

        // instanciar as visualizações mapeadas no objeto de routes
        this.#instantiateViews();
    }

    #importDataFixtures() {
        const jogos = [{
            id: 1,
            nome: 'Ajudar o Xico',
            foto: '../img/jogos/A missao do Xico.png',
            genero: 'Questionários',
            descricao: 'Ajuda o Xico a recuperar a suas informações',
            avaliacao: [{postiva: 5,
                        normal: 2,
                        negativa: 0}],
            perguntasErespostas: [{
                                    id:1,
                                    idades: '<12',
                                    perguntas: ['Em que ano foi descoberto o covid-19?', 'Em que pais começou a pandemia?', 'Em que mes houve o primeiro caso de covid-19 em Portugal?', 'Qual destes não é um sintoma do covid-19?', 'O que temos de usar no rosto para nos proteger e proteger aos outros do corona virus'],
                                    respostasCorretas: ['2019', 'China', 'Março', 'Gripe', 'Mascara'],
                                    alternativas: [
                                                    ['2021', '2019', '2018', '2020'],
                                                    ['Portugal', 'Italia', 'China', 'India'],
                                                    ['Março', 'Janeiro', 'Abril', 'Fevereiro'],
                                                    ['Tosse', 'Febre', 'Dores de cabeça', 'Gripe'],
                                                    ['Alcool em gel', 'Mascara', 'Protetor Solar', 'Capacete']
                                                ]
                                    },
                                {
                                    id:2,
                                    idades: '>= 12',
                                    perguntas: ['pergunta1', 'pergunta2', 'pergunta3', 'pergunta4', 'pergunta5'],
                                    respostasCorretas: ['resposta1', 'resposta2', 'resposta3', 'resposta4', 'resposta5'],
                                    alternativas: [
                                                    ['alternativa1', 'alternativa2', 'alternativa3', 'alternativa4'],
                                                    ['alternativa1', 'alternativa2', 'alternativa3', 'alternativa4'],
                                                    ['alternativa1', 'alternativa2', 'alternativa3', 'alternativa4'],
                                                    ['alternativa1', 'alternativa2', 'alternativa3', 'alternativa4'],
                                                    ['alternativa1', 'alternativa2', 'alternativa3', 'alternativa4']
                                                ]
                                    }]
                                },
            {   id: 2,
                nome: 'Ajudar o Xico 2',
                foto: '../img/jogos/A missao do Xico.png',
                genero: 'Preencher espaços',
                descricao: 'Ajuda o Xico a recuperar a suas informações',
                perguntasErespostas: []
            }]

        const utilizadores = [
            {
                id: 1,
                nome: "Inês",
                apelido: "Reis",
                nomeUtilizador: 'InêsReis',
                email: 'email@email.com',
                palavraPasse: 'pass1',
                dataNascimento: '2002-08-24',
                genero: 'Feminino',
                pontos: 1000,
                avatar: '../img/navbar/tatudobem.png',
                tipo: 'administrador',
                estado: 'regular',
                amigos: ['fifs', 'PauloR'],
                atividades: 10
            },
            {
                id: 2,
                nome: "Sofia",
                apelido: "Freitas",
                nomeUtilizador: 'fifs',
                email: 'email@email.com',
                palavraPasse: 'pass2',
                dataNascimento: '2001-11-07',
                genero: 'Feminino',
                pontos: 1000,
                avatar: '../img/navbar/tatudobem.png',
                tipo: 'administrador',
                estado: 'regular',
                amigos: ['InêsReis', 'PauloR'],
                atividades: 10
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
                amigos: ['InêsReis', 'fifs'],
                atividades: 10
            }
        ];

        // Carrega as innformações, caso não haja na localStorage 
        if (!localStorage.utilizadores) {
            localStorage.setItem('utilizadores', JSON.stringify(utilizadores))
            localStorage.setItem('jogos', JSON.stringify(jogos));
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