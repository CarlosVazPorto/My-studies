// Programa JS para calcular multa e juros de contas em atraso

// Obtém os elementos da página
const frm = document.querySelector("form");

// Taxas da multa por atraso em 2% e dos juros por dia de atraso em 0.33%
const TAXA_MULTA = 2 / 100 ;
const TAXA_JUROS = 0.33 / 100 ;

// Ouvinte de evento do botão submit do formulário
frm.addEventListener("submit", (e) => {

// Evita o envio do formulário
    e.preventDefault();

// Obtém dados de entrada feitos pelo usuário
    const dataVenc = frm.inDataVenc.value;
    const valor = Number(frm.inValor.value);

// Cria variáveis (instancia objetos) do tipo Date()
    const hoje = new Date();
    const vencto =  new Date();

// Data vem no formato aaaa - mm - dd
    const partes = dataVenc.split("-");
    vencto.setDate(Number(partes[2]));
    vencto.setMonth(Number(partes[1]) - 1);
    vencto.setFullYear(Number(partes[0]));

// Calcula a diferença de dias entre datas (em ms)
    const atraso = hoje - vencto;

// Inicializa multa e juros com 0
    let multa = 0;
    let juros = 0;

// Se a conta estiver em atraso, converte ms do atraso em dias
// (1 dia = 24h x 60 min x 60 seg x 1000 ms = 86.400.000 ms)
    if (atraso > 0) {
        const dias = atraso / 86400000 ;
// Calcula multa e juros
        multa = valor * TAXA_MULTA ;
        juros = valor * TAXA_JUROS * dias ;
    }

// Calcula o total
    const total = valor + multa + juros ;

// Exibe os valores com duas casas decimais
    frm.outMulta.value = multa.toFixed(2);
    frm.outJuros.value = juros.toFixed(2);
    frm.outTotal.value = total.toFixed(2);

})
