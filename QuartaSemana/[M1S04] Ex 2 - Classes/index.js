/*Crie uma classe chamada Filme com os atributos nome, 
anoDeLancamento e diretor. Fora do escopo dessa classe, instancie ela e preencha os campos acessando seus atributos por meio do ponto (.).*/

class Filme {

    constructor(nome, anoDeLancamento, diretor) {
        this.nome = nome;
        this.anoDeLancamento = anoDeLancamento;
        this.diretor = diretor;
    }

}

// Criando classe e definindo os valores pelo construtor
/*var filme = new Filme('Harry Potter', '2000', 'J. K. Rowling')*/
// Criando classe e definindo os valores pelos atributos

var filme = new Filme();
filme.nome = 'Harry Potter';
filme.anoDeLancamento = '2000';
filme.diretor = 'J. K. Rowling';

console.log(filme);