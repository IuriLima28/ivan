function calcularBitcoin(investimento, valorBitcoin){
    var valorTotal = investimento * valorBitcoin;

    return {
        valorTotal: valorTotal
    };
}

if (typeof module !== 'undefined') {
    module.exports = { calcularBitcoin }}