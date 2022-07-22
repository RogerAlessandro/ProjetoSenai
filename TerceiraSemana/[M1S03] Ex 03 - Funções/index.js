//3 - Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares.
//Em seguida imprima na tela uma string informando a quantidade de valores informados, os ímpares e os pares
//(ex: A quantidade informada foi _, a de valores pares foi _, e a de valores ímpares foi )

//================================================================================================================================================//

function recebeParImpar() {
    var nrParImpar = [];
    var i = 1;
    var nrPar = [];
    var nrImpar = [];
    var qtdPar;
    var qtdImpar;

    while (i < 11) {
        var number = parseInt(prompt("Informe o " + i + "° numero."));

        if (number % 2 === 0) {
            nrPar.push(number);
        } else {
            nrImpar.push(number);
        }
        nrParImpar.push(number);
        i++;

    }
    console.log(nrImpar);
    console.log(nrPar);
    window.alert("A quantidade informada foi de  " + nrParImpar.length + " numeros, e os valores pares foi: " + nrPar + " e os valores ímpares foi: " + nrImpar);
}
recebeParImpar();