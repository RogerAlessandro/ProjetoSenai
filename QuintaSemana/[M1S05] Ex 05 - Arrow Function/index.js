//Utilize o if ternário para construir uma função que recebe o número do dias e retorna se pertence a primeira ou a segunda quinzena

const quizenaPrimeiraOuSegunda = (dia) =>
    dia >= 16 ? "Segunda Quinzena" : "Primeira Quinzena";

console.log(quizenaPrimeiraOuSegunda(22))