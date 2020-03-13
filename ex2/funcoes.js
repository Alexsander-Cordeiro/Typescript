//o  "?" diz que a variavel é opcional na hora de imprimir
function concatena(nome, sobrenome) {
    // console.log(`Bom dia ${nome} ${sobrenome}`)
    return "Bom dia " + nome + " " + sobrenome;
}
//invocando a função
var resposta = concatena("Alex", "Cordeiro");
console.log(resposta);
