function sortear() {
    var numeroInicial = parseInt(document.getElementById("numero_inicial").value);
    var numeroFinal = parseInt(document.getElementById("numero_final").value);

    if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    if (numeroInicial > numeroFinal) {
        alert("O número inicial não pode ser maior que o número final.");
        return;
    }

    var numeroSorteado = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;

    document.getElementById("resultado").innerHTML = "Número sorteado: " + numeroSorteado;
}