import utilizadorControlador from '../controllers/utilizadorControlador.js';

export default class pontuacaoMedalhas{

        constructor(){
            this.utilizadorControlador = new utilizadorControlador();

            this.tabelaMedalhas = document.querySelector('#tabelaMedalhas');

            this.conquistas();
        }

        conquistas(){
            let pontos = this.utilizadorContolador.getPontos();

            if(pontos == 1000){
                document.getElementById('#primeiraBadge').style.visibility = 'visible';

            }else if(pontos == 2000){
                document.getElementById('#segundaBadge').style.visibility = 'visible';

            }else if(pontos == 3000){
                document.getElementById('#terceiraBadge').style.visibility = 'visible';

            }else if(pontos == 5000){
                document.getElementById('#medalha').style.visibility = 'visible';

            }else if(pontos == 10000){
                document.getElementById('#trofeu').style.visibility = 'visible';
            }
        }
}