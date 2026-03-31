const selectFilme = document.getElementById('filme-sessao');
const selectSala = document.getElementById('sala-sessao');

const listaFilmes = JSON.parse(localStorage.getItem('filmes')) || [];
const listaSalas = JSON.parse(localStorage.getItem('salas')) || [];

listaFilmes.forEach(filme => {
    let option = document.createElement('option');
    option.value = filme.titulo;
    option.textContent = filme.titulo;
    selectFilme.appendChild(option);
});

listaSalas.forEach(sala => {
    let option = document.createElement('option');
    option.value = sala.nome;
    option.textContent = `${sala.nome} (Capacidade: ${sala.capacidade})`;
    selectSala.appendChild(option);
});

const formSessao = document.getElementById('form-sessao');

formSessao.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    const filme = document.getElementById('filme-sessao').value;
    const sala = document.getElementById('sala-sessao').value;
    const dataHora = document.getElementById('data-hora').value;
    const preco = document.getElementById('preco').value;
    const idioma = document.getElementById('idioma').value;
    const formato = document.getElementById('formato').value;

    const novaSessao = {
        filme: filme,
        sala: sala,
        dataHora: dataHora,
        preco: preco,
        idioma: idioma,
        formato: formato
    };

    let listaSessoes = JSON.parse(localStorage.getItem('sessoes')) || [];

    listaSessoes.push(novaSessao);
    localStorage.setItem('sessoes', JSON.stringify(listaSessoes));

    alert('Sessão cadastrada com sucesso!');
    formSessao.reset();
});