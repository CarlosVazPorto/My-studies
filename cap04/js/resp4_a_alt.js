const frm = document.querySelector("form");                 // Obtém os dados da página
const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {                     // Escuta evento submit do form
    e.preventDefault();                                     // Evita o envio do form

    const numero = Number(frm.inNumero.value);              // Obtém número digitado no form
    
    const resposta = (numero == 0) ? resp.innerText = "Zero não é par, nem ímpar!" : 
             (numero % 2 == 0) ? resp.innerText = `${numero} é par` : 
             resp.innerText = `${numero} é ímpar`;

})