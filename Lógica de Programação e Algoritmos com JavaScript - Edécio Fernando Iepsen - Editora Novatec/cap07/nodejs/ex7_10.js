// Programa JavaScript para exibir uma árvore de estrelas
// Escrito inicialmente para rodar no Node.js

// Requer pacote prompt-sync para entrada de dados
const prompt = require("prompt-sync")();

// Lê o número de linhas / altura da árvore
const altura = Number(prompt("Altura da árvore: "));

// Deixa uma linha em branco
console.log();

// Inicia o loop / repetição para a copa da árvore
for (let i = 1; i <= altura; i++) {

// Calcula espaços do início
    const espacos = 32 + (altura - i);

// Exibe cada linha
    console.log(" ".repeat(espacos) + "*".repeat(i*2));

}

