let num = parseInt(prompt("Me diga as suas notas"))
let i = 0
let resultado = 0
let calculo = 0

while (isNaN(num)){
    alert("Esse algarismo nao é valido")
    let num = parseInt(prompt("Por favor tente novamente"))

}
while (num >= 0){
    i++
    num += calculo
    let num = parseInt(prompt("Me diga a suas notas 2"))
}
while(num < 0 || i > 0){
    resultado = calculo/i
    alert(`A media sera ${resultado} `)

}

