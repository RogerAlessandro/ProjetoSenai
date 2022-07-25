// Faça um site com uma lista de itens (por exemplo, de brinquedos), que tenha:
// um campo de input do item um botão para criar um item na lista

function enviar(event) {
    event.preventDefault();
    var texto = document.getElementById('txt').value;
    var lista = document.getElementById('lista');
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(texto));
    li.setAttribute('id', texto);

    lista.appendChild(li);
}