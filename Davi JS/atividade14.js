function verificarVoto(idade){
    if (idade < 16) {
        console.log("Não votam");
    } else if (idade >= 16 && idade < 18) {
        console.log("Facultativo");
    } else if (idade >= 18 && idade <= 70) {
        console.log("Voto Obrigatório");
    } else {
        console.log("Facultativo");
    }
}
verificarVoto(16)