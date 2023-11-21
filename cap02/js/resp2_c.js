// cria referência ao form e aos elementos h3 (onde serão exibidas as respostas)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um "ouvinte" de evento, acionado quando o botão submit é clicado
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value; // obtém os valores dos campos dos formulários
    const preco = Number(frm.inPreco.value);

    const promocao = preco * 2.5; // calcula o valor promocional para 3 produtos, com 50% de deconto no terceiro
    const valorTerceiro = preco * 0.5; // calcula o valor do 3º

    resp1.innerText = `${produto} - Promoção: leve 3 por R$ ${promocao.toFixed(2)}!`;
    resp2.innerText = `O terceiro produto custa apenas R$ ${valorTerceiro.toFixed(2)}!`;

    e.preventDefault(); // previne o envio do form

})