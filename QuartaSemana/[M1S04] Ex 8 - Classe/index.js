// Crie uma classe chamada **Serie** com os seguintes atributos: *nome*, *anoLancamento*, *qttTemporada*. 

//  - Construa o construtor dessa classe com todos os atributos.
//  - Após isso, com um laço de repetição a sua escolha, instancie a classe 4 vezes com os dados sendo capturados por um prompt
//   e depois adicione a classe a um array chamado series.
//  - Após isso imprima no documento (usando o innerHTML) a série mais antiga (ou seja, a que possui o menor anoLancamento). 
//  - Para percorrer o array com as 4 classes utilize o forEach.
class Serie {
    nome;
    anoLancamento;
    qttTemporada;

    constructor(nome, anoLancamento, qttTemporada) {
        this.nome = nome;
        this.anoLancamento = anoLancamento;
        this.qttTemporada = qttTemporada;
    }
}

var serieList = [];
for (var i = 0; i < 4; i++) {
    var nome = window.prompt(`Informe o nome da série`);
    var anoLancamento = parseInt(window.prompt("Qual seria o ano de lançamento da série?"));
    var qttTemporada = parseInt(window.prompt("Quantas temporadas tem esta série?"));

    const serie = new Serie(nome, anoLancamento, qttTemporada);
    serieList.push(serie);
}

const serieMaisAntiga = serieList.reduce(function(prev, current) {
    return (prev.anoLancamento > current.anoLancamento) ? current : prev
})


var imprimeNaTela = document.getElementById('imprimeNaTela');
imprimeNaTela.innerHTML = `A série mais antiga é: ${serieMaisAntiga.nome}   e seu ano de lançamento foi: ${serieMaisAntiga.anoLancamento}`;






