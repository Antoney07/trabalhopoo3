const containerSessoes = document.getElementById('lista-sessoes-container');
const listaSessoes = JSON.parse(localStorage.getItem('sessoes')) || [];

if (listaSessoes.length === 0) {
    containerSessoes.innerHTML = '<div class="col-12"><p class="text-center">Nenhuma sessão disponível no momento.</p></div>';
} else {
    listaSessoes.forEach(sessao => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        
        const valorSessao = `${sessao.filme} | Sala: ${sessao.sala} | Data: ${sessao.dataHora}`;
        const linkVenda = `venda-ingressos.html?sessao=${encodeURIComponent(valorSessao)}`;

        card.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${sessao.filme}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${sessao.sala}</h6>
                    <p class="card-text">
                        <strong>Data e Hora:</strong> ${sessao.dataHora.replace('T', ' ')}<br>
                        <strong>Preço:</strong> R$ ${sessao.preco}
                    </p>
                    <a href="${linkVenda}" class="btn btn-primary w-100">Comprar Ingresso</a>
                </div>
            </div>
        `;
        containerSessoes.appendChild(card);
    });
}