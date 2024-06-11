function averiguarValor() {
    let nome = document.getElementById('nome').value;
    let peso = parseFloat(document.getElementById('peso').value);
    
    if (validarDados(nome, peso)) {
       
        let limitePeso = 20;
        let valorMulta = 8.99;
    

        if (peso <= limitePeso) {
            alert(`Pescador: ${nome}\nPeso da pesca: ${peso}kg\nSituação: Dentro do limite de regulamentação.`);
        } else {
            let excessoPeso = peso - limitePeso;
            let multa = excessoPeso * valorMulta;
            alert(`Pescador: ${nome}\nPeso da pesca: ${peso}kg\nSituação: Ultrapassou o limite!\nMulta a pagar: R$ ${multa}`);
    }
    }
}

function validarDados(pescador, pescado) {
    if( isNaN(pescado) || pescador.trim()===''){
        alert('Insira Valores válidos.')
        return
    }
    return true
}