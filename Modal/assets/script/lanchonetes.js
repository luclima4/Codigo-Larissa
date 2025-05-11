document.addEventListener('DOMContentLoaded', gerarBotoesLanchonete);

function gerarBotoesLanchonete() {
  const container = document.getElementById('lanchonete-buttons');
  container.innerHTML = '';

  dados.lanchonetes.forEach(lanch => {
    // cria um <a> estilizado como botão
    const link = document.createElement('a');
    link.href = `novaLanchonete.html?lanchoneteId=${lanch.id}`;
    link.className = 'btn btn-outline-primary me-2 mb-2';
    link.textContent = lanch.nome;
    container.appendChild(link);
  });
}