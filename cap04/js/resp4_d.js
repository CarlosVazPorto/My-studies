const frm = document.querySelector("form");                 // Obtém os dados do formulário
const resp1 = document.querySelector("#outTriangulo");      // Acessa resposta se é um triangulo
const resp2 = document.querySelector("#outTipo");           // Acessa resposta do tipo de triangulo

frm.addEventListener("submit", (e) => {                     // Ouvinte do evento submit
    e.preventDefault();                                     // Evita o envio do formulário

    const ladoA = Number(frm.inLadoA.value);                // Valor do lado A do triângulo
    const ladoB = Number(frm.inLadoB.value);                // Valor do lado B do triângulo
    const ladoC = Number(frm.inLadoC.value);                // Valor do lado C do triângulo
    let isTriangle = false;

    if ((ladoA <= ladoB + ladoC) && (ladoB <= ladoA + ladoC) && (ladoC <= ladoA + ladoB)) {
        isTriangle = true;
        resp1.innerText = "Lados com estas medidas podem formar um triângulo.";
    } else {
        isTriangle = false;
        resp1.innerText = "Lados com estas medidas não podem formar um triângulo.";
        resp2.innerText = "";
        return;
    }                                                       // Verificação se lados podem formar um triangulo

    switch (isTriangle) {                                   // Verificação do tipo de triângulo
        case (isTriangle == true && (ladoA == ladoB && ladoA == ladoC)) :
            resp2.innerText = "Triângulo equilátero.";
            break;
        
        case (isTriangle == true && (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC)) :
            resp2.innerText = "Triângulo isósceles.";
            break;

        case (isTriangle == true) :
            resp2.innerText = "Triângulo escaleno.";
    }
})