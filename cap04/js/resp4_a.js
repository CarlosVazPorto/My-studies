const frm = document.querySelector("form");                 // Obtém os dados da página
const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {                     // Escuta evento submit do form
    e.preventDefault();                                     // Evita o envio do form

    const numero = Number(frm.inNumero.value);              // Obtém número digitado no form
    if (numero != 0 && numero % 2 == 0) {                   // Verifica se o número é par
        resp.innerText = `${numero} é par`;                 // Responde se é par
    } else if (numero % 2 != 0) {                           // Se não é par, é ímpar
        resp.innerText = `${numero} é ímpar`;               // Responde se é ímpar
    } else {
        resp.innerText = "Zero não é par, nem ímpar!";      // Responde em caso de zero    
    }
})