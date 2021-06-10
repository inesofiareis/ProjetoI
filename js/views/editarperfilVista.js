import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class genero{
    constructor(){
        this.utilizadorControlador = new utilizadorControlador();

        this.nomeUtilizador = document.querySelector('#txtNome');
        this.emailUtilizador = document.querySelector('#txtEmail');
        this.palavraPasse = document.querySelector('#txtPass');
        this.palavraPasse2 = document.querySelector('#txtConfPass');
        this.botaoAlterar = document.querySelector('#botaoAlterar');
        this.tabelaUtilizadores = document.querySelector('#gerirUtilizadores')
        this.atualizarDados();
        this.gerirUtilizadores();
        this.placeholder();
        this.botaoAlterarTipo();
        this.botaoRemover();
        this.botaoBloquear();
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
                alert('Erro')
                // mensagem.innerHTML = `<div class="alert alert-danger" role="alert">${e}</div>`;
            }
        })
    }

    placeholder(){
        let atualNomeUtilizador = this.utilizadorControlador.utilizadoresInfo()
        let email = this.utilizadorControlador.email()
        
        this.nomeUtilizador.placeholder = atualNomeUtilizador.nomeUtilizador;
        this.emailUtilizador.placeholder = email;
    }

    gerirUtilizadores(){    
        let utilizadores = this.utilizadorControlador.todosUtilizadores();

        let tabela = `<div class="col-2"></div>
        <div class="col-2 mt-5">
            <button type="button" class="btn btn-primary col-4">Inserir</button>
        </div>
        
        <table class="table table-striped table-inverse table-responsive col-4" >
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

}