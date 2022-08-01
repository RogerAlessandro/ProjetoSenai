// Observe o array de objetos abaixo:

// let arrayMusicas = [
//     {
//         nome: "Believer",
//         banda: "Imagine Dragons",
//         anoDeLancamento: 2017,
//         isGood: false
//     },
//     {
//         nome: "Losing my Religion",
//         banda: "R.E.M",
//         anoDeLancamento: 1991,
//         isGood: false
//     },
//     {
//         nome: "Duality",
//         banda: "Slipknot",
//         anoDeLancamento: 2004,
//         isGood: false
//     },
//     {en
//         nome: "Imagination",
//         banda: "Foster the People",
//         anoDeLancamento: 2019,
//         isGood: false
//     },
//     {
//         nome: "Without me",
//         banda: "Halsey",
//         anoDeLancamento: 2018,
//         isGood: false
//     },
//     {
//         nome: "DiE4u",
//         banda: "Bring me the horizon",
//         anoDeLancamento: 2021,
//         isGood: false,
//     },
//     {
//         nome: "Hail to the king",
//         banda: "Avenged Sevenfold",
//         anoDeLancamento: 2013,
//         isGood: false
//     },
//     {
//         nome: "Rock you like a hurricane",
//         banda: "Scorpions",
//         anoDeLancamento: 1984,
//         isGood: false
//     },
//     {
//         nome: "Misery business",
//         banda: "Paramore",
//         anoDeLancamento: 2007,
//         isGood: false
//     },
//     {
//         nome: "Brianstorm",
//         banda: "Arctic Monkeys",
//         anoDeLancamento: 2007,
//         isGood: false
//     }
// ];
// primeiro altere todos os valores do atributo isGood que atualmente esta false para true
// ate porque na lista somente possui músicas boas rsrsrsrs.
// _Dica: utilize o .map para isso.

// Após isso usando os conhecimentos do DOM imprima em uma lista não ordenada apenas os nomes das músicas

let arrayMusicas = [
    {
        nome: "Believer",
        banda: "Imagine Dragons",
        anoDeLancamento: 2017,
        isGood: false
    },
    {
        nome: "Losing my Religion",
        banda: "R.E.M",
        anoDeLancamento: 1991,
        isGood: false
    },
    {
        nome: "Duality",
        banda: "Slipknot",
        anoDeLancamento: 2004,
        isGood: false
    },
    {
        nome: "Imagination",
        banda: "Foster the People",
        anoDeLancamento: 2019,
        isGood: false
    },
    {
        nome: "Without me",
        banda: "Halsey",
        anoDeLancamento: 2018,
        isGood: false
    },
    {
        nome: "DiE4u",
        banda: "Bring me the horizon",
        anoDeLancamento: 2021,
        isGood: false,
    },
    {
        nome: "Hail to the king",
        banda: "Avenged Sevenfold",
        anoDeLancamento: 2013,
        isGood: false
    },
    {
        nome: "Rock you like a hurricane",
        banda: "Scorpions",
        anoDeLancamento: 1984,
        isGood: false
    },
    {
        nome: "Misery business",
        banda: "Paramore",
        anoDeLancamento: 2007,
        isGood: false
    },
    {
        nome: "Brianstorm",
        banda: "Arctic Monkeys",
        anoDeLancamento: 2007,
        isGood: false
    }
];

arrayMusicas.map(musica => musica.isGood = true);
console.log(arrayMusicas);



const nomeMusica = arrayMusicas.filter(musica => musica.nome);

arrayMusicas.forEach(musica => {
    document.write(`<li>Musica: ${musica.nome}</li>`);
});
