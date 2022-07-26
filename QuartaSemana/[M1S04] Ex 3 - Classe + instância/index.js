// Crie uma classe chamada Pessoa com os atributos nome, idade, cpf e anoAniversario. 
// Agora construa um método chamado podeDirigir dentro dessa classe para verificar se a idade é maior ou menor que 18, 
// se for maior ou igual a 18 o retorno desse método será true se não false. Agora, fora dessa classe crie uma instância (usando o new ) 
// inicialize ela (usando o acesso a um atributo " . ") para uma variável const e verifique o retorno com os seus dados em seus atributo


class dadosUsuario {

    nome;
    idade;
    cpf;

    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    podeDirigir() {

        if (this.idade >= 18) {
            alert(`nome do usuario ${this.nome}  com idade de ${this.idade}  e seu numero de CPF é ${this.cpf} esta com idade para tirar a habilitação.`);
        } else {
            alert("Não atingiu a idade minima para tirar a primeira hailitação.");
        }
    }

}
var usuario = new dadosUsuario();

usuario.nome = window.prompt("Informe seu nome.");
usuario.idade = window.prompt("Informe sua idade.");
usuario.cpf = window.prompt("Informe seu CPF.");

usuario.podeDirigir();


