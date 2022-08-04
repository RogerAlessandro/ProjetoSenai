//Crie um site com um botão que espera receber um evento de click e uma função callback que informe ao usuário que o botão foi clicado.
let namber = 0;


function mais() {
namber = namber + 1
mostraTela()
}

function menos() {
namber = namber - 1
mostraTela()
}

function mostraTela() {
    const p = document.querySelector("p")
    p.innerText = namber
}


mostraTela()