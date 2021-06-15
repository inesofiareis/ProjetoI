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
        const informacao =[{
            id: 1,
            capitulo: 'capitulo1',
            titulo: "Covid-19",
            subtitulo: 'Já ouviste falar do corona vírus?',
            imagem: '../img/info/infetada.jpg',
            texto: ['Os vírus são seres estranhos. Só vistos num telescópio, para sobreviverem, tentam viajar em grupo, entrando nariz,pela boca ou até mesmo pelos olhos das pessoas. São eles que fazem com que fiques doentinho. O corona é o vírus que faz a doença covid-19.', 'Não precisas de te preocupar, porque felizmente o teu corpo sabe proteger-se se tiveres cuidado.<br>Daqui a alguns capítulos, vou ensinar-te como o fazer.']
        },
        {
            id: 2,
            capitulo: 'capitulo2',
            titulo: "A pandemia",
            subtitulo: 'Sabes o que é uma pandemia? Eu, o Xico, explico-te!',
            imagem: '../img/info/pandemia.jpg',
            texto: ['A COVID-19 foi considerada uma pandemia pela OMS (Organização Mundial de Saúde), o que significa que esta doeça infeciosa se espalhou pelo mundo e afetou muitas pessoas em muitos países diferentes.', 'É normal estares com medo numa altura destas.<br>Não tens de sentir vergonha por teres medo, todos estamos assim!<br>Nunca te esqueças, isto vai passsar e tudo vai ficar bem.']
        },
        {
            id: 3,
            capitulo: 'capitulo3',
            titulo: "Estarei com covid?",
            subtitulo: 'Sabes que o covid é uma doença, mas como sabes se estás ou não infetado? Fica aqui a saber mais.',
            imagem: '../img/info/cama doente.jpg',
            texto: ['Os grandes sinais desta doença são a febre, estares com tosse e teres alguma falta de ar, dores de cabeça, garganta, não sentires cheiro nem sabor ao comer.<br>Os sintomas da covid são parecidos com os da gripe, por isso, deves ter ainda mais cuidado!']
        },
        {
            id: 4,
            capitulo: 'capitulo4',
            titulo: "A transmissão",
            subtitulo: 'Como é que o vírus passa de pessoa para pessoa?',
            imagem: '../img/info/transmitir.jpg',
            texto: ['O vírus transmite-se pelas gotinhas que "lançamos" ao espirrar, tossir ou até mesmo falar.<br>Também o podes apanhar ao tocar em coisas que estão infetadas.']
        },
        {
            id: 5,
            capitulo: 'capitulo5',
            titulo: "Protege-te",
            subtitulo: 'Sabes como te proteger desta doença?',
            imagem: '../img/info/lavar maos.jpg',
            texto: [`Tenta ao máximo ter sempre estes cuidados:
            <li>
                <ul>Lava muitas vezes as mãos.</ul>
                <ul>Usa água e sabonete ou algo que contenha álcool.</ul>
                <ul> Afasta-te pelo menos 2 metros de alguém que esteja a espirrar ou a tossir.</ul>
                <ul>Não toque nos olhos, no nariz ou na boca.</ul>
                <ul>Cubre o nariz e a boca com o cotovelo ou com um lenço quando tossires ou espirrares.</ul>
                <ul>Se te sentires doente, com tosse, febre ou dificuldade em respirar, fica em casa e procura ajuda de um médico.</ul>
            </li>`]
        },
        {
            id: 6,
            capitulo: 'capitulo6',
            titulo: "Colocar a máscara",
            subtitulo: 'Também tens de ter cuidado com a forma como colocas a máscara.',
            imagem: '../img/info/meter mascara.jpg',
            texto: [`Quando tiveres de meter a máscara, segue estes passos comigo:
            <li>
                <ul>Antes de colocar a máscara, lava as mãos com água e sabonete ou com uma solução que tenha álcool;</ul>
                <ul>Pega na máscara pelos elásticos;</ul>
                <ul>Mete-a na posição correta de modo a ficar apertadinha na boca e no nariz;</ul>
                <ul> Não metas as mãos na máscara enquanto a estiveres a usar!</ul>
                <ul>Antes de a tirar, lava as mãos com água e sabonete ou com uma solução que tenha álcool;</ul>
                <ul>Tira-a segurando nos elásticos e coloca-a no lixo, se descartável ou para lavar, se for reutilizável, de modo a não infetar nada;</ul>
                <ul>Em último lugar, lavar outra vez as mãos.</ul>
            
            </li>`]
        }]

        const jogos = [{
            id: 1,
            nome: 'Ajudar o Xico',
            foto: '../img/jogos/A missao do Xico.png',
            genero: 'Questionários',
            descricao: 'Ajuda o Xico a recuperar a suas informações',
            avaliacao: {positiva: 5,
                        normal: 2,
                        negativa: 0},
            detelhesJogo: {
                                    id:1,
                                    perguntas: ['O que devo fazer quando chego a casa?', 'Qual não é uma forma de me proteger do vírus?', 'Qual a distância que devo manter?', 'Qual destes não é um sintoma do covid-19?', 'O que temos de usar no rosto para nos proteger?'],
                                    respostasCorretas: ['Lavar as mãos', 'Ir correr', '2m', 'Espirros', 'Mascara'],
                                    alternativas: [
                                                    ['Ir jogar', 'Comer aquelas bolachas deliciosas da mãe', 'Lavar as mãos', 'Ver televisão'],
                                                    ['Mascara', 'Lavar as mãos', 'Ir correr', 'Distanciamento'],
                                                    ['2m', '0.5m', '1m', '5m'],
                                                    ['Tosse', 'Febre', 'Dores de cabeça', 'Espirros'],
                                                    ['Alcool em gel', 'Mascara', 'Protetor Solar', 'Capacete']
                                                ]
                                    }
                                },
            {   id: 2,
                nome: 'Preencher os espaços',
                foto: '../img/jogos/virus.png',
                genero: 'Preencher espaços',
                descricao: 'Mete as imagens nos seus repetivos lugares',
                avaliacao: {positiva: 5,
                            normal: 2,
                            negativa: 0},
                detelhesJogo: [ {caixa: "Vírus", imagem: "../../img/jogos/virus.png"},
                                {caixa: "Máscara", imagem: "../../img/jogos/mascara.png"},
                                {caixa: "Álcool-gel", imagem: "../../img/jogos/alcool.png"},
                                {caixa: "Distanciamento", imagem: "../../img/jogos/distanciamento.png"},
                                {caixa: "Lavar as mãos", imagem: "../../img/jogos/lavar maos.png"},
                                {caixa: "Doença", imagem: "../../img/jogos/tobias febre.png"}]
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
                email: 'email@email.com',
                palavraPasse: 'pass2',
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
                email: 'email@email.com',
                palavraPasse: 'pass3',
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