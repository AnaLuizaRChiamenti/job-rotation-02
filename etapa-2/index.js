function fibonacci() {
    let numeroInformado = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    let anterior = 0;
    let proximo = 1;
    let soma = 0;

    for (let contador = 0; contador < numeroInformado; contador++) {
        soma = anterior + proximo;
        anterior = proximo;
        proximo = soma;
    }

    resultado.innerHTML = `Fibonacci de ${numeroInformado}: ${anterior}`;
}