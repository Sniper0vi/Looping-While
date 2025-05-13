let numEscolido = parseInt(prompt("Coloque um numero positivo"))

    while (numEscolido <= 0 || isNaN(numEscolido)) {
        alert("Esse numero nao é valido")
        numEscolido = parseInt(prompt("Coloque um numero positivo"))

    }
    alert("O seu numero é Positivo")
