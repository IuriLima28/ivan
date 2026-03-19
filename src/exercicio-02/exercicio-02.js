function calcularSalario(salarioBase, percentualBonus){
    var bonus = salarioBase * (percentualBonus/100)
    var salarioFinal = salarioBase + bonus
    return salarioFinal
}

if (typeof module !== 'undefined') {
    module.exports = { calcularSalario }}