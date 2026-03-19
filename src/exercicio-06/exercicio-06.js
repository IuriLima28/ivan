function calcularPosicaoMRU(s0, v, t) {
    const s = s0 + (v * t);

    return {
        posicaoInicial: s0,
        velocidade: v,
        tempo: t,
        posicaoFinal: s
    };
}
if (typeof module !== 'undefined') {
    module.exports = calcularPosicaoMRU;
}