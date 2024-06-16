// Função "tradicional" para mostrar no console a hora atual

/* const mostraHora = () => {
	const data = new Date();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    console.log(`Atenção para o horário: ${hora}:${min}:${seg}`);
}

// Chamada da função pelo método setInterval a cada 5 segundos

setInterval(mostraHora, 5000); */

// Função "anônima" de seta que realiza as mesmas tarefas da função acima

setInterval(() => {
    const data = new Date();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    console.log(`Atenção para o horário: ${hora}:${min}:${seg}`);
}, 5000);

