const numSecreto = Math.floor(Math.random() * 100);

let numTentativa = 0;

let i = 0;

while(numTentativa !== numSecreto){
    i++;

    do{
        numTentativa=parseInt(prompt(`${i}º tentativa. Tente adivinhar o numero denovo`))

    }while(isNaN(numTentativa) || numTentativa<1 || numTentativa>100);
    if(numTentativa<numSecreto){
        alert("Seu numero é maior do que o sorteado")
    }else if (numTentativa>numSecreto){
        alert("O numero sorteado é menor do que esse")
    }
}
alert(`PARABENS VOCE ACERTOU O NUMERO SECRETO ERA ${numSecreto}`)