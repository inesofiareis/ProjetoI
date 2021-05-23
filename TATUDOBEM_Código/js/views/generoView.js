// pegar em cada texto e trocar o innerHTML para o genero correto

import UserController from '../controllers/UserController.js'

const generoUtilizador = user.genero;
let txtJogos = document.getElementById('textoJogos');
//pagina inicial

if (generoUtilizador == 'feminino'){
    txtJogos.innerHTML = 'Sê bem-vinda à área de jogos! Explora e diverte-te!';
}else if(generoUtilizador == 'masculino'){
    txtJogos.innerHTML = 'Sê bem-vindo à área de jogos! Explora e diverte-te!';
}else{
    txtJogos.innerHTML = 'Sê bem-vinde à área de jogos! Explora e diverte-te!';
}
