const calcularCambio = require('./exercicio-10');
describe("Teste de investimento em moeda estrangeira", () => {
    test("Deve calcular corretamente o valor em reais", () => {
        const resultado = calcularCambio(1000, 5);
        expect(resultado.valorEmReais).toBe(5000);
        });
    });