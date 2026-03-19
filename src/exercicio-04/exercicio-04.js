function calcularLucro(custo, venda) {
    const lucro = venda - custo;

    return {
        custo: custo,
        venda: venda,
        lucro: lucro
    };
}

if (typeof module !== 'undefined') {
    module.exports = calcularLucro;
}