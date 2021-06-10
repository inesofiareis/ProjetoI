// pegar em cada texto e trocar o innerHTML para o genero correto// done

import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class genero{
    constructor(){
        this.utilizadorControlador = new utilizadorControlador();

        this.txtJogos = document.querySelector('.textoJogos');
        this.txtInicio = document.querySelector('.textoInicio');
        this.textoGenero();
    }


    textoGenero(){
        const generoUtilizador = this.utilizadorControlador.getGenero();
        if (generoUtilizador == 'Feminino'){
            // this.txtJogos.innerHTML = 'Sê bem-vinda à área de jogos! Explora e diverte-te!';
            this.txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19.<br> Ele salta de pessoa em pessoa e deixa-as muito doentes.<br> Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado.<br> Estás preocupada e assustada?<br> Comigo e com os meus amigos, tu estás segura.';
        }else if(generoUtilizador == 'Masculino'){
            // this.txtJogos.innerHTML = 'Sê bem-vindo à área de jogos! Explora e diverte-te!';
            this.txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19.<br> Ele salta de pessoa em pessoa e deixa-as muito doentes.<br> Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado.<br> Estás preocupado e assustado?<br> Comigo e com os meus amigos, tu estás seguro.';
        }else{
            // this.txtJogos.innerHTML = 'Sê bem-vinde à área de jogos! Explora e diverte-te!';
            this.txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19.<br> Ele salta de pessoa em pessoa e deixa-as muito doentes.<br> Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado.<br> Estás preocupade e assustade?<br> Comigo e com os meus amigos, tu estás segure.';
        }
    }
    
    textoJogo(){
        const generoUtilizador = this.utilizadorControlador.getGenero();
        if (generoUtilizador == 'Feminino'){
            return 'Sê bem-vinda à área de jogos! Explora e diverte-te!';
        }else if(generoUtilizador == 'Masculino'){
            return 'Sê bem-vindo à área de jogos! Explora e diverte-te!';
            
        }else{
            return 'Sê bem-vinde à área de jogos! Explora e diverte-te!';
        }

    }

}
