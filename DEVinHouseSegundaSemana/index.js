var nome;
var nota;
var notas = [];
var soma = 0;
var media;
var contador = 0;


nome = window.prompt("Informe o nome do aluno");
while (contador < 4) {
    nota = parseFloat(window.prompt("Informe as notas" + (contador + 1)));
    console.log(nota);
    console.log(typeof nota);

    if (nota < 0 || nota > 10) {
        window.alert("Notas permitidas entre 0 e 10.");

    } else {
        notas.push(nota);
        contador++;
    }

}

for (i = 0; i <= notas.length - 1; i++) {
    soma += notas[i];

}

media = soma / notas.length;

if (media >= 7) {
    console.log("Aluno " + nome + " obteve a média de " + media + " e esta APROVADO.")
} else {
    console.log("Aluno " + nome + " obteve a média de " + media + " Parabéns esta REPROVADO.")
}
