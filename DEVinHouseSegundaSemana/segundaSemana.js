// var contador = 0, resposta, qtdPessoas = 0;
// while (contador < 4) {
//     resposta = window.prompt("Qual seria sua classificação para a série stranger things? ");

//     switch (resposta) {
//         case "ruim": qtdPessoas++;
//             break;
//         case "bom":
//             break;
//         case "excelente":
//             break;

//         default: resposta = window.prompt("Opções válidas são apenas Bom, Ruim ou Exelente. \n Digite novamente sua avaliação. ");
//             if (resposta == "ruim") {
//                 qtdPessoas++;
//             }

//     }
//     contador++;
// }

// document.getElementById("resultado").innerHTML = '<h3>Quantidade de pessoas que classificou como ruim foi: ' + qtdPessoas + '</h3>'


for (let i = 1; i <= 10; i ++) {
    let result = 5 * i;
    console.log(result);
    document.write("<p> 5 x", i, "=", result, "</p>" );
}