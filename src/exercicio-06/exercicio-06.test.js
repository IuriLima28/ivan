const calcularPosicaoMRU = require("./exercicio-06");

describe("Teste de Movimento Retilíneo Uniforme (MRU)", () => {
    
    test("Deve calcular a posição final corretamente (s = 10 + 5 * 2 = 20)", () => {
        const resultado = calcularPosicaoMRU(10, 5, 2);
        
        expect(resultado.posicaoInicial).toBe(10);
        expect(resultado.velocidade).toBe(5);
        expect(resultado.tempo).toBe(2);
        expect(resultado.posicaoFinal).toBe(20);
    });

    test("Deve calcular corretamente para um objeto parado (v = 0)", () => {
        const resultado = calcularPosicaoMRU(50, 0, 10);
        expect(resultado.posicaoFinal).toBe(50);
    });

    test("Deve calcular corretamente com velocidade negativa (movimento retrógrado)", () => {
        const resultado = calcularPosicaoMRU(100, -10, 5);
        expect(resultado.posicaoFinal).toBe(50);
    });
});