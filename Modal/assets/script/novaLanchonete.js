document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const idLanch = Number(params.get('lanchoneteId'));
  mostrarItensDaLanchonete(idLanch);
});

function mostrarItensDaLanchonete(idLanch) {
  const lanch = dados.lanchonetes.find(l => l.id === idLanch);
  if (!lanch) {
    document.getElementById('lanchonete-nome').textContent = 'Lanchonete não encontrada';
    return;
  }

  document.getElementById('lanchonete-nome').textContent = lanch.nome;

  const itensContainer = document.getElementById('itens-container');
  itensContainer.innerHTML = '';

  lanch.itens.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col';

    const volume = item['conteúdo'] || '';

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text flex-grow-1">${item.descricao}</p>
          ${volume ? `<small class="text-muted mb-2">Conteúdo: ${volume}</small>` : ''}
          <span class="fw-bold text-success mb-2">${item.valor}</span>
          <p class="mb-2">Em estoque: ${item.quantidade}</p>
          <div class="mb-2">
            ${item.semLactose ? '<span class="badge bg-success">Sem Lactose</span>' : ''}
            ${item.semGluten  ? '<span class="badge bg-success">Sem Glúten</span>'  : ''}
          </div>
          <button class="btn btn-sm btn-primary mt-auto" ${!item.disponivel ? 'disabled' : ''}>
            ${item.disponivel ? 'Adicionar' : 'Indisponível'}
          </button>
        </div>
      </div>
    `;
    itensContainer.appendChild(col);
  });
}