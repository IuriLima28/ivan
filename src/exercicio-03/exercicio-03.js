function calcularCustoViagem(distancia, consumoMedio, precoCombustivel) {
    const litrosNecessarios = distancia / consumoMedio;
    const custoTotal = litrosNecessarios * precoCombustivel;

    return {
        distancia: distancia,
        consumoMedio: consumoMedio,
        litrosNecessarios: litrosNecessarios,
        custoTotal: custoTotal
    };
}

if (typeof module !== 'undefined') {
    module.exports = calcularCustoViagem;
}