// Construa um código javascript que irá remover de um array um item que irá ser passado no parâmetro desse método.
// O fluxo consiste em capturar em um input html um item do array e ao apertar em um botão fazer com que esse item seja excluído 
// (utilize o addEventListener de click). Pode conferir no console.log() como está o array após a exclusão.
const preferenciaCulinaria = ["brasileira", "oriental", "italiana", "mexicana", "portuguesa", "americana"];


var button = document.getElementById("dlt");
button.addEventListener("click", remover);

function remover() {
    console.log(preferenciaCulinaria);
    var input = document.getElementById("txt").value;
    var index = preferenciaCulinaria.indexOf(input);
    if (index >= 0) {
        preferenciaCulinaria.splice(index, 1);
    }

    console.log(preferenciaCulinaria);

}