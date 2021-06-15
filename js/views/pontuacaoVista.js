import utilizadorControlador from '../controllers/utilizadorControlador.js';

export default class pontuacaoMedalhas{

        constructor(){
            this.utilizadorControlador = new utilizadorControlador();
            this.tabelaMedalhas = document.querySelector('#tabelaMedalha');
            this.botaoAdicionarMedalha = document.querySelector('#botaoAdicionar')
            this.adicionar = document.querySelector('#funcaoAdicionar');
            // this.adicionarFuncao = document.querySelector('#funcaoAdicionar');
            this.btnAdicionar();
            this.adicionarBadge();
            // this.botaoAdicionar();
            this.conquistas();
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
        }

        btnAdicionar(){
            if (this.utilizadorControlador.admin()) {
                this.botaoAdicionarMedalha.style.visibility = 'visible'

                this.adicionar.innerHTML = `<label for="nome">Nome</label>
                <input type="text" id="nome">
                <label for="descricao">Descrição</label>
                <input type="text" id="descricao">
                <label for="pontosNecessarios">Pontos Necessários</label>
                <input type="number" id="pontosNecessarios">`
            }

            // this.adicionarBadge();
        }

        adicionarBadge(){
            document.querySelector('#botaoAdicionar').addEventListener('click', () => {
                alert('boa')

                let nome = document.querySelector('#nome');
                let descricao = document.querySelector('#descricao');
                let pontosNecessarios = document.querySelector('#pontosNecessarios');
                let pontos = this.utilizadorControlador.getPontos();

                if(pontos >= pontosNecessarios){
                    this.tabelaMedalhas.innerHTML += `<div class="media-body order-2 order-lg-1" id="Badge" >
                    <h5 class="mt-0 font-weight-bold mb-2">${nome}</h5>
                    <p class="font-italic text-muted mb-0 small">${descricao}</p>  
                    <img src="../img/premios/Badge.png" alt="badge" width="200" class="ml-lg-5 order-1 order-lg-2" />
                                
                    </div>`
                }

            })
          

        }







//         botaoAdicionar(){
//             if (this.utilizadorControlador.admin()) {
//                 this.tabelaMedalhas.innerHTML = `<button type="submit" class="btn btn-outline-danger" id="botaoAdicionar">Adicionar Badge</button>`;  
//             }
//             let nome = document.querySelector('#nomeBadge');
//             let descricao = document.querySelector('#descricaoBadge');
//             let pontosNecessarios = document.querySelector('#pontosNecessarios');
//             let pontos = this.utilizadorControlador.getPontos();
            
//             if(pontos >= pontosNecessarios){
//                 this.tabelaMedalhas.innerHTML += `<div class="media-body order-2 order-lg-1" id="trofeu">
//                 <h5 class="mt-0 font-weight-bold mb-2"> ${nome}</h5>
//                 <p class="font-italic text-muted mb-0 small">${descricao}</p>
//                 <img src="../img/premios/Badge.png" alt="badge" width="200" class="ml-lg-5 order-1 order-lg-2" />
//                 </div>`
             
//             }
//         }

//         adicionarBadge(){
//             let resultado

//             if (this.utilizadorControlador.admin()) {
//                 resultado += `<button class="btn btn-danger" id="botaoAdicionar">Adicionar Badge</button>`
//             }
            
            

            
//             this.botaoAdicionarBadge = document.querySelector('#botaoAdicionar')
//             // this.botaoAdicionarBadge.addEventListener('click', () => {
//                 //inserir badge
//                 // // this.adicionarFuncao.innerHTML = `<input type="text" id="nomeBadge"><input type="text" id="descricaoBadge"><input type="number" id="pontosNecessarios">`  
                
//             // })
//         }
}