// inicio da definição da classe
var Cumprimento = /** @class */ (function () {
    //Método construtor
    function Cumprimento(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
    //método como se fosse a function do JS
    Cumprimento.prototype.mostrarNomeIdade = function () {
        console.log("A pessoa " + this.nome + " tem " + this.idade + " anos");
    };
    return Cumprimento;
}());
// fim da definição da classe
/* invocando a função e o resultado vou armazenar na variável de
 memória resposta*/
var pessoa1 = new Cumprimento("Alex", 26); //instaciando o objeto da classe 
pessoa1.mostrarNomeIdade();
