const frm = document.querySelector("form");             // Acessa os dados da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {                 // Ouvinte de evento do submit do form
    e.preventDefault();                                 // Previne o envio do form

    const numero = Number(frm.inNumero.value);          // Obtém o número inicial de chinchilas
    const anos = Number(frm.inAnos.value);              // Obtém o número de anos para previsão
    let resposta1 = "";                                  // Variável string que irá concatenar a resposta
    let respostaMais = "";

    if (anos == 1){                                     // Resposta no 1º ano
        resposta1 = `No primeiro ano teremos apenas ${numero} chinchilas.`;
        resp.innerText = resposta1;
    } else {                                            // Cálculo do nº de chinchilas nos...
        let total = numero;                             // ... anos seguintes
        for (let i = 2; i <= anos; i++) {
            total = total * 3;
            respostaMais = `${respostaMais}${i}º Ano: ${total} chinchilas. \n`;
        }
        resp.innerText = `1º Ano: ${numero} chinchilas. \n` + respostaMais;
    }
})