function sortear() {
    var numeroInicial = parseInt(document.getElementById("numero_inicial").value);
    var numeroFinal = parseInt(document.getElementById("numero_final").value);
    var quantidadeResultados = parseInt(document.getElementById("quantidade_resultados").value);

    if (isNaN(numeroInicial) || isNaN(numeroFinal) || isNaN(quantidadeResultados)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    if (numeroInicial > numeroFinal) {
        alert("O número inicial não pode ser maior que o número final.");
        return;
    }

    var resultados = [];

    while (resultados.length < quantidadeResultados) {
        var numeroSorteado = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;

        if (!resultados.includes(numeroSorteado)) {
            resultados.push(numeroSorteado);
        }
    }

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Números sorteados: " + resultados.join(", ");

    // Criar PDF e adicionar resultados
    var pdf = new jsPDF();
    pdf.text("Números Sorteados", 10, 10);
    for (var i = 0; i < resultados.length; i++) {
        pdf.text("Resultado " + (i + 1) + ": " + resultados[i], 10, 20 + i * 10);
    }

    // Salvar PDF
    var pdfBlob = pdf.output("blob");
    var pdfUrl = URL.createObjectURL(pdfBlob);

    var downloadLink = document.createElement("a");
    downloadLink.href = pdfUrl;
    downloadLink.download = "resultados.pdf";
    downloadLink.click();
}