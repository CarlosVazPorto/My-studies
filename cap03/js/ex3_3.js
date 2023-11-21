const prompt = require("prompt-sync")();             // adiciona pacote para entrada de dados
const funcionario = prompt("Nome do funcionário: "); // lê os dados
const salario = Number(prompt("Salário atual R$: "));
const tempo = Number(prompt("Anos de serviço: "));
const acrescimo = (Math.floor(tempo/4)) * 0.01;      // calcula o acréscimo por tempo de serviço
const atual = salario + (salario * acrescimo);       // calcula salario + acréscimo
console.log(`O funcionário ${funcionario} recebe R$ ${salario.toFixed(2)} e passará a receber R$ ${atual.toFixed(2)}.`); // exibe a resposta
