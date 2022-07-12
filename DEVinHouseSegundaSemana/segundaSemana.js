


var peso = parseFloat(prompt("Inorme seu peso."));
console.log(peso);
var altura = parseFloat(prompt("Informe sua altura. "))
console.log(altura);
var imc = peso / altura **2;
console.log(imc);
if (imc > 18.55 && imc < 24.99){
    alert("Parabéns! Mantenha-se assim.");
}else if (imc >= 25) {
    alert("Parabéns, você foi aprovado para o programa Quilos Mortais.");
} else {
    alert("Magrelo! Vá se alimentar, academia e tomar Bomba!")
}


