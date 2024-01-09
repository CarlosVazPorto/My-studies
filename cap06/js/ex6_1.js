const frm = document.querySelector("form");         // Obtém elementos da página
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];           // Declara a array global

frm.addEventListener("submit", (e) => {     // Ouvinte de evento do submit do form
    
    e.preventDefault();             // Evita o envio do formulário

    const nome = frm.inPaciente.value;      // Obtém o nome do paciente
    pacientes.push(nome);           // Adiciona o nome ao final da array pacientes

    let lista = "";             // String que irá concatenar os pacientes

    // for 'tradicional' (inicia em 0, enquanto for menor que o tamanho da array)
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respLista.innerText = lista;        // Exibe a lista de pacientes na página
    frm.inPaciente.value = "";          // Limpa o conteúdo do campo do formulário
    frm.inPaciente.focus();             // Posiciona o cursor no campo
})

// Adiciona um "ouvinte" para o evento click no botão de Urgência do form
frm.btUrgencia.addEventListener("click", () => {
    // Verifica se as validações do formulário estão ok (no caso paciente is required)
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        frm.inPaciente.focus();         // Posiciona o cursor no campo inPaciente
        return                          // Retorna ao formulário
    }

    const nome = frm.inPaciente.value;  // Obtém nome do paciente
    pacientes.unshift(nome);            // Adiciona o paciente no início da array
    let lista = "";                     // String que irá concatenar os pacientes
    
    // forEach aplicado sobre a array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    respLista.innerText = lista;        // Exibe a lista de pacientes na página
    frm.inPaciente.value = "";          // Limpa o conteúdo do campo do formulário
    frm.inPaciente.focus();             // Posiciona o cursor no campo
})

frm.btAtender.addEventListener("click", () => {
    // Se o tamanho da array = 0
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus();
        return
    }

    const atender = pacientes.shift();  // Remove do início da fila (e obtém próximo nome)
    respNome.innerText = atender;       // Exibe o nome do paciente em atendimento
    let lista = "";                     // String que irá concatenar os pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    respLista.innerText = lista;        // Exibe a lista de pacientes na página
})
