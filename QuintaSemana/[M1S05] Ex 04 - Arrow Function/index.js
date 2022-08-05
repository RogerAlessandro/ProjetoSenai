//Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos

listaPositivoNegativo = [14, 89, -51, 37, -1, -64, 4, 99, -40]
listaDePositivos = [];

const SoQueroNumerosPositivos = array => {
    for (const item of array) {
        if (item >= 0) {
            listaDePositivos.push(item);
        };
    }
    return listaDePositivos;
}

console.log(SoQueroNumerosPositivos(listaPositivoNegativo));