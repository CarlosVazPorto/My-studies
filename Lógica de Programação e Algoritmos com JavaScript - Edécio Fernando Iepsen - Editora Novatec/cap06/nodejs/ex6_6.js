const prompt = require("prompt-sync")();
console.log("Informe os clientes em ordem de chegada ou \"fim\" no campo \"Nome\" para sair");

const clientes = [];                                // Declara a array

do {
    const nome = prompt("Nome: ");                  // Lê o nome do cliente
    if (nome == "fim") {                            // Verifica antes de ler a idade
        break                                       // Sai da repetição
    }

    const idade = Number(prompt("Idade: "));        // Lê a idade do cliente
    clientes.push({ nome , idade });                // Adiciona à array de objetos
    console.log("OK! Cliente inserido na fila!");

} while (true);

console.log("\nFila Preferencial");                 // \n para gerar uma nova linha
console.log("-".repeat(40));                        // Exibe 40 -

const filaPref = clientes.filter( cliente => cliente.idade >= 60 );
filaPref.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
})

console.log("\nFila normal");
console.log("-".repeat(40));

const filaNormal = clientes.filter( cliente => cliente.idade < 60);
filaNormal.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
})
