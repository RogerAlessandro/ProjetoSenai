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

//             document.getElementById("resultado").innerHTML = '<h3>Quantidade de pessoas que classificou como ruim foi: ' + qtdPessoas + '</h3>'


//             for (let i = 1; i <= 10; i++) {
//                 let result = 5 * i;
//                 console.log(result);
//                 document.write("<p> 5 x", i, "=", result, "</p>");
//             }
//     }
//     contador++;
// }

// document.getElementById("resultado").innerHTML = '<h3>Quantidade de pessoas que classificou como ruim foi: ' + qtdPessoas + '</h3>'


// for (let i = 1; i <= 10; i++) {
//     let result = 5 * i;
//     console.log(result);
//     document.write("<p> 5 x", i, "=", result, "</p>");
// }

var produtos = ['Hortifruti', 'Laticinios', 'Carnes', 'Peixes', 'Aves', 'Finaliza Pedido'];
var qtd = [0, 0, 0, 0, 0];
var finaliza = false;
var opcao = "";

while (finaliza == false) {
    opcao = window.prompt("Olá, qual dos nossos produtos deseja comprar: 1-Hortifruti, 2-Laticinios, 3-Carnes, 4-Peixes, 5-Aves, 6-Finaliza Pedido");
    
    if (parseInt(opcao) < 1 || parseInt(opcao) > 6) {
        opcao = window.prompt("Favor inserir os numerais de 1 a 5 para e produtos e 6 para finalizar a venda");
    } else {
        switch (opcao) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
                var i = parseInt(opcao) - 1;
                var qt = 0;
                qt = window.prompt("Quantos " + produtos[i] + " você deseja comprar?");
                qtd[i] = qtd[i] + parseInt(qt);
                break;
            case '6':
                window.alert("Obrigado pelas compras, volte sempre. ");
                finaliza = true;
                break;
        }
    }
}
document.write("<br /> Os item comprados foram: ")

for (i = 0; i <= qtd.length - 1; i++) {
    document.write("<br />" + produtos[i] + " - " + qtd[i] + " itens ")
}
const qtd_maior = Math.max.apply(0, qtd);
const prod_maior = qtd.indexOf(qtd_maior);
document.write("<p>O item " + produtos[prod_maior] + " Foi o mais solicitado com " + qtd_maior + " itens.</p>");

