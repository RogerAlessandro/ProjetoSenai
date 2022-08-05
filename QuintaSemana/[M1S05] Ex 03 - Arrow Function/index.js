//Crie uma arrow function que recebe um array de números e calcula a média deles

const notas = [1,10,58,19,10,89,20,5,54];
let listaSoma = 0,
    mediaDasNotas;

const calculaMediaNota = (array = []) => {
    array.forEach(function (item) {
        listaSoma += item;
        mediaDasNotas = listaSoma / array.length;
    });
    return mediaDasNotas;
};
console.log(calculaMediaNota(notas));


