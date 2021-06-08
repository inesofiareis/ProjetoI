import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class genero{
    constructor(){
        this.utilizadorControlador = new utilizadorControlador();

        this.nomeUtilizador = document.querySelector('#txtNome');
        this.emailUtilizador = document.querySelector('#txtEmail');
        this.palavraPasse = document.querySelector('#txtPass');
        this.palavraPasse2 = document.querySelector('#txtConfPass');
        this.botaoAlterar = document.querySelector('#botaoAlterar');
        this.atualizarDados();

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

}