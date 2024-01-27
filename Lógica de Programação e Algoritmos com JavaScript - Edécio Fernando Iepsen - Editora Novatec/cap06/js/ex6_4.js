const frm = document.querySelector("form");     // Obtém elementos a ser manipulados
const resp = document.querySelector("pre");

const criancas = [];        // Declara array global

frm.addEventListener("submit", (e) => {         // Ouvinte de eventos do submit do formulário
    e.preventDefault();     // Evita o envio do formulário

    const nome = frm.inNome.value;              // Obtém os conteúdos dos campos
    const idade = Number(frm.inIdade.value);

    criancas.push({ nome, idade });             // Adiciona dados à array de objetos

    frm.reset();            // Limpa os dados do form
    frm.inNome.focus();     // Posiciona o cursor no campo Nome
    frm.btListar.dispatchEvent(new Event("click")); // Dispara click em btListar
})

frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {                 // Se vazio, exibe um alerta
        alert("Não há crianças na lista.");
        return
    }

let lista = "";             // Para fazer a concatenação da lista de crianças
for (const crianca of criancas) {
    const { nome, idade } = crianca;            // Desestrutura o objeto
    lista += nome + " - " + idade + "ano(s)\n";
}

resp.innerText = lista;     // Exibe a lista

})

frm.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há crianças na lista.");
        return
    }

    const copia = [...criancas];                // Cria uma cópia da array criancas
    copia.sort(( a , b ) => a.idade - b.idade); // Ordena pela idade

    let resumo = "";        // Para concatenar a saída
    let aux = copia[0].idade;                   // Menor idade da array ordenanda
    let nomes = [];         // Para inserir nomes de cada idade

    for (const crianca of copia) {
        const { nome , idade } = crianca;
        if (idade == aux) {                     // Se é da mesma idade auxiliar
            nomes.push(nome);                   // ... adiciona à array nomes
        }
        else {              // Senão, monta o resumo para cada idade
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";

            aux = idade;    // Obtém a nova idade na ordem
            nomes = [];     // Limpa a array dos nomes
            nomes.push(nome);                   // Adiciona o primeiro da nova idade
        }
    }

    // Adiciona a última criança
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    resp.innerText = resumo;                    // Exibe a resposta
})

