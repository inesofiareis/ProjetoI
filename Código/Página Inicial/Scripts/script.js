let textoInicial = document.getElementById("textoIntro");
let saudacao = document.getElementById("perfil")
let genero = "feminino";
let nome = "Batuti";

function loadGender() {

    if (genero == "masculino") {

        textoInicial.innerHTML = `Surgiu um bichinho perigoso chamado covid-19. Ele 
        salta de pessoa em pessoa e deixa-as muito doentes.
        Os teus pais dizem-te que está no mundo inteiro, por
        isso, tens de ter muito cuidado.
        Estás preocupado e assustado?
        Comigo e com os meus amigos, tu estás seguro!`

    } else if (genero == "feminino") {

        textoInicial.innerHTML = `Surgiu um bichinho perigoso chamado covid-19. Ele 
        salta de pessoa em pessoa e deixa-as muito doentes.
        Os teus pais dizem-te que está no mundo inteiro, por
        isso, tens de ter muito cuidado.
        Estás preocupada e assustada?
        Comigo e com os meus amigos, tu estás segura!`

    } else if (genero == "outro") {

        textoInicial.innerHTML = `Surgiu um bichinho perigoso chamado covid-19. Ele 
        salta de pessoa em pessoa e deixa-as muito doentes.
        Os teus pais dizem-te que está no mundo inteiro, por
        isso, tens de ter muito cuidado.
        Estás preocupade e assustade?
        Comigo e com os meus amigos, tu estás segure.`

    }
};

function loadGreeting() {
    saudacao.innerHTML = `Bom dia, ${nome}`
}