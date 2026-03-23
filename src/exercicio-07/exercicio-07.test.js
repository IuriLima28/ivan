const { calcularBitcoin } = require('./exercicio-07');
describe("Teste de investimento em Bitcoin", () => {
test("Deve calcular corretamente o valor total", () => {
const resultado = calcularBitcoin(0.5, 300000);
expect(resultado.valorTotal).toBe(150000);
});
});