// Programa JS de validação de senhas

// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Ouvinte de eventos do botão submit do formulário
frm.addEventListener("submit", (e) => {

// Evita o envio do formulário
    e.preventDefault();

// Obtém a senha informada pelo usuário
    const senha = frm.inSenha.value;

// Cria array com os possíveis erros
    const erros = [];

// Verifica se o tamanho da senha é inválido
    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres");
    }

// Verifica se não possui números
    if (senha.match(/[0-9]/g) == null) {
        erros.push("possuir números (no mínimo um)");
    }

// Verifica se não possui letras minúsculas
    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minúsculas (no mínimo uma)")
    }

// Verifica se não possui letras maiúsculas, ou se possui somente uma
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
        erros.push("possuir letras maiúsculas (no mínimo duas)");
    }

// Verifica se não possui símbolos ou "_"
    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir símbolos (no mínimo um)");
    }

// Se a array erros está vazia, significa que não foram encontrados erros
    if (erros.length == 0) {
        resp.innerText = "Ok! Senha válida!";
    } else {
        resp.innerText = `Erro! A senha deve ${erros.join(", ")}.`; 
    }

})
