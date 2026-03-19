const CalcularDesconto = require('./exercicio01');

test('calcula desconto corretamente', () => {
    const resultado = CalcularDesconto(200, 10);

    expect(resultado.precoOriginal).toBe(200);
    expect(resultado.percentual).toBe(10);
    expect(resultado.valorDesconto).toBe(20);
    expect(resultado.valorFinal).toBe(180);
});