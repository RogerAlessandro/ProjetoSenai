// Em um prompt capture o seu nome, idade e o sobrenome, após isso usando o template string junte para a string abaixo.

// "Eu, nome sobrenome, possuo idade anos, e nasci em calculo do ano em que estamos - sua idade . "

let nome = window.prompt('Informe seu nome');
let sobrenome = window.prompt('Informe seu sobrenome');
let idade = parseFloat(window.prompt('Informe idade'));
let aniversario = window.confirm('Informe quando nasceu');

if (aniversario == true) {
    document.write(`Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${2022-idade}.`);
} else {
    document.write(`Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${2022-idade-1}.`);
}