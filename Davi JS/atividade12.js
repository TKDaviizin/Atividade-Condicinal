function verificarNumeroNoIntervalo(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        return true;
    } else {
        return false;
    }
}

console.log(verificarNumeroNoIntervalo(5, 1, 10));
console.log(verificarNumeroNoIntervalo(15, 1, 10)); 
console.log(verificarNumeroNoIntervalo(10, 1, 10)); 
console.log(verificarNumeroNoIntervalo(0, 1, 10)); 
