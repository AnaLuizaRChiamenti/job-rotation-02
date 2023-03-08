
const faturamentoMarco = JSON.parse(dados)

let max = faturamentoMarco.reduce((resultado, proximo) => {
    if (!proximo.valor) {
        return resultado
    };

    if (proximo.valor > resultado) {
        return proximo.valor
    };

    return resultado
}, 0);



let min = faturamentoMarco.reduce((resultado, proximo) => {
    if (!proximo.valor) {
        return resultado
    };

    if (proximo.valor < resultado) {
        return proximo.valor 
    };

    return resultado
}, max);



document.write(`O maior valor é R$${max}  \n`);
document.write(`O menor valor é R$${min}  \n`);

