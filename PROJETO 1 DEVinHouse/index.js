////////////////////////////////////////////////////  Armazenar no LocalStorage///////////////////////////////////////////////////
function formularioUsuario(event) {
    event.preventDefault();

    var titulo = document.getElementById("titulo");
    var linguagemSkill = document.getElementById("linguagemSkill");
    var text = document.getElementById("text");
    var descricao = document.getElementById("descricao");
    var videoYoutube = document.getElementById("videoYoutube");

    var conteudo = {
        "titulo": titulo.value,
        "linguagemSkill": linguagemSkill.value,
        "text": text.value,
        "descricao": descricao.value,
        "videoYoutube": videoYoutube.value
    }

    var listaConteudos = [];
    var conteudosLocalStorage = JSON.parse(localStorage.getItem('conteudos'));
    if (conteudosLocalStorage !== null) {
        listaConteudos = conteudosLocalStorage;
    }

    listaConteudos.push(conteudo);

    adicionarLocalStorage(listaConteudos);
    window.alert("Registro concluido com sucesso!");

    titulo.value = '';
    linguagemSkill.value = '';
    text.value = '';
    descricao.value = '';
    videoYoutube.value = '';

    atualizarTabela();
}

function pesquisarConteudo(event) {
    event.preventDefault();
    var listaConteudos = JSON.parse(localStorage.getItem('conteudos'));

    var pesquisa = document.getElementById("barraPesquisa");
    var novaListaConteudos = listaConteudos.filter(conteudo => conteudo.titulo === pesquisa.value);
    adicionarLocalStorage(novaListaConteudos);
    atualizarTabela(novaListaConteudos);

    pesquisa.value = "";
    pesquisa.focus();
}


function deletar(position) {
    var listaConteudos = JSON.parse(localStorage.getItem('conteudos'));
    listaConteudos.splice(position, 1);
    adicionarLocalStorage(listaConteudos);
    
    window.alert("Registro removido com sucesso");
    atualizaConteudo();
}

function adicionarLocalStorage(listaConteudos) {
    localStorage.setItem("conteudos", JSON.stringify(listaConteudos));
}
///////////////////////////////////////////////////////////Inserir mensagem na tala/////////////////////////////////////////////////////////////
function atualizarTabela(lista) {
    var html = "";
    var conteudosLocalStorage;

    if(lista.length > 0 ) {
        conteudosLocalStorage = lista
    }else{
         conteudosLocalStorage = JSON.parse(localStorage.getItem('conteudos'));
    }
    

    if (conteudosLocalStorage !== null) {
        var html = "<table>";
        html += "<thead>";

        html += "<th>Titulo:</th>";
        html += "<th>Linguagem:</th>";
        html += "<th>Categoria:</th>";
        html += "<th>Descrição:</th>";
        html += "<th>Video:</th>";
        html += "<th>Ações:</th>";
        html += "</thead>";
        html += "<tbody>";

        conteudosLocalStorage.forEach((conteudo, index) => {
            html += "<tr>";
            html += `<td>${conteudo.titulo}</td>`;
            html += `<td>${conteudo.linguagemSkill}</td>`;
            html += `<td>${conteudo.text}</td>`;
            html += `<td><textarea rows='3' cols='42' class='textarea-table' readonly disabled>${conteudo.descricao}</textarea></td>`;
            html += "<td><a href='" + conteudo.videoYoutube + "' target='_blank' rel='noopener noreferrer'><i class='fas fa-play'></i></a></td>";
            html += "<td><i class='fas fa-pen'></i> - <a onclick='deletar("+index+")'><i class='fas fa-trash' ></i></a></td>";

            html += "</tr>";
        });

        html += "</tbody>";
        html += "</table>";
    } else {
        html = "nenhum conteudo cadastrado.";
    }
    document.getElementById("conteudo").innerHTML = html;
}

function atualizaConteudo() {
    atualizaTotalizadores();
    atualizarTabela();
}

function atualizaTotalizadores() {
    var conteudosLocalStorage = JSON.parse(localStorage.getItem('conteudos'));

    if (conteudosLocalStorage !== null) {
        var nomeCategorias = ["FrontEnd", "BackEnd", "FullStack", "SoftSkill"];
        var listaCategorias = conteudosLocalStorage.map(conteudo => conteudo.text);
        var totalCategorias = listaCategorias.length;
        var categorias = listaCategorias.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

        document.getElementById("Total").innerHTML = totalCategorias;
        nomeCategorias.forEach(categoria => {
            var totalCategoria = categorias[categoria] || 0;
            document.getElementById(categoria).innerHTML = totalCategoria;
        });


    }

}