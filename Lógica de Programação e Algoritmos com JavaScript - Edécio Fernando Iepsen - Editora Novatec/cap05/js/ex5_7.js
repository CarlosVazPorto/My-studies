const frm = document.querySelector("form");         // Obtém os dados da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {             // Ouvinte de evento do submit do form
    e.preventDefault();                             // Evita o envio do form

    const num = Number(frm.inNumero.value);         // Obtém o número informado
    let estrelas = "";                              // Variável que irá concatenar estrelas e traços
    for (let i =1; i <= num; i++) {                 // Cria loop de 1 até num
        if (i % 2 == 1) {
            estrelas = estrelas + "*";              // Nas posições ímpares do i: *
        } else {
            estrelas = estrelas + "-";              // Nas posições pares do i: -
        }
    }
resp.innerText = estrelas;                          // Exibe as estrelas
})