var peso = parseFloat(prompt("Informe seu peso. "));
console.log(peso);
var altura = parseFloat(prompt("Informe sua altura. "));
console.log(altura);
var imc = peso / altura **2;
console.log(imc);
if (imc > 18.55 && imc < 24.99){
    alert("Parabéns! Você esta no peso ideal. ");
}else if(imc >= 25){
alert("Você esta acima do peso. ");
} else {
    alert("Você esta abaixo do peso, procure um médico. ")
}


