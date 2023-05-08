//  variaveis

const imgFixa = document.querySelector('#img-fixa');
const imgGif = document.querySelector('#img-gif');
const btn360 = document.querySelector('#girar');
const btnFechar = document.querySelector('#fechar');
const btnCarrinho = document.querySelector('#add-carrinho');

//  eventos

function movimento() {
  imgGif.classList.remove('hide');
  imgFixa.classList.add('hide');
  btn360.classList.add('hide');
  btnFechar.classList.remove('hide');
}

function parar() {
  imgGif.classList.add('hide');
  imgFixa.classList.remove('hide');
  btn360.classList.remove('hide');
  btnFechar.classList.add('hide');
}

btn360.addEventListener('click', movimento);
btnFechar.addEventListener('click', parar);

btnCarrinho.addEventListener('click', () => {
  alert('item adicionado ao carrinho');
});
