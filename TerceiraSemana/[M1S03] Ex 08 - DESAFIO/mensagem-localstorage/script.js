C/*rie um site com os seguintes requisitos:

um campo de texto (input) onde o usuário irá digitar uma mensagem

três botões:

um botão “adicionar”, que no momento do clique insira a mensagem na tela

um botão “salvar mensagem”, que no momento do clique salve as informações no localStorage
opcional: se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.

um botão “mostrar mensagem”, que após o recarregamento da página, no momento do clique busque a mensagem no localStorage e exiba na tela
opcional: se não houver mensagem cadastrada no localStorage, deve mostrará na tela: “não há ítens salvos”*/
function adicionar(event) {
    event.preventDefault(); //Previne comportamento padrão de recarregar a página

    var input = document.getElementById('msg');
    if (input.value.length == 0) {
        alert('Informe uma mensagem');
        input.focus();
        return;
    }

    var ul = document.getElementById('lista');

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    li.setAttribute('id', input.value);

    ul.appendChild(li);

    limpaInputEAplicaFocus();
}

function salvarMensagens() {
    var ul = document.getElementById('lista');
    var listLi = ul.getElementsByTagName("li");
    if (listLi.length == 0) {
        alert('Informe alguma mensagem');

        var input = document.getElementById('msg');
        input.focus();

        return;
    }

    const mensagens = [];
    for (var i = 0; i < listLi.length; i++) {
        mensagens.push(listLi[i].textContent);
    }

    window.localStorage.setItem('msg', JSON.stringify(mensagens));

    alert('Mensagens salvas no localStorage.');
    ul.innerHTML = '';
    limpaInputEAplicaFocus();
}

function mostrarMensagens() {
    var mensagens = JSON.parse(window.localStorage.getItem('msg'));
    if (mensagens == null) {
        alert('Não existem mensagens gravadas no localStorage');

        var input = document.getElementById('msg');
        input.focus();

        return;
    }

    var ul = document.getElementById('lista');
    
    for (var i = 0; i < mensagens.length; i++) {
        var text = mensagens[i];

        var li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        li.setAttribute('id', text);

        ul.appendChild(li);
    }

    limpaInputEAplicaFocus();
}

function limpaInputEAplicaFocus() {
    var input = document.getElementById('msg');

    input.value = ''; //Limpando o campo
    input.focus();
}
