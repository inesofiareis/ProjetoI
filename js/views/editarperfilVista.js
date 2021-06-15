import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class genero{
    constructor(){
        this.utilizadorControlador = new utilizadorControlador();

        this.fotoPerfil = document.querySelector('.fotoPerfil');
        this.nomeUtilizador = document.querySelector('#txtNome');
        this.emailUtilizador = document.querySelector('#txtEmail');
        this.palavraPasse = document.querySelector('#txtPass');
        this.palavraPasse2 = document.querySelector('#txtConfPass');
        this.botaoAlterar = document.querySelector('#botaoAlterar');
        this.tabelaUtilizadores = document.querySelector('#gerirUtilizadores');
        this.nAtividades = document.querySelector('.atividadesFeitas');
        this.nomeAtividades = document.querySelector('#nomeDaAtividade');
        this.pontuacaoAtividade = document.querySelector('.pontuacaoAtividade');
        this.avataresModal = document.querySelector('#avataresModal');
        this.guardarAvatar = document.querySelector('#guardarAvatar');

        this.atualizarDados();
        this.gerirUtilizadores();
        this.avatar()
        this.placeholder();
        this.botaoAlterarTipo();
        this.botaoRemover();
        this.botaoBloquear();
        this.estatisticas();
        this.estatisticasAtividade();
        this.avataresModalF()
        this.guardarAvatarF()
    }

    atualizarDados(){
        this.botaoAlterar.addEventListener("click", () =>{ 
            try {

                if (this.palavraPasse.value != this.palavraPasse2.value) {
                    
                    throw Error('As passswords não são iguais');
                }

                this.utilizadorControlador.setEditar(this.nomeUtilizador.value, this.emailUtilizador.value,this.palavraPasse.value);
                this.placeholder();
            
            } catch (e) {
                document.querySelector('.infoAlteravel').innerHTML += `<div class="alert alert-danger" role="alert">${e}</div>`;
            }
        })
    }

    avatar(){
        let avatar = this.utilizadorControlador.avatar()

        this.fotoPerfil.src = avatar
    }

    placeholder(){
        let atualNomeUtilizador = this.utilizadorControlador.utilizadoresInfo()
        let email = this.utilizadorControlador.email()
        
        this.nomeUtilizador.placeholder = atualNomeUtilizador.nomeUtilizador;
        this.emailUtilizador.placeholder = email;
    }

    gerirUtilizadores(){    
        let utilizadores = this.utilizadorControlador.todosUtilizadores();

        let tabela = `<div class="col-3"></div>
        <table class="table table-striped table-inverse table-responsive col-6" >
            <thead class="thead-inverse">
                <tr>
                    <th>Nome e Sobrenome</th>
                    <th>Nome de utilizador</th>
                    <th>Email</th>
                    <th>Género</th>
                    <th>Tipo</th> 
                    <th>Alterar</th>
                    <th>Remover</th>
                    <th>Bloquear</th>
                    <th></th>
                </tr>
                </thead>`

        for (let i = 0; i < utilizadores.length; i++){ 
            let estado = this.utilizadorControlador.estados(utilizadores[i].nomeUtilizador)

            if (estado == 'bloqueado'){
                tabela += `<tr class='table-danger'>`
            }
            else {
                tabela += `<tr>`
            }
            
             tabela += `
                <td>${utilizadores[i].nome} ${utilizadores[i].apelido}</td>
                <td>${utilizadores[i].nomeUtilizador}</td>
                <td>${utilizadores[i].email}</td>
                <td>${utilizadores[i].genero}</td>
                <td>${utilizadores[i].tipo}</td>
                <td><input type="button" class='btn btn-secondary alterar'value='Alterar' id='${utilizadores[i].nomeUtilizador}'></td>
                <td><input type="button" class='btn btn-danger remover' value='Remover' id='${utilizadores[i].nomeUtilizador}'></td>
                <td><input type="button" class='btn btn-warning bloquear' value='Bloquear' id='${utilizadores[i].nomeUtilizador}'></td>
            </tr>`
        }
        
        tabela += `</table>`
        if (this.utilizadorControlador.admin()) {
            this.tabelaUtilizadores.innerHTML = tabela;
   
        }

        
    }

    botaoAlterarTipo(){
        for (const btnAlterar of document.querySelectorAll('.alterar')){
            btnAlterar.addEventListener('click', event =>{
            this.utilizadorControlador.alterar(event.target.id);
            location.reload();
            }) 
        }
        
    }

    botaoRemover(){
        for (const btnRemover of document.querySelectorAll('.remover')){
            btnRemover.addEventListener('click', event =>{
                this.utilizadorControlador.remover(event.target.id);
                location.reload();
            })
        }
    }

    botaoBloquear(){
        for (const btnBloquear of document.querySelectorAll('.bloquear')){
            btnBloquear.addEventListener('click', event =>{
            this.utilizadorControlador.bloquearUtilizador(event.target.id)
            location.reload();
            })
        }
    }

    estatisticas(){
        let atividades = this.utilizadorControlador.getAtividades();
        this.nAtividades.innerHTML = atividades.length;
        for (let atividade of atividades){
            this.nomeAtividades.innerHTML += `<option value="${atividade.atividade}">${atividade.atividade}</option>`
        }
        

    }

    estatisticasAtividade(){
        this.nomeAtividades.addEventListener('change', () =>{
            let atividades = this.utilizadorControlador.getAtividades();
            let atividadePontuacao = this.utilizadorControlador.atividadePontuacao(atividades, this.nomeAtividades.value)
            this.pontuacaoAtividade.innerHTML = `<h4 class="pontuacaoAtividade text-justify textoAtividade"> Nessa atividade tiveste ${atividadePontuacao} pontos!</h4>`
        })
    }

    avataresModalF(){
        let pontuacao = this.utilizadorControlador.getPontos()
        let novosAvatares = `<div class="row">
                                <div class="col-3 novoAvatar">
                                    <input type="image" src="../img/avatares/Avatar.png">
                                </div>`

        if (pontuacao >= 300){
            novosAvatares += `<div class="col-3 novoAvatar">
                                <input type="image" src="../img/avatares/andreAvatar.png">
                            </div>`
        }
        if (pontuacao >= 600){
            novosAvatares += `<div class="col-3 novoAvatar">
                                <input type="image" src="../img/avatares/doraAvatar.png">
                            </div>` 
        }
        if (pontuacao >= 900){
            novosAvatares += `<div class="col-3 novoAvatar">
                                <input type="image" src="../img/avatares/xicoAvatar.png">
                            </div>`
        }
        if (pontuacao >= 1200){
            novosAvatares += `<div class="col-3 novoAvatar">
                                <input type="image" src="../img/avatares/tatinhasAvatar.png">
                            </div>`
        }

        novosAvatares += `</div>`

        this.avataresModal.innerHTML = novosAvatares
        this.novoAvatar = document.querySelectorAll('.novoAvatar')
        this.novoAvatarF()
    }

    novoAvatarF(){
        for (let novo of this.novoAvatar){
            novo.addEventListener('click', event =>{
                for (let limpar of this.novoAvatar){
                    limpar.style.background = ''
                }
                this.utilizadorControlador.setAvatar(event.target.src)
                novo.style.background = 'lightgrey'
            })
        }
    }

    guardarAvatarF(){
        this.guardarAvatar.addEventListener('click', () => {
            location.reload()
        })
    }
}