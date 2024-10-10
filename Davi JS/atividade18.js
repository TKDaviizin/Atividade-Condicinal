function divisao(n1, n2, op) {
    switch (op) {
        case 'divisão':
            if (n2 === 0) {
                return "Não é possível dividir por zero.";
            }
            return n1 / n2;
    }
}

console.log(divisao(2, 2,'divisão'));