const formSala = document.getElementById('form-sala');

formSala.addEventListener('submit', function(evento) {

    evento.preventDefault(); 

    const nome = document.getElementById('nome-sala').value;
    const capacidade = document.getElementById('capacidade').value;
    const tipo = document.getElementById('tipo-sala').value;

    const novaSala = {
        nome: nome,
        capacidade: capacidade,
        tipo: tipo
    };

    let listaSalas = JSON.parse(localStorage.getItem('salas')) || [];

    listaSalas.push(novaSala);

    localStorage.setItem('salas', JSON.stringify(listaSalas));

    alert('Sala cadastrada com sucesso!');
    formSala.reset();
});