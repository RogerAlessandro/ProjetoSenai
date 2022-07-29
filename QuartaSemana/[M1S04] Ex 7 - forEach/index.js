
// Crie um código javascript para verificar se todos os alunos do array de objetos arrayAlunos abaixo estão acima da média que será 7.
// Se o retorno for verdadeiro imprima em tela "Parabéns a todos da turma", porem se não for imprima em uma lista html todos os alunos que ficaram na "recuperação".

let arrayAlunos = [
    {
        nome: "Carlos",
        media: 10
    },
    {
        nome: "Julia",
        media: 8
    },
    {
        nome: "Rayane",
        media: 6
    },
    {
        nome: "Arthur",
        media: 5
    }
]
var nome;
var media;

const aprovados = arrayAlunos.filter(aluno => aluno.media >= 7);

const reprovados = arrayAlunos.filter(aluno => aluno.media < 7);
window.alert("Recuperação");
reprovados.forEach(reprovado => {
    document.write(`<br>nome: ${reprovado.nome} media: ${reprovado.media}</br>`);
});



