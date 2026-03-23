const converterTemperatura = require('./exercicio-08');

describe("Teste de conversão de temperatura", () => {
  test("Deve converter Celsius para Kelvin corretamente", () => {
    const resultado = converterTemperatura(0, "CtoK");
    expect(resultado.resultado).toBeCloseTo(273.15);
  });
});