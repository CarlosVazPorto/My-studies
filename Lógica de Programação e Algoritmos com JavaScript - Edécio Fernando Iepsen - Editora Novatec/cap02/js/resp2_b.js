// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const preco15 = frm.inPreco15.value; // obtém o conteúdo dos campos
    const tempo = Number(frm.inTempo.value);

    const valor = Math.ceil(tempo / 15) * preco15; // calcula o valor a pagar

    resp.innerText = `Valor a pagar R$ ${valor.toFixed(2)}`; // exibe a resposta

    e.preventDefault(); // evita o envio do form

})