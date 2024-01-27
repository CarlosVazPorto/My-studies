const prompt = require("prompt-sync")();
console.log("Informe os dados dos alunos. Após, digite 'fim' no campo 'Nome' para sair");
const alunos = [];                              // Declara a array

do {
    const nome = prompt("Nome: ");              // Lê o nome
    if (nome == "fim") {                        // Antes de ler a nota, verifica
        break                                   // Sai da repetição
    }
    const nota = Number(prompt("Nota: "));      // Lê a nota
    alunos.push({ nome , nota });               // Adiciona dados à array de objetos
    console.log("Ok! Aluno(a) cadastrado(a)!");
} while (true)
console.log("-".repeat(40));                    // Exibe 40 -

const maior = alunos.reduce((a , b) => Math.max(a, b.nota), 0);     // Obtém a maior nota
console.log(`Maior nota: ${maior}`);            // Exibe a maior nota

if (maior >= 7) {                               // Verifica se tem destaques na turma
    const destaques = alunos.filter(aluno => aluno.nota == maior)   // Filtro
    for (const destaque of destaques) {         // Percorre os alunos em destaque
        console.log(`- ${destaque.nome}`);      // Mostra os nomes, precedidos por -
    }
} else {                                        // Senão, exibe a mensagem
    console.log("Não há alunos em destaque na turma");
}