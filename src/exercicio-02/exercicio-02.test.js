const { calcularSalario } = require('./exercicio-02.js');

describe('calcularSalario', () => {
    test('deve calcular salário com bônus corretamente', () => {
        const resultado = calcularSalario(1000, 10);
        expect(resultado).toBe(1100);
    });

    test('deve retornar o mesmo salário quando bônus é 0%', () => {
        const resultado = calcularSalario(1000, 0);
        expect(resultado).toBe(1000);
    });

    test('deve calcular corretamente com bônus maior', () => {
        const resultado = calcularSalario(2000, 25);
        expect(resultado).toBe(2500);
    });
});