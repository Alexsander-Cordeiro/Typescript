// inicio da definição da classe
class Cumprimento {

    //atributos   nome do atributo: tipo
    nome:string;
    idade: number;

    //Método construtor
    constructor(_nome: string, _idade: number) {// inicializando objeto
        this.nome = _nome;
        this.idade = _idade;
    }

    //método como se fosse a function do JS
    mostrarNomeIdade (){

       console.log(`A pessoa ${this.nome} tem ${this.idade} anos`)

    }

}
// fim da definição da classe

/* invocando a função e o resultado vou armazenar na variável de 
 memória resposta*/
let pessoa1 = new Cumprimento("Alex",26)   //instaciando o objeto da classe 
pessoa1.mostrarNomeIdade()
