const frm = document.querySelector("form");         // Obtém os dados da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {             // Ouvinte de evento do submit do form
    e.preventDefault();                             // Evita envio do form
    
    const num = Number(frm.inNumero.value);         // Obtém o número informado
/*    let numDivisores = 0;                           // Declara e inicializa o contador

    for (let i = 1; i <= num; i++){                 // Percorre os possíveis divisores do num
        if (num % i == 0) {                         // Verifica se i é divisor do num
            numDivisores++;                         // ... e se for, incrementa o contador
        } 
    }

    if (numDivisores == 2) {                        // Se possuir somente 2 divisores, é primo
        resp.innerText = `${num} é um número primo!`;
    }  else {
        resp.innerText = `${num} não é um número primo.`;
    }
*/
    let temDivisor = 0;                             // Declara e inicializa a variável tipo "flag"

    for (let i = 2; i <= num / 2; i++) {            // Percorre os possíveis divisores do num
        if (num % i == 0) {                         // ... se tem um divisor
            temDivisor = 1;                         // ... muda o flag
            break                                   // ... e sai do loop
        }
    }

    if (num > 1 && !temDivisor) {                   // Se o num > 1 e não possui divisor
        resp.innerText = `${num} é um número primo!`;
    }  else {
        resp.innerText = `${num} não é um número primo.`;
    }
})