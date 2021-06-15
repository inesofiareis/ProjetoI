// pegar em cada texto e trocar o innerHTML para o genero correto// done

import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class genero{
    constructor(){
        this.utilizadorControlador = new utilizadorControlador();

        this.txtJogos = document.querySelector('.textoJogos');
        this.txtInicio = document.querySelector('.textoInicio');
        this.textoGenero();
    }

    /**
     * Função que altera os determinantes do texto conforme o genero do utilizador
     */
    textoGenero(){
        const generoUtilizador = this.utilizadorControlador.getGenero();
        if (generoUtilizador == 'Feminino'){
            this.txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19.<br> Ele salta de pessoa em pessoa e deixa-as muito doentes.<br> Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado.<br> Estás preocupada e assustada?<br> Comigo e com os meus amigos, tu estás segura.';
        }else if(generoUtilizador == 'Masculino'){
            this.txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19.<br> Ele salta de pessoa em pessoa e deixa-as muito doentes.<br> Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado.<br> Estás preocupado e assustado?<br> Comigo e com os meus amigos, tu estás seguro.';
        }else{
            this.txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19.<br> Ele salta de pessoa em pessoa e deixa-as muito doentes.<br> Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado.<br> Estás preocupade e assustade?<br> Comigo e com os meus amigos, tu estás segure.';
        }
    }
}
