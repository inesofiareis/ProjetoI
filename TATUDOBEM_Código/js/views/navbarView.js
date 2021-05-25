import UserController from '../controllers/UserController.js'

let nome = document.getElementById('perfil');
let imagem = document.getElementById('avatarImagem') // verificar nome da variavel

nome.innerHTML = `<p id="perfil" class="avatarTexto">${user.nomeUtilizador}</p>`
imagem.src = `<img src="${user.avatar}" width="30" height="30" alt="logo" class="avatarImagem" id="avatarImagem"></img>` // verificar nome da variavel
