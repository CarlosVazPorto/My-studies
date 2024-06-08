// Carlos Vaz Porto
// JavaScript
// June, 2024
// Example 8.2 from the book "Lógica de Programação e Algoritmos com JavaScript", from Edécio Fernando Iepsen, Novatec Editora, 2ª Edição
// This program works with a HTML and a CSS counterparts

// JavaScript program for a car dealer store, that classifies cars by their age in years and then calculates the values for the down payment and installments
// Cars are classified as follows: until one year = new (novo); until two years = used, almost new (seminovo); more than two years = used (usado)
// Down payment for new cars = 50%
// Down payment for used cars = 30%
// The remainder should be paid in 10 installments without interests

// Gets the elements from the page
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// Event listener for the "submit" button on the form
frm.addEventListener("submit", (e) => {
// Prevents default behavior of the submit event
    e.preventDefault();

// Gets the inputs
    const modelo = frm.inModelo.value;
    const ano = Number(frm.inAno.value);
    const preco = Number(frm.inPreco.value);

// Calls the functions and assigns returned values to variables
// Utilizes returned values for calculations
    const classificacao = classificarVeiculo(ano);
    const entrada = calcularEntrada(preco, classificacao);
    const parcela = ( (preco - entrada) / 10 );

// Displays the responses
    resp1.innerText = modelo + " - " + classificacao;
    resp2.innerText = `Entrada: R$ ${entrada.toFixed(2)}`;
    resp3.innerText = `+10x de: R$ ${parcela.toFixed(2)}`;
})

// The following function takes the year of the vehicle as an argument and classifies it accordingly to its age
const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear();
    let classif;

    if (ano == anoAtual) {
        classif = "Novo";
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        classif = "Seminovo";
    } else {
        classif = "Usado";
    }

    return classif
}

// The following function takes value and age condition of the vehicle as arguments and calculates its down payment
const calcularEntrada = (valor, condicao) => 
    condicao == "Novo" ? valor * 0.5 : valor * 0.3 ;
