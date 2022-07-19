function NmParImpar() {
    var number = window.prompt("Insira um numero.");
    const resultado = parseInt(number) % 2 == 0 ? "Par" : "Impar";
    document.getElementById('resultado').innerHTML = ' Numero é ' + resultado;
}

NmParImpar();

