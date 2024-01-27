const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor R$: "));                 // Lê valor do carnê...    
const numParcelas = Number(prompt("Nº de Parcelas: "));     // ... e o nº de parcelas
const valorParcelas = Math.floor(valor / numParcelas);      // Calcula valor sem decimais
const valorFinal = valorParcelas + (valor % numParcelas);   // Calcula a parcela final
for (let i = 1; i < numParcelas; i++) {
    console.log(`${i}ª Parcela: R$ ${valorParcelas.toFixed(2)}`);
}
console.log(`${numParcelas}ª Parcela: R$ ${valorFinal.toFixed(2)}`);    // Última parcela
