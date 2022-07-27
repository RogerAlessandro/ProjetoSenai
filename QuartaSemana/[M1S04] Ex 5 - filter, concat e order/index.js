// Crie um código javascript que irá juntar os dois arrays abaixo e coloque esse array concatenado em outra variável:

// let array1 = [1,3,4,5,3,7];
// let array2 = [1,2,6,4,8,5];
// Após fazer a junção remova os itens que se repetem usando o .includes ou o .filter
// Após isso ordene por ordem crescente.

let listaUm = [1,3,4,5,3,7];
let listaDois = [1,2,6,4,8,5];

var listaUnida = listaUm.concat(listaDois);

var listaSemRepetir = listaUnida.filter(function (listaUm, listaDois)  {
    return listaUnida.indexOf(listaUm) === listaDois;
});

var listaMaiorMenor = listaSemRepetir.sort();
console.log(listaMaiorMenor);
