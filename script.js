function calcularEstatisticas() {
    // Obter valores dos inputs
    const computador = parseInt(document.getElementById('computador').value) || 0;
    const notebook = parseInt(document.getElementById('notebook').value) || 0;
    const smartphone = parseInt(document.getElementById('smartphone').value) || 0;
    const tablet = parseInt(document.getElementById('tablet').value) || 0;
    const console = parseInt(document.getElementById('console').value) || 0;

    // Obter o total de pessoas
    const totalPessoas = computador + notebook + smartphone + tablet + console;

    // Exibir o total de pessoas
    document.getElementById('total').textContent = `Total de pessoas pesquisadas: ${totalPessoas}`;

    // Limpar as barras existentes
    const barrasFrame = document.getElementById('barras-frame');
    barrasFrame.innerHTML = '';

    // Itens e suas respectivas cores
    const itens = [
        { nome: 'Computador', valor: computador, cor: '#ff6666' },
        { nome: 'Notebook', valor: notebook, cor: '#66b3ff' },
        { nome: 'Smartphone', valor: smartphone, cor: '#99ff99' },
        { nome: 'Tablet', valor: tablet, cor: '#ffcc99' },
        { nome: 'Console', valor: console, cor: '#c266ff' }
    ];

    // Gerar as barras de progresso
    itens.forEach(item => {
        const porcentagem = totalPessoas > 0 ? (item.valor / totalPessoas) * 100 : 0;

        const barraItem = document.createElement('div');
        barraItem.classList.add('barra-item');

        const label = document.createElement('label');
        label.textContent = `${item.nome}:`;
        barraItem.appendChild(label);

        const barra = document.createElement('div');
        barra.classList.add('barra');
        barra.style.backgroundColor = item.cor;

        const progresso = document.createElement('div');
        progresso.classList.add('progresso');
        progresso.style.width = `${porcentagem}%`;
        barra.appendChild(progresso);

        const porcentagemLabel = document.createElement('div');
        porcentagemLabel.classList.add('porcentagem');
        porcentagemLabel.textContent = `${porcentagem.toFixed(1)}%`;

        barraItem.appendChild(barra);
        barraItem.appendChild(porcentagemLabel);

        barrasFrame.appendChild(barraItem);
    });
}
