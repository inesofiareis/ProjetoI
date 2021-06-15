import utilizadorControlador from '../controllers/utilizadorControlador.js';
import gamificacaoControlador from '../controllers/gamificacaoControlador.js';

export default class pontuacaoMedalhas{

        constructor(){
            this.utilizadorControlador = new utilizadorControlador();
            this.gamificacaoControlador = new gamificacaoControlador()
            this.tabelaMedalhas = document.querySelector('#tabelaMedalha');
            this.adicionar = document.querySelector('#funcaoAdicionar');
            this.botaoAdicionarMedalha = document.querySelector('#botaoAdicionarMedalha')
            // this.adicionarFuncao = document.querySelector('#funcaoAdicionar');
            this.btnAdicionar();
            // this.botaoAdicionar();
            this.conquistas();
            this.novoBadge()

        }

        conquistas(){
            let pontos = this.utilizadorControlador.getPontos();

            if(pontos >= 1000){
                this.tabelaMedalhas.innerHTML += `<div class="media-body order-2 order-lg-1" id="primeiraBadge">
                <h5 class="mt-0 font-weight-bold mb-2">Consegui 1000 pontos!</h5>
                <p class="font-italic text-muted mb-0 small">Estás a esforçar-te para tornar este mundo num lugar melhor!</p>
                <img src="../img/premios/Badge.png" alt="badge" width="200" class="ml-lg-5 order-1 order-lg-2" />
                </div>`
            }

            if(pontos >= 2000){
                this.tabelaMedalhas.innerHTML += `<div class="media-body order-2 order-lg-1" id="segundaBadge" >
                <h5 class="mt-0 font-weight-bold mb-2">Consegui 2000 pontos!</h5>
                <p class="font-italic text-muted mb-0 small">Estás a proteger-te e a ajudar os que amas!</p>
                <img src="../img/premios/Badge.png" alt="badge" width="200" class="ml-lg-5 order-1 order-lg-2" />
                </div>`
            }

            if(pontos >= 3000){
                this.tabelaMedalhas.innerHTML += `<div class="media-body order-2 order-lg-1" id="terceiraBadge" >
                <h5 class="mt-0 font-weight-bold mb-2">Yey!Cheguei aos 3000 pontos!</h5>
                <p class="font-italic text-muted mb-0 small">O mundo é um lugar melhor contigo aqui</p>  
                <img src="../img/premios/Badge.png" alt="badge" width="200" class="ml-lg-5 order-1 order-lg-2" />
                            
                </div>`
            }
            
            if(pontos >= 5000){
                this.tabelaMedalhas.innerHTML += `<div class="media-body order-2 order-lg-1" id="medalha" >
                <h5 class="mt-0 font-weight-bold mb-2">Consegui 5000 pontos!</h5>
                <p class="font-italic text-muted mb-0 small">O Tatinhas e todos os seus amigos estão muito orgulhosos de ti!</p>
                <img src="../img/premios/Medalha.png" alt="badge" width="200" class="ml-lg-5 order-1 order-lg-2" />
                </div>` 
            }

            if(pontos >= 10000){
                this.tabelaMedalhas.innerHTML += `<div class="media-body order-2 order-lg-1" id="trofeu">
                <h5 class="mt-0 font-weight-bold mb-2"> WOW 10000 PONTOS!</h5>
                <p class="font-italic text-muted mb-0 small"></p>
                <img src="../img/premios/Trofeu.png" alt="badge" width="200" class="ml-lg-5 order-1 order-lg-2" />
                </div>`
            }

            let novasMedalhas = this.gamificacaoControlador.getMedalhas()


            for (let medalha of novasMedalhas){
                if(pontos >= medalha.pontos){
                    this.tabelaMedalhas.innerHTML += `<div class="media-body order-2 order-lg-1" id="Badge" >
                    <h5 class="mt-0 font-weight-bold mb-2">${medalha.nome}</h5>
                    <p class="font-italic text-muted mb-0 small">${medalha.descricao}</p>  
                    <img src="${medalha.img}" alt="badge" width="200" class="ml-lg-5 order-1 order-lg-2" />

                    </div>`
                }
            }
        }

        btnAdicionar(){
            if (this.utilizadorControlador.admin()) {
                this.botaoAdicionarMedalha.style.visibility = 'visible'

                this.adicionar.innerHTML = `<label for="nomeBadge">Nome</label>
                <input type="text" id="nomeBadge">
                <label for="descricaoBadge">Descrição</label>
                <input type="text" id="descricaoBadge">
                <label for="pontosNecessariosBadge">Pontos Necessários</label>
                <input type="number" id="pontosNecessariosBadge">`

                this.nomeBadge = document.querySelector('#nomeBadge');
                this.descricaoBadge = document.querySelector('#descricaoBadge');
                this.pontosNecessariosBadge = document.querySelector('#pontosNecessariosBadge');
            }

        }

        novoBadge(){
            botaoAdicionarMedalha.addEventListener("click", () => {
                let pontos = this.utilizadorControlador.getPontos();
                
                this.gamificacaoControlador.guardarMedalha(this.nomeBadge.value, this.descricaoBadge.value, '../img/premios/Badge.png', this.pontosNecessariosBadge.value)

                location.reload()
            })
        }
}