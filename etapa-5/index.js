function stringReverse() {

    let inverter = document.getElementsByName("string");

    valor = inverter.item(0).value.toString().split("");
    valorNormal = valor.reverse().join("");

    document.body.innerHTML += valorNormal;
}

