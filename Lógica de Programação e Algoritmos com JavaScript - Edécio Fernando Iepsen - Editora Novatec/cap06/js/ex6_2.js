const frm = document.querySelector("form");         // Obtém os elementos da página
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = [];                   // Array de escopo global, mostra números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100
const CHANCES = 6;                  // Constante com o número máximo de chances

frm.addEventListener("submit", (e) => {               // Ouvinte de eventos do submit do formulário
    e.preventDefault();             // Evita o envio do formulário
    const numero = Number(frm.inNumero.value);        // Obtém número digitado (input)
    if (numero == sorteado) {       // Se acertou
        respDica.innerText = `Parabéns! Número sorteado: ${sorteado}!`; 
        frm.btSubmit.disabled = true;                 // Troca o status dos botões
        frm.btNovo.className = "exibe";
    } else {
        if (erros.includes(numero)) {           // Se o número existe na array erros (já apostou)
            alert(`Você já apostou o número ${numero}. Tente outro...`);
        } else {
            erros.push(numero);                 // Adiciona o número a array
            const numErros = erros.length;      // Obtém tamanho da array (número de erros)
            const numChances = CHANCES - numErros;      // Calcula o número de chances
            // exibe nº de erros, conteúdo da array e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`;
            respChances.innerText = numChances;
            if (numChances == 0) {
                alert("Suas chances acabaram...");
                frm.btSubmit.disabled = true;
                frm.btNovo.className = "exibe";
                respDica.innerText = `Game over!!! Número sorteado: ${sorteado}.`;
            } else {
                // usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor";
                respDica.innerText = `Dica: tente um número ${dica} que ${numero}.`;
            }
        }
    }
    frm.inNumero.value = "";            // Limpa campo de entrada
    frm.inNumero.focus();               // Posiciona o cursor neste campo

    frm.btNovo.addEventListener("click", () =>{
        location.reload();              // Recarrega a página
    })
})

