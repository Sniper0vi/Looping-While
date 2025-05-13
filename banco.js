let valorInicial = 8001
let valorSaque = 0

do {

    valorSaque = parseFloat(prompt("Quanto voce vai querer sacar hoje " + valorInicial));

    if (isNaN(valorSaque) || valorSaque <= 0) {
        alert("Esse valor ai nao da!");
    } else {
        if (valorSaque > valorInicial) {
            alert("Voce nao tem todo esse dinheiro")
        } else
            valorInicial = valorInicial - valorSaque
    }


} while (valorInicial > 0)

alert("Seu saldo é 0.")