const prompt = require("prompt-sync")();
const produto = prompt("Produto: ");                    // Lê o nome do produto e ...
const num = Number(prompt("Nº de etiquetas: "));        // ... a quantidade de etiquetas

//Cria um loop até num/2 (pois imprime 2 etiquetas por linha)
for (let i = 1; i <= num / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`);
}

if(num % 2 == 1) {                                      // se a quantidade de etiquetas for ímpar
    console.log(`${produto}`);                          // imprime mais uma etiqueta
}