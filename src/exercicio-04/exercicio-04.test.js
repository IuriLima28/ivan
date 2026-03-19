const calcularLucro = require("./exercicio-04");

describe("Cálculo de Lucro", () => {
    
    test("Deve calcular o lucro corretamente (80 - 50 = 30)", () => {
        const resultado = calcularLucro(50, 80);
        expect(resultado.custo).toBe(50);
        expect(resultado.venda).toBe(80);
        expect(resultado.lucro).toBe(30);
    });

    test("Deve calcular prejuízo corretamente (9 - 6 = -3)", () => {
        const resultado = calcularLucro(9, 6);
        expect(resultado.lucro).toBe(-3);
    });

});