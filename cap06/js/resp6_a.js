const frm = document.querySelector("form");             // Obtém os dados da página
const resp = document.querySelector("pre");

const clubes = [];                                      // Declara array global

frm.addEventListener("submit", (e) => {                 // Ouvinte de evento do submit do form
    e.preventDefault();                                 // Evita o envio do formulário

    const clube = frm.inClube.value;                    // Obtém o conteúdo do campo de input
    clubes.push(clube);                                 // Adiciona o clube à array

    frm.inClube.value = "";                             // Limpa o campo de input
    frm.inClube.focus();                                // Reposiciona o cursor no campo de input

    // console.log(clubes);                             // Teste da array
});

frm.btListar.addEventListener("click", () => {          // Ouvinte de evento do botão Listar 
    if (clubes.length == 0) {                           // Alerta se não houver clubes inseridos
        alert("Ainda não foram inseridos clubes. Favor inserir um ou mais.");
        return
    }
    let listagem = "";                                  // String para listar os clubes
    for (let i = 0; i < clubes.length; i++) {           // Loop que adiciona clubes à listagem
        listagem += `${i+1}º ${clubes[i]} \n`;
    }
    resp.innerText = listagem;                          // Exibe a listagem de clubes
})

frm.btTabela.addEventListener("click", () => {
    const tamanho = clubes.length;

    if ((tamanho % 2 == 1) || tamanho == 0) {           // Alerta se o número de clubes é ímpar
        alert("Número insuficiente de clubes para o chaveamento. \nFavor inserir um número par de clubes");
        return    
    }
    
    let tabela = "";                                    // String para exibir o jogos

    const ultimo = tamanho - 1;

    for (i = 0; i < (tamanho / 2); i++) {               // Percorre os elementos da array
        tabela += `${clubes[i]} x ${clubes[ultimo - i]} \n`;
    }

    resp.innerText = tabela;                            // Exibe a tabela de jogos
})
