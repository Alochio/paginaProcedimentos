function carregarDados() {
    fetch('data/data.json')
        .then(response => response.json())
        .then(dados => {
            const tabelaBody = document.querySelector('#procedimentoArcelor tbody');
            
            tabelaBody.innerHTML = '';
            
            dados.forEach(item => {
                const tr = document.createElement('tr');
                
                tr.innerHTML = `
                    <td>${item.codigo}</td>
                    <td>${item.nome}</td>
                    <td>${item.descricao}</td>
                `;
                
                tabelaBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
}

function buscar() {
    const filtro = document.getElementById('searchInput').value.toLowerCase();
    const linhas = document.querySelectorAll('#procedimentoArcelor tbody tr');

    linhas.forEach(linha => {
        const cells = linha.getElementsByTagName('td');
        const codigo = cells[0].textContent.toLowerCase();
        const nome = cells[1].textContent.toLowerCase();
        const descricao = cells[2].textContent.toLowerCase();

        if (codigo.includes(filtro) || nome.includes(filtro) || descricao.includes(filtro)) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
}

window.onload = () => {
    carregarDados();

    document.getElementById('searchInput').addEventListener('input', buscar);
};
