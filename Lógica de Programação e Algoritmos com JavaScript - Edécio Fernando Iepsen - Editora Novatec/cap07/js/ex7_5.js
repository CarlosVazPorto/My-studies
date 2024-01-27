// Programa JS que gera e-mail com iniciais e sobrenome

// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Ouvinte de eventos do botão submit do formulário
frm.addEventListener("submit", (e) => {

// Evita o envio do formulário
    e.preventDefault();

// Obtém o nome do funcionário
    const funcionario = frm.inFuncionario.value;

// Divide o nome do funcionário em itens de array, criados a cada ocorrência do espaço " "
    const partes = funcionario.split(" ");

// Concatena letras para a criação do e-mail
    let email = "";

// Obtém o número de itens da array partes
    const tam = partes.length;

// Percorre os itens da array (exceto o último)
    for (let i = 0; i < tam - 1; i++) {
// Obtém a letra inicial de cada item
        email += partes[i].charAt(0);
    }

// Concatena as letras iniciais com a última parte (sobrenome) e empresa
    email += partes[tam - 1] + "@empresa.com.br";

// Exibe a resposta, com e-mail em minúsculas
    resp.innerText = `E-mail: ${email.toLowerCase()}`;

})
