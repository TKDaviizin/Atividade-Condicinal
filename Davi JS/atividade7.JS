function converterMoeda(valorEmReais, moedaDestino) {

    const taxasDeCambio = {
        'dolar': 5.47,
        'euro': 6.1,    
    };

    let valorConvertido;

    switch (moedaDestino.toLowerCase()) {
        case 'dolar':
            valorConvertido = valorEmReais / taxasDeCambio.dolar;
            break;
        case 'euro':
            valorConvertido = valorEmReais / taxasDeCambio.euro;
            break;
        default:
            console.log('Moeda não suportada');
            return;
    }

    console.log(`R$ ${valorEmReais} é equivalente a ${valorConvertido.toFixed(2)} ${moedaDestino}`);
}
converterMoeda(100,'euro')
