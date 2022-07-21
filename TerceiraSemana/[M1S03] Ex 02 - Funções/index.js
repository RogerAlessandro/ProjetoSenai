// [M1S03] Ex 02 - Funções

// Crie uma função nomeada que recebe um array de elementos, 
// imprima cada um dos elementos e em seguida retorne a quantidade de elementos no array (seu tamanho).




var mostraNomes = ['Petruquio', 'Câmélu', 'Brutos', 'Malaquias', 'Tonico'];


function imprimeElementosERetornaQuantidade() {
    console.log(mostraNomes);
    for (nomes of mostraNomes) {
        console.log(nomes);
    }
    return mostraNomes.length
}
console.log(imprimeElementosERetornaQuantidade());
