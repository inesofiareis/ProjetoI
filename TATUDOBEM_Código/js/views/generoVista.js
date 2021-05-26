// pegar em cada texto e trocar o innerHTML para o genero correto

import UserController from '../controllers/UserController.js'

const generoUtilizador = user.genero;
let txtJogos = document.getElementById('textoJogos');
let txtInicio = document.getElementById('textoInicio')

if (generoUtilizador == 'feminino'){
    txtJogos.innerHTML = 'Sê bem-vinda à área de jogos! Explora e diverte-te!';
    txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19. Ele salta de pessoa em pessoa e deixa-as muito doentes. Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado. Estás preocupada e assustada? Comigo e com os meus amigos, tu estás segura.'
}else if(generoUtilizador == 'masculino'){
    txtJogos.innerHTML = 'Sê bem-vindo à área de jogos! Explora e diverte-te!';
    txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19. Ele salta de pessoa em pessoa e deixa-as muito doentes. Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado. Estás preocupado e assustado? Comigo e com os meus amigos, tu estás seguro.'
}else{
    txtJogos.innerHTML = 'Sê bem-vinde à área de jogos! Explora e diverte-te!';
    txtInicio.innerHTML = 'Surgiu um bichinho perigoso chamado covid-19. Ele salta de pessoa em pessoa e deixa-as muito doentes. Os teus pais dizem-te que está no mundo inteiro, por isso, tens de ter muito cuidado. Estás preocupade e assustade? Comigo e com os meus amigos, tu estás segure.'
}
