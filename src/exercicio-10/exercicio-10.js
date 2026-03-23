function calcularCambio(valorInvestido, taxa){
    var valorEmReais = valorInvestido * taxa

    return {
        valorEmReais: valorEmReais
    };
}

if (typeof module !== 'undefined') {
    module.exports = { calcularCambio }}