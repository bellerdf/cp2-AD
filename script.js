const grid = document.querySelector(".grid-atores");
const campoBusca = document.querySelector(".busca");
const contador = document.querySelector(".contador");

function renderizarAtores(lista) {
    grid.innerHTML = "";

    lista.forEach((ator) => {
        grid.innerHTML += `
      <div class="ator">
        <img src="${ator.foto}" alt="${ator.nome}">
        <div class="info">
          <h2>${ator.nome}</h2>
          <p>${ator.pais} · ${ator.nascimento}</p>
        </div>
      </div>
    `;
    });

    contador.textContent = `${lista.length} de ${atores.length} atores/atrizes`;
}

function aplicarFiltros() {
    const termo = campoBusca.value.toLowerCase();

    const filtrados = atores.filter((ator) => {
        return ator.nome.toLowerCase().includes(termo);
    });

    renderizarAtores(filtrados);
}

// Renderiza todos os atores na primeira vez que a página carrega
renderizarAtores(atores);