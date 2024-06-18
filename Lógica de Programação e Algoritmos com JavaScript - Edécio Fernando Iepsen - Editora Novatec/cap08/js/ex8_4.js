// Carlos Vaz Porto
// JavaScript
// June, 2024
// Example program 8.4 from the book "Lógica de Programação e Algoritmos com JavaScript", de Edécio Fernando Iepsen, Novatec Editora, 2ª Edição
// This program works with a HTML and a CSS counterparts

// JavaScript program designed for a pizza parlor waiter to take orders from customers

// Accesses elements from the page
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// Global array that stores the items from the client's order
const itens = [];

// Event listener for radio button "Pizza", that switches between show / hide options
frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta";
    frm.inPizza.className = "exibe";
})

// Event listener for radio button "Bebidas", that switches between show / hide options
frm.rbBebida.addEventListener("click", () => {
    frm.inPizza.className = "oculta";
    frm.inBebida.className = "exibe";
})

// Event listener for when the "Detalhes" field is focused on
frm.inDetalhes.addEventListener("focus", () => {
// Gets the value from the selected item when radio button "Pizza" is checked
    if (frm.rbPizza.checked) {
        const pizza = frm.inPizza.value;
// Shows number of available toppings that each pizza size may receive
        const num = pizza == "brotinho" ? 1 : pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
// Placeholder atribute gives a hint on how many toppings there are for each size of pizza
        frm.inDetalhes.placeholder = `Até ${num} sabores`;
    }
})

// When the field is not focused on anymore, the hints are cleared
frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = "";
})

// Event listener for the "submit" from the "Adicionar" button of the form
frm.addEventListener("submit", () => {
// Prevents sending the contents of the form to a database (default behavior)
    e.preventDefault();
// Criates a variable to display the ordered items
    let produto;
// Gets the number of the selected item and displays its related text
    if (frm.rbPizza.checked) {
        const num = frm.inPizza.selectedIndex;
        produto = frm.inPizza.options[num].text;
    } else {
        const num = frm.inBebida.selectedIndex;
        produto = frm.inBebida.options[num].text;
    }

// Accesses the contents from inDetalhes, adds it to the array and displays the items of the order
    const detalhes = frm.inDetalhes.value;
    itens.push(produto + " (" + detalhes + ") ");
    resp.innerText = itens.join("\n");

// Clears the form and triggers a click on rbPizza
    frm.reset();
    frm.rbPizza.dispatchEvent(new Event("click"));

})

