// cria referência ao form e ao elemento onde será exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria ouvinte de evento, acionado quando o botão submit é clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();                     // evita envio do form

    // obtém e converte o conteúdo do campo inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value);
    let horaFranca = horaBrasil + 5;        // calcula a hora na França
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24;       // corrige o horário se passar de 24 horas
    }

    // exibe a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `Hora da França ${horaFranca.toFixed(2)}.`;
})