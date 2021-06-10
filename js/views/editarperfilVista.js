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
    }

    atualizarDados(){
        this.botaoAlterar.addEventListener("click", () =>{ 
            try {

                if (this.palavraPasse.value != this.palavraPasse2.value) {
                    
                    throw Error('As passswords não são iguais');
                }

                this.utilizadorControlador.setEditar(this.nomeUtilizador.value, this.emailUtilizador.value,this.palavraPasse.value);

            
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
                    <th>Alterar</th>
                    <th>Remover</th>
                    <th>Bloquear</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row utilizadorTabela"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row utilizadorTabela"></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
        </table>`
        
        if (this.utilizadorControlador.admin() == 'true') {
            this.tabelaUtilizadores.innerHTML = tabela;
   
        }
    }

}