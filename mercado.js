let compra = 1
let soma = 0

while (compra != 0) {

    compra = parseInt(prompt("Digite o valor da sua compra. (O programa para quando você digitar o número 0)"))

    if (isNaN(compra) || compra < 0) {
        alert("Esse algarismo nao é valido")
    } else {

        soma =+ compra
    }
}

alert(`O valor da sua compra é de ${(soma)} reais.`)