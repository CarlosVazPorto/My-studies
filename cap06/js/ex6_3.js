const frm = document.querySelector("form");     // Obtém os elementos da página
const resp = document.querySelector("pre");
const carros = [];      // Declara array global

frm.addEventListener("submit", (e) => {     // Ouvinte de evento do submit do form
    e.preventDefault();     // Evita o envio do formulário
    const modelo = frm.inModelo.value;      // Obtém os dados do formulário
    const preco = Number(frm.inPreco.value);
    carros.push({modelo, preco});       // Adiciona dados à array carros
    frm.inModelo.value = "";        // Limpa os campos do form
    frm.inPreco.value = "";
    inModelo.focus();       // Posiciona o cursor em inModelo
    // Dispara um evento de click em btListar (equivale a um click no botão da página)
    frm.btListar.dispatchEvent(new Event("click"));
})

frm.btListar.addEventListener("click", () => {      // Ouvinte de evento do botão Listar
    if (carros.length == 0) {       // Se a array estiver sem elementos
        alert("Não há carros na lista!");
        return
    }
    // Método reduce() concatena uma string, obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) => 
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "");
    resp.innerText = `Lista dos veículos cadastrados\n${"-".repeat(40)}\n${lista}`;
})

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));
    if (maximo == 0 || isNaN(maximo)) {     // Se não for informado um valor válido
        return                              // ... retorna    
    }
    // cria uma nova array com os objetos que atendem a condição de filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo);
    if (carrosFilter.length == 0) {     // Verifica se há elementos na array
        alert("Não há carros na faixa de preço desejada.");
        return
    }
    let lista = "";
    for (const carro of carrosFilter) {     // Percorre cada elemento da array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
    }
    resp.innerText = `Carros até R$ ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
})

frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Informe o percentual de desconto:"));
    if (desconto == 0 || isNaN(desconto)) {     // Se não informou ou informou valor inválido
        return                                  // ... retorna
    }
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))
    let lista = "";
    for (const carro of carrosDesc) {       // Percorre cada elemento da array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;
})
