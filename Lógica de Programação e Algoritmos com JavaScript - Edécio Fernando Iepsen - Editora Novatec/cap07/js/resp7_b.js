// Carlos Vaz Porto
// JavaScript
// May, 2024
// Answer to exercise 7b from the book "Lógica de Programação e Algoritmos com JavaScript", de Edécio Fernando Iepsen, Novatec Editora, 2ª Edição
// This program works with a CSS and a JavaScript counterparts

// JavaScript program that checks if an inputted sentence is a palindrome

// Gets elements from the page
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Event listener for the "submit" button of the form
frm.addEventListener("submit", (e) => {

    // Prevents default behaviour from the form, by not sending it  
    e.preventDefault();

    // Takes input from the field "Frase" and assigns its value to the variable "frase", and converts it into upper case
    const frase = frm.inFrase.value.toUpperCase();

    // Verifies if a valid sentence was inputted, and alerts if not.
    if (frase.indexOf(" ") == -1){
        alert("Por favor informe uma frase");
        frm.inFrase.focus();
        return
    }

    // Removes blank spaces from the sentence.
    const frase2 = frase.replace(/ /g, "");
    // Initializes the variable "tam" and assigns the length of "frase2" to it
    const tam = frase2.length;

    // Initializes the variable "iguais", that will be used for comparing reasons with "frase2"
    let iguais = true;

    // For loop that compares the initial letters with the ending letters, and iterates until the middle of "frase2"
    for (let i = 0; i < tam / 2; i++) {
        if (frase2[i] != frase2[tam - 1 - i]) {
            iguais = false;
            break
        }
    }

    // Prepares the answer
    if (iguais) {
        resp.innerText = `${frase} é um palíndromo`;
    } else {
        resp.innerText = `${frase} não é um palíndromo`;
    }

})
