export default class Informacao {
        constructor(titulo, textoInformacao, foto, pergunta, opcao) {
                this.titulo = titulo
                this.textoInformacao = textoInformacao
                this.foto = foto
                /* O questionário */
                /* Um */
                this.pergunta = pergunta
                this.opcao = opcao
                /*         this.opcaoDoisperguntaUm = 
                        this.opcaoTresperguntaUm =  */
                /* Dois */
                /*         this.perguntaDois = perguntaDois
                        this.opcaoUmperguntaDois = 
                        this.opcaoDoisperguntaDois = 
                        this.opcaoTresperguntaDois =  */
                /* Tres */
                /*         this.perguntaTres = perguntaTres
                        this.opcaoUmperguntaTres = 
                        this.opcaoDoisperguntaTres = 
                        this.opcaoTresperguntaTres =  */
                /* Quatro */
                /*         this.perguntaQuatro = perguntaQuatro
                        this.opcaoUmperguntaQuatro = 
                        this.opcaoDoisperguntaQuatro = 
                        this.opcaoTresperguntaQuatro =  */
                /* Cinco */
                /*         this.perguntaCinco = perguntaCinco */
                /*             this.opcaoUmperguntaCinco = 
                            this.opcaoDoisperguntaCinco = 
                            this.opcaoTresperguntaCinco = */

        }
        // Compara duas bandas pelo seu nome. Faz uma ordenação alfabética crescente
        static compare(tituloA, tituloB) {
                if (tituloA.titulo < tituloB.titulo)
                        return -1;
                if (tituloA.titulo > tituloB.titulo)
                        return 1;
                return 0;
        }
}