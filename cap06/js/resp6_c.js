// Declara variáveis para a obtenção e manipulção dos dados da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// Declara uma array de escopo global
let candidatos = [];

// Adiciona ouvinte de eventos para o botão submit "Adicionar" do formulário
frm.addEventListener("submit", (e) => {

// Evita o envio do formulário
    e.preventDefault();

// Obtém os dados inseridos pelo usuário no campo do input
    const nome = frm.inNome.value;
    const acertos = Number(frm.inAcertos.value);

// Verifica duplicidade do candidato na array
// Caso o candidto já tenha sido registrado, alerta e limpa os campos do input
// Caso ainda não tenha sido registrado, é adicionado à array
    if (candidatos.includes(nome)) {
        alert("Candidato já cadastrado.");
        frm.reset();
        frm.inNome.focus();
        return
    } else {
        candidatos.push({ nome , acertos });
    }

// Limpa os campos do input e reposiciona o cursor no campo Candidato
    frm.reset();
    frm.inNome.focus();

// Imprime a lista de candidatos na tela ao disparar novo evento do botão "Listar todos"
    frm.btTodos.dispatchEvent(new Event("click"));

})

// Adiciona ouvinte de eventos para o botão "Listar todos"
frm.btTodos.addEventListener("click", () => {

// Alerta caso a array ainda não tenha recebido nomes dos candidatos
    if (candidatos.length == 0) {
        alert("Ainda não foram cadastrados candidatos.");
        frm.inNome.focus();
        return
    }

// Cria variável para concatenar os dados dos candidatos e exibí-los na tela
    let lista = "";

// Percorre cada item da array e prepara o texto a ser apresentado no campo <pre>
    candidatos.forEach((candidato) => lista = lista + `${candidato.nome} - ${candidato.acertos} acertos \n`);

// Exibe a listagem de candidatos e acertos no campo <pre>
    resp.innerText = lista;

})

// Adiciona ouvinte de eventos para o botão "Aprovados 2ª etapa"
frm.btAprovados.addEventListener("click", () => {

// Alerta caso a array ainda não tenha recebido nomes dos candidatos
    if (candidatos.length == 0) {
        alert("Ainda não foram cadastrados candidatos.");
        frm.inNome.focus();
        return
}

// Interroga no prompt qual a nota de corte para a próxima etapa do concurso
    const notaCorte = Number(prompt("Qual o número de acertos necessários para classificação?"));

// Verifica se foi digitado um valor válido para a nota de corte
    if (notaCorte == 0 || isNaN(notaCorte)) {
        alert("Valor digitado inválido. \nFavor digitar novo valor.");
        return
    }

// Cria cópia da array candidatos para realizar comparações de notas e reordená-la
// Inverte a ordem dos itens na array copiaCandidatos para apresentá-los de modo decrescente
    const copiaCandidatos = candidatos.slice();
    copiaCandidatos.sort(( a , b ) => { a.acertos - b.acertos });
    copiaCandidatos.reverse();

// Cria variável para concatenar os dados dos candidatos aprovados e exibí-los na tela
    let aprovados = "";

// Faz a comparação da nota de cada candidato com a nota de corte
// Se for maior ou igual, inclui os dados do candidato na string aprovados
    copiaCandidatos.forEach((candidato) => {
        if (candidato.acertos >= notaCorte) {
            aprovados = aprovados + `${candidato.nome} - ${candidato.acertos} acertos\n`;
        }
    })

// Define as condições para impressão da listagem, caso existam ou não candidatos aprovados
    if (aprovados == "") {
        resp.innerText = "Infelizmente não houve candidatos aprovados neste grupo."
    } else {
        resp.innerText = aprovados;
    }

})

// Adiciona ouvinte de eventos do botão Limpar e reinicia os dados do formulário
frm.btLimpar.addEventListener("click", () => {

    // Reinicia a array candidatos
        candidatos = [];
    
    // Limpa o campo de resposta
        resp.innerText = "";
    
    // Limpa o campo do input e reposiciona o cursor no campo de entrada de dados
        frm.reset();
        frm.inNome.focus();
    
})
