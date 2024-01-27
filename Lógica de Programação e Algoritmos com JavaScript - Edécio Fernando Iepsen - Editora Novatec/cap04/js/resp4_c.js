const frm = document.querySelector("form");                 // Obtém os dados do formulário
const resp1 = document.querySelector("#outTempo");          // Acessa a resposta do tempo
const resp2 = document.querySelector("#outTroco");          // Acessa a resposta do troco

frm.addEventListener("submit", (e) => {                     // Ouvinte de evento do submit
    e.preventDefault();                                     // Previne envio do form

    const valorPago = Number(frm.inValor.value);            // Obtém valor pago
    
    let troco;                                              // Variável troco
    
    if (valorPago < 1.00) {                                 // Se o valor for inferior a 1.00
        resp1.innerText = "Valor insuficiente";
    } else if (valorPago >= 1.00 && valorPago < 1.75) {     // Valor entre 1.00 e 1.70 = 30 min
        resp1.innerText = "Tempo de estacionamento: 30 min.";
        troco = valorPago - 1.00;
        resp2.innerText = `Troco: R$ ${troco.toFixed(2)}.`;
    } else if (valorPago >= 1.75 && valorPago < 3.00) {     // Valor entre 1.75 e 2.95 = 60 min
        resp1.innerText = "Tempo de estacionamento: 60 min.";
        troco = valorPago - 1.75;
        resp2.innerText = `Troco: R$ ${troco.toFixed(2)}.`;
    } else {                                                // Valor acima de 3.00 = 120 min
        resp1.innerText = "Tempo de estacionamento: 120 min.";
        troco = valorPago - 3.00;
        resp2.innerText = `Troco: R$ ${troco.toFixed(2)}.`;
    }
})