function ePrimo(numero) {
    if (numero <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false; 
    }
    return true;
}

const numero = 4;
if (ePrimo(numero)) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}
