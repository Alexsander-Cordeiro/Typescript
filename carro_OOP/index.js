var Carro = /** @class */ (function () {
    function Carro(nome, marca, ano_fabricacao, velocidadeAtual, velocidadeMax) {
        this.nome = nome;
        this.marca = marca;
        this.velocidadeAtual = velocidadeAtual || 0;
        this.velocidadeMax = velocidadeMax;
    }
    //método para acelerar
    Carro.prototype.acelerar = function () {
        if (this.velocidadeAtual < this.velocidadeMax) {
            this.velocidadeAtual++;
            console.log("A velocidade atual aumentou para:  " + this.velocidadeAtual + " km/h");
        }
        else {
            console.log("Velocidade esta no maximo!!!");
        }
    };
    Carro.prototype.desacelerar = function () {
        if (this.velocidadeAtual > 0) {
            this.velocidadeAtual--;
            console.log("diminuindo velocidade atual \u00E9 : " + this.velocidadeAtual + " km/h");
        }
        else {
            console.log("Carro parado!");
        }
    };
    return Carro;
}());
//instanciar objeto
var carro1 = new Carro("Fit", "Honda", 2020, 101, 100);
carro1.acelerar();
carro1.acelerar();
carro1.desacelerar();
