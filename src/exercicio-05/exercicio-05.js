function calcularInvestimento(valorInvestido, valorAtual){
    var lucro = valorInvestido - valorAtual
    var rentabilidade = ((valorAtual-valorInvestido)/valorInvestido)*100
    return rentabilidade
}

if (typeof module !== 'undefined') {
    module.exports = { calcularInvestimento }}