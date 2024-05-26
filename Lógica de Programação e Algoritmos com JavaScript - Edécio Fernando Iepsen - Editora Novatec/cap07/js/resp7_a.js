// Carlos Vaz Porto
// JavaScript
// May, 2024
// Answer to exercise 7a from the book "Lógica de Programação e Algoritmos com JavaScript",
// from Edécio Fernando Iepsen, Novatec Editora, 2ª Edição
// This program works with a HTML and a CSS counterparts

// JavaScript program that takes a message input from the user and encrypts it

// Gets elements from the page
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Event listener for the submit button "Criptografar" on the form
frm.addEventListener("submit", (e) => {
    // Prevents default behaviour from the form, by not sending it    
    e.preventDefault();
    // Takes input from the field "Mensagem" and assigns it to the variable "mensagem"
    const mensagem = frm.inMensagem.value;

    // Initializes the variable for the answer "resposta"
    let resposta = "";
    // Initializes the variable "tam" and assigns the length of "mensagem" to it
    const tam = mensagem.length;

    // Loop that gets the letters on even positions (in the program, odd)
    for (let i = 1; i < tam; i = i + 2) {
        resposta += mensagem.charAt(i);
  }

    // Loop that gets the letters on odd positions (in the program, even)
    for (let i = 0; i < tam; i = i + 2) {
        resposta += mensagem.charAt(i);
  }

    // Assigns the value of "resposta" to the variable "resp"
    resp.innerText = resposta;

})

// Event listener for the button "Decriptografar" on the form
frm.btDecript.addEventListener("click", () => {
    // Verifies if the form validations are ok (as "mensagem" is required) and alerts if not
    if (!frm.checkValidity()) {
        alert("Informe a mensagem criptografada");
        // Repositions the cursor in the "Mensagem" field
        frm.inMensagem.focus();
        // Returns to the form
        return
    }
    
    // Assigns the field contents to a variable "mensagem"    
    const mensagem = frm.inMensagem.value;

    // Assigns the length of "mensagem" to "tam"
    const tam = mensagem.length;
    // Assigns half the value of "tam" to "metade"
    const metade = Math.floor(tam / 2);
    //  Initializes the variable for the answer "resposta"
    let resposta = "";

    // Reorganizes formerly encrypted letters on even positions
    if (tam % 2 == 0) {
        for (let i = metade; i <= tam; i++) {
            resposta += mensagem.charAt(i);
            resposta += mensagem.charAt(i - metade);
        }
    // Reorganizes formerly encrypted letters on odd positions    
    } else {
        for (let i = metade; i <= tam - 1; i++) {
            resposta += mensagem.charAt(i);
            resposta += mensagem.charAt(i - metade);
        }
    }

    // Assigns the value of "resposta" to the variable "resp"
    resp.innerText = resposta;
})
