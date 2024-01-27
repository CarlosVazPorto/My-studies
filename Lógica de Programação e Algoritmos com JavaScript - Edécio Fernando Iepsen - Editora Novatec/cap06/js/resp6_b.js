// Obtém os dados da página
const frm = document.querySelector("form");
const respLista = document.querySelector("#outLista");
const respOrdem = document.querySelector("#outOrdem");

// Declara uma array de escopo global
let listaNumeros = [];

// Adiciona o ouvinte de eventos do botão submit do form
frm.addEventListener("submit", (e) => {

// Previne o envio dos dados do form    
    e.preventDefault();

// Obtém os dados do campo do input
    const numero = Number(frm.inNumero.value);

// Verifica se o número já existe na array
// Caso já exista, alerta e limpa o campo do input
// Caso ainda não exista, adiciona o número ao final da array
    if (listaNumeros.includes(numero)) {
        alert("Este número já foi inserido anteriormente. Digite outro.");
        frm.reset();
        frm.inNumero.focus();
        return
    } else {
        listaNumeros.push(numero);
    }

// Limpa o campo do input e reposiciona o cursor no campo de entrada de dados
    frm.reset();
    frm.inNumero.focus();

// Imprime na tela a lista atual de números
    respLista.innerText = "Números: " + listaNumeros.join(", ");

// limpa o campo da mensagem, caso já tenha clicado o btVerificar
    respOrdem.innerText = "";

})

// Adiciona o ouvinte de eventos do botão btVerificar do form
frm.btVerificar.addEventListener("click", () => {

// Alerta caso a array ainda não tenha números armazenados e reposiciona o cursor
    if (listaNumeros.length == 0 || listaNumeros.length == 1) {
        alert("Ainda não foram inseridos números suficientes para serem verificados.");
        inNumero.focus();
        return
    }

// Declara flag (boolean) para definir qual o texto da respOrdem
    let ordenado = true;

// Compara cada item da array com o item seguinte, verificando se o anterior é maior que o seguinte
// Caso a condição seja satisfeita, inverte o valor da flag e encerra a comparação 
    for (let i = 0; i < (listaNumeros.length - 1); i++) {
        if (listaNumeros[i] > listaNumeros[i + 1]) {
        ordenado = false;
        break
    }
  }

// Define a mensagem da respOrdem baseado na flag ordenado
    respOrdem.innerText = (ordenado) ? "Os números estão em ordem crescente."
                                     : "Atenção! Os números não estão em ordem crescente!";

})

// Adiciona ouvinte de eventos do botão Limpar e reiniciar dados do form
frm.btLimpar.addEventListener("click", () => {

// Reinicia a array listaNumeros
    listaNumeros = [];

// Limpa os campos de resposta
    respLista.innerText = "";
    respOrdem.innerText = "";

// Limpa o campo do input e reposiciona o cursor no campo de entrada de dados
    frm.reset();
    frm.inNumero.focus();

})
