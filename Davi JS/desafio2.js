var nome = "Davi"
var ultimoIndice = nome.length -1
var palavraInversa = ""
do {
    palavraInversa = palavraInversa + nome[ultimoIndice]
    ultimoIndice--
}while(ultimoIndice >=0)
    console.log(palavraInversa)