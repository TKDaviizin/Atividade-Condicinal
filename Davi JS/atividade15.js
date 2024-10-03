function verificarCorSemaforo(cor){
   switch (cor.toLowerCase()){
    case 'verde':
        console.log("A cor verde significa seguir.");
        break
    case 'amarelo':
        console.log ("A cor amarela significa atenção.");
    break;
    case 'vermelho':
        console.log ("A cor vermelha significa parar.");
    break;
    default:
        console.log("Cor invalida para o semáforo.");
            break;
    }
}
verificarCorSemaforo('verde')