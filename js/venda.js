const selectSessao = document.getElementById('sessao-venda');
const listaSessoes = JSON.parse(localStorage.getItem('sessoes')) || [];

listaSessoes.forEach(sessao => {
    let option = document.createElement('option');
    option.value = `${sessao.filme} | Sala: ${sessao.sala} | Data: ${sessao.dataHora}`;
    option.textContent = `Filme: ${sessao.filme} - Sala: ${sessao.sala} - Data/Hora: ${sessao.dataHora}`;
    selectSessao.appendChild(option);
});

const urlParams = new URLSearchParams(window.location.search);
const sessaoSelecionada = urlParams.get('sessao');
if (sessaoSelecionada) {
    for (let i = 0; i < selectSessao.options.length; i++) {
        if (selectSessao.options[i].value === sessaoSelecionada) {
            selectSessao.selectedIndex = i;
            break;
        }
    }
}

const formVenda = document.getElementById('form-venda');

formVenda.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const sessao = document.getElementById('sessao-venda').value;
    const nomeCliente = document.getElementById('nome-cliente').value;
    const cpf = document.getElementById('cpf-cliente').value;
    const assento = document.getElementById('assento-venda').value;
    const tipoPagamento = document.getElementById('pagamento-venda').value;

    const novoIngresso = {
        sessao: sessao,
        nomeCliente: nomeCliente,
        cpf: cpf,
        assento: assento,
        tipoPagamento: tipoPagamento
    };

    let listaIngressos = JSON.parse(localStorage.getItem('ingressos')) || [];

    listaIngressos.push(novoIngresso);
    localStorage.setItem('ingressos', JSON.stringify(listaIngressos));

    alert('Venda confirmada com sucesso!');
    formVenda.reset();
});