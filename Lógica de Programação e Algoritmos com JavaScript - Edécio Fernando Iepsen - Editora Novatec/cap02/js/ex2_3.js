// cria referência ao form e aos elementos de resposta
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");
const resp4 = document.querySelector("#outResp4");
const resp5 = document.querySelector("#outResp5");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value; // obtém os valores dos campos do form
    const preco = Number(frm.inPreco.value);

    const entrada = preco * 0.5; // calcula valor da entrada
    const parcela12 = (preco - entrada) / 12; // restante em 12x sem juros
    const parcela24 = ((preco - entrada) / 24) * (1 + (0.015 * 24)); // 24x + juros 1.5% a.m.
    const parcela36 = ((preco - entrada) / 36) * (1 + (0.030 * 36)); // 36x + juros 3.0% a.m.
    const total24 = entrada + (parcela24 * 24); 
    const total36 = entrada + (parcela36 * 36);

    resp1.innerText = `Promoção: ${veiculo}`; // exibe as respostas
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
    resp3.innerText = `+ 12x de R$ ${parcela12.toFixed(2)}`;
    resp4.innerText = `+ 24x de R$ ${parcela24.toFixed(2)} - total ${total24.toFixed(2)}`;
    resp5.innerText = `+ 36x de R$ ${parcela36.toFixed(2)} - total ${total36.toFixed(2)}`;

    e.preventDefault(); // evita envio do form
})