const prompt = require("prompt-sync")();                // Adiciona o pacote prompt-sync
const pessoas = Number(prompt("Nº pessoas: "));         // Lê dados de entrada
const peixes = Number(prompt("Nº peixes: "));

let pagar                       // Declara a variável pagar
if (peixes <= pessoas) {        // Verifica condição definida no exemplo
    pagar = pessoas * 20;
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12);
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`);           // Exibe o valor a ser pago
