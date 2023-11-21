const frm = document.querySelector("form");             // Obtém os dados da página
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = "";                   // String com a resposta a ser exibida
let numContas = 0;                   // Inicializa contador
let valTotal = 0;                    // Inicializa acumulador (variáveis globais)

frm.addEventListener("submit", (e) => {             // Escuta evento do submit do formulário
    e.preventDefault();               // Previne o envio do formulário

    const descricao = frm.inDescricao.value;        // Obtém dados da conta
    const valor = Number(frm.inValor.value);

    numContas++;                      // Adiciona valores ao contador e ao acumulador
    valTotal += valor;

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
    resp1.innerText = `${resposta} ----------------------------------`;
    resp2.innerText = `${numContas} conta(s) - Total R$: ${valTotal.toFixed(2)}`;

    frm.inDescricao.value = "";        // Limpa os campos do formulário
    frm.inValor.value = "";
    frm.inDescricao.focus();           // Posiciona no campo inDescricao do form
})