let nome = 0
let sobrenome = 0

while (nome >= 0 || nome <= 0) { 
    nome = prompt(`Digite o seu nome:`);
}
while (sobrenome >= 0 || sobrenome <= 0) { 
    sobrenome = prompt(`Digite o seu sobrenome:`);
}
alert(`Seu primeiro nome é ${nome} e o segundo ${sobrenome} e tudo junto é ${nome} ${sobrenome}`);