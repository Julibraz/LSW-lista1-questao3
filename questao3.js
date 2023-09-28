document.getElementById('botaoCalcular').addEventListener('click', function() {
    const valorGasolina = parseFloat(document.getElementById('precoGasolina').value);
    const valorAlcool = parseFloat(document.getElementById('precoAlcool').value);
    const resultado = calcularMelhorCombustivel(valorGasolina, valorAlcool);

    if(resultado === 0) {
        document.getElementById('resultado').textContent = "Melhor abastecer com Gasolina!";
    } else if(resultado === 1) {
        document.getElementById('resultado').textContent = "Melhor abastecer com Álcool!";
    } else {
        document.getElementById('resultado').textContent = "Valores inválidos!";
    }
});

function calcularMelhorCombustivel(gasolina, alcool) {
    if(alcool < gasolina * 0.7) {
        return 1;  //alcool
    } else {
        return 0;  //gasolina
    }
}
