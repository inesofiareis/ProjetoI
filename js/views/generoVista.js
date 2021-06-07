// pegar em cada texto e trocar o innerHTML para o genero correto// done

import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class genero{
    constructor(){
        this.utilizadorControlador = new utilizadorControlador();

        // this.txtJogos = document.getElementById('textoJogos');
        this.txtInicio = document.getElementsByClassName('textoInicio');
        this.textoGenero();
    }


    textoGenero(){
        const generoUtilizador = this.utilizadorControlador.getGenero();
        alert(generoUtilizador)
        if (generoUtilizador == 'Feminino'){
            // txtJogos.innerHTML = 'Sê bem-vinda à área de jogos! Explora e diverte-te!';
            this.txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19. Ele salta de pessoa em pessoa e deixa-as muito doentes. Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado. Estás preocupada e assustada? Comigo e com os meus amigos, tu estás segura.';
        }else if(generoUtilizador == 'Masculino'){
            console.log(this.txtInicio.innerHTML);
            // txtJogos.innerHTML = 'Sê bem-vindo à área de jogos! Explora e diverte-te!';
            this.txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19. Ele salta de pessoa em pessoa e deixa-as muito doentes. Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado. Estás preocupado e assustado? Comigo e com os meus amigos, tu estás seguro.';
            console.log(this.txtInicio.innerHTML);
        }else{
            // txtJogos.innerHTML = 'Sê bem-vinde à área de jogos! Explora e diverte-te!';
            this.txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19. Ele salta de pessoa em pessoa e deixa-as muito doentes. Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado. Estás preocupade e assustade? Comigo e com os meus amigos, tu estás segure.';
        }
    }

}
