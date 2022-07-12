var numeroParImpar = window.prompt("Insira um numero.");
var total = numeroParImpar % 2;
var resultado = total % 2 == 0 ? 'Par' : 'Impar';
document.getElementById('resultado').innerHTML = numeroParImpar + ' é ' + resultado;