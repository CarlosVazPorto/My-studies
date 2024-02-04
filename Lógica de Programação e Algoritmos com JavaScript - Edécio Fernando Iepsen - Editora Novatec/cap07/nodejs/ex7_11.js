// Programa JavaScript para gerar as datas de vencimento de parcelas
// Escrito inicialmente para rodar no Node.js

// Requer pacote prompt-sync para entrada de dados
const prompt = require("prompt-sync")();

// Solicita entrada de dados com o número total de parcelas
const parcelas = Number(prompt("Quantas parcelas? "));

// Armazena data atual em uma variável
const data = new Date();

// Inicia loop / laço de repetição para gerar as datas de cada parcela
for (let i = 1; i <= parcelas; i++) {

// Faz correção no número do mês para apresentá-lo do modo tradicional (de 1 a 12)
    data.setMonth(data.getMonth() + 1);

// Obtém valores de dia. mês e ano e os armazena em variáveis
// Soma um mês à data, para 1ª parcela em 30 dias
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

// Faz correções em dia e mês, acrescentando 0 no início se dia / mês forem menores do que 10
    const diaZero = dia < 10 ? "0" + dia : dia;
    const mesZero = mes < 10 ? "0" + mes : mes;

// Exibe as parcelas
    console.log(`${i}ª Parcela: ${diaZero}/${mesZero}/${ano}`);

}
