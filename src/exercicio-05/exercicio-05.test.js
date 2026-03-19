const { calcularInvestimento } = require('./exercicio-05.js');

describe('calcularInvestimento', () => {

    test('deve calcular rentabilidade positiva corretamente', () => {
        const resultado = calcularInvestimento(1000, 1200);
        expect(resultado).toBe(20);
    });

});