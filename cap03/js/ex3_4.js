const prompt = require("prompt-sync")();        // Adiciona o pacote para entrada de dados
const pesoKg = Number(prompt("Peso da ração em kg: ")); // Lê os dados
const consumoDiario = Number(prompt("Consumo diário em g: "));
const duracao = Math.floor(pesoKg / (consumoDiario / 1000));        // Calcula a duração em dias
const restante = (pesoKg - ((consumoDiario /1000) * duracao)) * 1000;    // Calcula o quanto sobrará no pacote
console.log(`Peso da ração (kg): ${pesoKg}`);       // Exibe as respostas
console.log(`Consumo diário (g): ${consumoDiario}`);
console.log(`Duração do pacote (dias): ${duracao}`);
console.log(`Restará (g): ${restante.toFixed(0)}`);
