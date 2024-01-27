// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Adiciona ouvinte de eventos do botão submit do form
frm.addEventListener("submit", (e) => {

// Evita o envio do formulário
    e.preventDefault();

// Obtém o nome informado e retira espaços em branco do início e do final da string
    const nome = frm.inNome.value.trim();

// Identifica se somente um nome foi fornecido ao verificar a ausência de espaços entre os caracteres
    if (!nome.includes(" ")) {
        alert("Por favor, informe o nome completo...");
        return
    }

// Identifica a posição na string do primeiro e do último espaços remanescentes
    const priEspaco = nome.indexOf(" ");
    const ultEspaco = nome.lastIndexOf(" ");

// Copia Nome e Sobrenome usando os parâmetros do substr()
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

// Exibe a resposta
    resp.innerText = `Crachá: ${cracha}`;
})
