const frm = document.querySelector("form");             // Obtém os dados do form
const resp = document.querySelector("#outResp");        // Acessa onde a resposta será exibida

frm.addEventListener("submit", (e) => {                 // Ouvinte de evento do submit do form
    e.preventDefault();                                 // Previne envio do form

    const permitida = Number(frm.inPermitida.value);    // Velocidade máxima permitida
    const velocidade = Number(frm.inVelocidade.value);  // Velocidade do condutor

    if (velocidade <= permitida) {                      // Compara as velocidades do condutor e
        resp.innerText = "Sem multa";                   // ... permitida, e verifica se há multa
    } else if (velocidade <= (permitida * 1.2)) {       // ... ou não e dá a resposta
        resp.innerText = "Multa leve";
    } else {
        resp.innerText = "Multa grave";
    }
})



