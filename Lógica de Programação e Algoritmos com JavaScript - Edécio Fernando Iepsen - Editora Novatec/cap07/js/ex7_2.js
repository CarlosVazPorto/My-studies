// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("span");

// Adiciona ouvinte de eventos do botão submit do form
frm.addEventListener("submit", (e) => {

// Evita o envio do formulário
    e.preventDefault();

// Conteúdo do campo em maiúsculas
    const fruta = frm.inFruta.value.toUpperCase();

// Declara string que irá conter a resposta
    let resposta = "";

// Percorre todos os caracteres da fruta
    for (const letra of fruta) {
// Se a letra é igual à letra inicial da string
        if (letra == fruta.charAt(0)){
// ... adiciona a letra inicial
            resposta += fruta.charAt(0);
// ... senão adiciona o sublinhado (underline)
        } else {
            resposta += "_";
        }
    }

// Exibe a resposta
    resp.innerText = resposta;
// Preenche com "*", conforme o tamanho
    frm.inFruta.value = "*".repeat(fruta.length);

})
