const calcularCustoViagem = require("./exercicio-03");

describe("Teste Simples - Custo de Viagem", () => {
    
    test("Deve calcular o custo básico corretamente", () => {
        // Distância: 100km, Consumo: 10km/L, Preço: R$ 5,00
        // Esperado: 10 litros e R$ 50,00 de custo
        const resultado = calcularCustoViagem(100, 10, 5);

        expect(resultado.litrosNecessarios).toBe(10);
        expect(resultado.custoTotal).toBe(50);
    });

});