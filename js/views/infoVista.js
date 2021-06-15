import infoControlador from '../controllers/infoControlador.js'
import utilizadorControlador from '../controllers/utilizadorControlador.js'

export default class infoVista{
    constructor() {
        this.infoControlador = new infoControlador()
        this.utilizadorControlador = new utilizadorControlador()

        this.txtInfos = document.querySelector('#textoInfo');
        this.txtInfo()

        this.btnsCapitulo = document.querySelectorAll('.btnCapitulo')
        this.btnCapitulo()

        this.btnAdicionar = document.querySelector('#botaoAdicionar')
        this.adicionar()

        this.btnguardarAlterações = document.querySelector('#guardarInfo')
        this.guardarAlterações()
    }

    txtInfo(){
        const generoUtilizador = this.utilizadorControlador.getGenero();
        let texto

        if (generoUtilizador == 'Feminino'){
            texto = 'Sê bem-vinda à área de aprender! Explora os capítulos que tenho para ti!';
        }else if(generoUtilizador == 'Masculino'){
            texto = 'Sê bem-vindo à área de aprender! Explora os capítulos que tenho para ti!';
            
        }else{
            texto = 'Sê bem-vinde à área de aprender! Explora os capítulos que tenho para ti!';
        }

        this.txtInfos.innerHTML = texto;
    }

    btnCapitulo(){
        for (let btnCapitulo of this.btnsCapitulo){
            btnCapitulo.addEventListener('click', () =>{
                this.infoControlador.setCapituloAtual(btnCapitulo.id)
                location.href = '../html/info-detalhe.html';
            })
        }
    }

    adicionar(){
        if (this.utilizadorControlador.admin()){
            this.btnAdicionar.style.visibility = 'visible'
        }
    }
    
    guardarAlterações(){
        this.btnguardarAlterações.addEventListener('click', () => {
            let capitulo = document.querySelector('#capituloEditar')
            let titulo = document.querySelector('#titulo')
            let subtitulo = document.querySelector('#subtitulo')
            let imagem = document.querySelector('#imagem')
            let texto1 = document.querySelector('#texto1')
            let texto2 = document.querySelector('#texto2')
        })
    }
}