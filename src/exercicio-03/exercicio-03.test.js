const { calcularCustoViagem } = require('./exercicio-03');

describe("Teste Simples - Custo de Viagem", () => {
    
    test("Deve calcular o custo básico corretamente", () => {
    
        const resultado = calcularCustoViagem(100, 10, 5);

        expect(resultado.litrosNecessarios).toBe(10);
        expect(resultado.custoTotal).toBe(50);
    });

});