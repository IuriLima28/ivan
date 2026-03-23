function calcularGorjeta(valorConta, percentualGorjeta) {
    const valorGorjeta = (valorConta * percentualGorjeta) / 100;
    const total = valorConta + valorGorjeta;
  
    return {
      valorGorjeta,
      total
    };
  }
  
  if (typeof module !== 'undefined') {
    module.exports = calcularGorjeta;
}