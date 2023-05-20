const filtroInput = document.getElementById('filtrar');
const cards = document.querySelectorAll('.coluna .card');
const btnExcluir = document.querySelectorAll('#excluir');
const colunas = document.querySelectorAll('.coluna');
const aFazer = document.querySelectorAll('.a_fazer');
const formCriarTarefa = document.getElementById('criar_tarefa');
const tituloInput = document.getElementById('titulo');
const descricaoInput = document.getElementById('descricao');
const tagsInputs = document.querySelectorAll(
  '.selecionar-metas input[type="checkbox"]',
);

// mover cards

document.addEventListener('dragstart', (e) => {
  e.target.classList.add('dragging');
});

document.addEventListener('dragend', (e) => {
  e.target.classList.remove('dragging');
});

colunas.forEach((item) => {
  item.addEventListener('dragover', (e) => {
    const dragging = document.querySelector('.dragging');
    const applyAfter = getNewPosition(item, e.clientY);

    if (applyAfter) {
      applyAfter.insertAdjacentElement('afterend', dragging);
    } else {
      item.prepend(dragging);
    }
  });
});

function getNewPosition(column, posY) {
  const cards = column.querySelectorAll('.item:not(.dragging)');
  let result;

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;

    if (posY >= boxCenterY) result = refer_card;
  }

  return result;
}

// criar nova tarefa

formCriarTarefa.addEventListener('submit', function (event) {
  event.preventDefault();

  const titulo = tituloInput.value;
  const descricao = descricaoInput.value;
  const tags = Array.from(tagsInputs)
    .filter((input) => input.checked)
    .map((input) => input.nextElementSibling.textContent);

  const cardOriginal = document.querySelector('.card');
  const novoCard = cardOriginal.cloneNode(true);
  cardOriginal.parentNode.appendChild(novoCard);

  const novoCardTitulo = novoCard.querySelector('.topo-card h3');
  const novoCardDescricao = novoCard.querySelector('.card p');
  const novoCardTags = novoCard.querySelector('.tags');

  novoCardTitulo.textContent = titulo;
  novoCardDescricao.textContent = descricao;

  novoCardTags.innerHTML = '';

  tags.forEach((tag) => {
    const span = document.createElement('span');
    span.textContent = tag;
    novoCardTags.appendChild(span);
  });

  tituloInput.value = '';
  descricaoInput.value = '';
  tagsInputs.forEach((input) => (input.checked = false));
});

// função exluir

btnExcluir.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    card.style.display = 'none';
  });
});

//função filtro

filtroInput.addEventListener('input', filterCards);

function filterCards() {
  if (filtroInput.value != '') {
    for (let cardizinho of cards) {
      let titulo = cardizinho.querySelector('h3');
      titulo = titulo.textContent.toLowerCase();
      filterText = filtroInput.value.toLowerCase();

      if (!titulo.includes(filterText)) {
        cardizinho.style.display = 'none';
      } else {
        cardizinho.style.display = 'block';
      }
    }
  } else {
    for (let cardizinho of cards) {
      cardizinho.style.display = 'block';
    }
  }
}
