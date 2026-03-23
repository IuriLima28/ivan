const calcularGorjeta = require('./exercicio09');
describe("Teste de cálculo de gorjeta", () => {
test("Deve calcular corretamente gorjeta de 10% sobre 100", () => {
const resultado = calcularGorjeta(100, 10);
expect(resultado.valorGorjeta).toBe(10);
expect(resultado.total).toBe(110);
});
});
