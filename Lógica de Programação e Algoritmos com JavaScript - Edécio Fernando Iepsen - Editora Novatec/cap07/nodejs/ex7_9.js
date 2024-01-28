// Programa JavaScript para analisar os parênteses de uma fórmula matemática
// Escrito inicialmente para rodar no Node.js

// Requer pacote prompt-sync para entrada de dados no Node.js
const prompt = require("prompt-sync")();

// Lê a fórmula
const formula = prompt("Fórmula: ");

// Inicializa contadores para os parênteses abertos "(" e fechados ")"
let abre = 0;
let fecha = 0;

// Percorre os caracteres da fórmula
for (const simbolo of formula) {
    if (simbolo == "(") {
        abre++;
    } else if (simbolo == ")"){
        fecha++;
    }

// Se, em algum momento, o número de fechados for maior do que o de abertos, irá sair do loop
    if (fecha > abre) {
        break
    }
}

// Verifica contagem dos parênteses e dá mensagem de resposta
if (abre == fecha) {
    console.log("OK! Fórmula correta em relação aos parênteses!");
} else {
    console.log("Erro... Fórmula incorreta!");
}

