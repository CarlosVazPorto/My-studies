const frm = document.querySelector("form");             // Obtém dados da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {                 // Ouvinte do evento do submit
    e.preventDefault();                                 // Previne envio do formulário

    const numero = Number(frm.inNumero.value);          // Obtém número informado pelo usuário
    let resposta = `Entre ${numero} e 1: `;             // String para montar a resposta

    for (let i = numero; i > 1 ; i--) {                 // Cria loop decrescente
        resposta = `${resposta}${i}, `;                 // Resposta acumula números e vírgulas
        }
    resposta = `${resposta} 1.`;                        // Resposta final
    resp.innerText = resposta;                          // Exibe a resposta
});

