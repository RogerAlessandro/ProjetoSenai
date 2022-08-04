// Crie 2 funções, ambas recebem um número e retorna true ou false:
// - a primeira  verifica se é par;
// - a segunda verifica se é ímpar.

// Em seguida crie uma função que recebe como parâmetros: um array de números e uma função callback.
// Essa função principal deverá ser capaz de filtrar os números e retornar um array de números filtrados (independente de qual seja a função callback).

// Dica: o filtro poderá ser de números ímpares ou pares.

function mostraPar(numero) {
    if(numero % 2 == 0) {
        return true;
    }
}

function mostraImpar(numero) {
    if(numero % 2 != 0) {
        return false;
    }
}

let listaPar = []
let listaImpar = []

var numeros = [1,2,3,4,5,6,7,8,9]


numeros.forEach(numero => {
    if(mostraPar(numero) == true) {
        listaPar.push(numero);
    }else {
        listaImpar.push(numero);
    }
});

console.log(`Numeros Pares =  ${listaPar}`);

console.log(`Numeros Impares =  ${listaImpar}`);
