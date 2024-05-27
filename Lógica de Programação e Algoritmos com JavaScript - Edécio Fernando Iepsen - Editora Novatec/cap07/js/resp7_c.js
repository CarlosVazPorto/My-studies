// Carlos Vaz Porto
// JavaScript
// May, 2024
// Answer to exercise 7c from the book "Lógica de Programação e Algoritmos com JavaScript", de Edécio Fernando Iepsen, Novatec Editora, 2ª Edição
// This program works with a HTML and a CSS counterparts

// JavaScript program that checks the date of a traffic fine and tells until when the user can pay it with a discount

// Gets elements from the page
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outData");
const resp2 = document.querySelector("#outValor");

// Event listener for the "submit" button of the form
frm.addEventListener("submit", (e) => {

    // Prevents default behaviour from the form by not sending it
    e.preventDefault();

    // Takes inputs from the form, assigning them to their respective variables
    const data = frm.inData.value;
    const valor = frm.inValor.value;

    // Declares a type date variable
    const dataLimite = new Date();

    // Gets data from inputted date
    const partes = data.split("-");

    // Sets data info into Brazilian pattern (dd - mm - yyyy)
    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1] - 1));
    dataLimite.setFullYear(Number(partes[0]));

    // Gets the day of the traffic fine
    const dia = dataLimite.getDate();

    // Adds 90 days to "dia"
    dataLimite.setDate(dia + 90);
    const mes = dataLimite.getMonth() + 1;
    const ano = dataLimite.getFullYear();

    // Calculates the value for discounted payment of the fine
    const comDesconto = valor * 0.8;

    resp1.innerText = "Data limite para pagamento com desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;

    resp2.innerText = "Valor com desconto: R$ " + comDesconto.toFixed(2);

})

