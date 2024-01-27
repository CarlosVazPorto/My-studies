const prompt = require("prompt-sync")();

console.log("Informe o valor do saque ou digite 0 (zero) para sair");

const saques = [];                                  // Declara a array

do {
    const valor = Number(prompt("Saque R$: "));     // Lê o valor do saque
    if (valor == 0) {
        break                                       // Sai da repetição
    }

    saques.push(valor);                             // Adiciona à array saques
    if (valor % 10 == 0) {
        console.log("Saque realizado com sucesso!");
    } else {
        console.log("Erro... Valor Inválido (deve ser múltiplo de 10,00).");
    }
} while (true)

console.log("\nSaques Válidos");                    // \n gera nova linha
console.log("-".repeat(40));                         // Exibe 40 -

const saquesValidos = saques.filter( saque => saque % 10 == 0);
for (const saque of saquesValidos) {
    console.log(saque.toFixed(2));
}

console.log("-".repeat(40));

const totalSacado = saquesValidos.reduce(( total , saque ) => total + saque, 0);
console.log(`Total dos saques: R$ ${totalSacado.toFixed(2)}`);

const saquesInvalidos = saques.length - saquesValidos.length;
console.log(`\nNúmero de tentivas de saque (saques inválidos): ${saquesInvalidos}`);

