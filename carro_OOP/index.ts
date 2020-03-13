class Carro {

    nome: string;
    marca: string;
    ano_fabricacao: number;
    velocidadeAtual: number;
    velocidadeMax: number;

    constructor(nome:string,marca: string,
        ano_fabricacao: number,velocidadeAtual: number,velocidadeMax: number){
            this.nome = nome;
            this.marca =marca;
            this.velocidadeAtual = velocidadeAtual || 0;
            this.velocidadeMax = velocidadeMax;
        }

        //método para acelerar
        acelerar(){
            if(this.velocidadeAtual < this.velocidadeMax){
                this.velocidadeAtual ++;
                console.log(`A velocidade atual aumentou para:  ${this.velocidadeAtual} km/h`)

            }
            else{
                console.log("Velocidade esta no maximo!!!")
            }

         }

         desacelerar(){
             if(this.velocidadeAtual > 0){
            this.velocidadeAtual --
            console.log(`diminuindo velocidade atual é : ${this.velocidadeAtual} km/h`)

            }else{
                console.log("Carro parado!")
            }
      }

}

//instanciar objeto
let carro1 = new Carro("Fit","Honda",2020,101,100)
carro1.acelerar()
carro1.acelerar()
carro1.desacelerar()