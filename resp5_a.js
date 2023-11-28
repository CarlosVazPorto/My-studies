const frm = document.querySelector("form");             // Obtém os dados da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {                 // Ouvinte de evento do submit do form                
    e.preventDefault();                                 // Evita o envio do form

    const fruta = frm.inFruta.value;                    // Obtém o nome da fruta
    const repete = Number(frm.inNumero.value);          // Obtém o número de repetições
    let resposta = `${fruta}`;                          // Variável que concatena frutas e *

    for (i = 1; i < repete; i++){
    resposta = resposta + `*${fruta}`;                  // Escreve o nome da fruta em posição ímpar
        }
    resp.innerText = resposta;
})