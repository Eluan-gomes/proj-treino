
function sortear() {

    var numeroInicial = document.getElementById("numero_inicial").value;

    var numeroFinal = document.getElementById("numero_final").value;


    if (numeroInicial > numeroFinal) {

        alert("O número inicial não pode ser maior que o número final.");

        return;

    }


    var numeroSorteado = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;

    document.getElementById("resultado").innerHTML = "Número sorteado: " + numeroSorteado;

}
