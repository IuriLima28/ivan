function CalcularDesconto(preco, percentualDesconto) {
    const valorDesconto = (preco * percentualDesconto) / 100;
    const valorFinal = preco - valorDesconto;

    return {
        precoOriginal: preco,
        percentual: percentualDesconto,
        valorDesconto: valorDesconto,
        valorFinal: valorFinal
    };
}

if (typeof module !== 'undefined') {
    module.exports = CalcularDesconto;
}