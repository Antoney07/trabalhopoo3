const formFilme = document.getElementById('form-filme');

formFilme.addEventListener('submit', function(evento) {

    const titulo = document.getElementById('titulo').value;
    const genero = document.getElementById('genero').value;
    const descricao = document.getElementById('descricao').value;
    const classificacao = document.getElementById('classificacao').value;
    const duracao = document.getElementById('duracao').value;
    const dataEstreia = document.getElementById('data-estreia').value;

    const novoFilme = {
        titulo: titulo,
        genero: genero,
        descricao: descricao,
        classificacao: classificacao,
        duracao: duracao,
        dataEstreia: dataEstreia
    };

    let listaFilmes = JSON.parse(localStorage.getItem('filmes')) || [];

    listaFilmes.push(novoFilme);

    localStorage.setItem('filmes', JSON.stringify(listaFilmes));

    alert('Filme salvo com sucesso!');
    formFilme.reset();
});