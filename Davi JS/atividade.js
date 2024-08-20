var moeda = "dolar"
var valor = 80
var valorf

switch(moeda){
    case "dolar":
        valorf = valor / 5.47;
        break;
    case "euro":
        valorf = valor / 6.1;
        break;
    case "libra":
       valorf = valor * 0.14;
        break;
        default:
            console.log("Operação invalida.")
}
console.log(valorf)