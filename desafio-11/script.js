// variaveis

const inputSenha = document.querySelector('#password');
const inputEmail = document.querySelector('#email');
const BtnSenha = document.querySelector('.content-password button');
const imgOcultar = document.querySelector('#oculta');
const imgRevelar = document.querySelector('#revelada');
const msgValidaEmail = document.querySelector("#msgValidaEmail")

BtnSenha.addEventListener('click', () => {
  imgOcultar.classList.toggle('hide')
  imgRevelar.classList.toggle('hide');

  if (imgRevelar.classList.contains('hide')) {
    inputSenha.type = 'password'
  } else {
    inputSenha.type = 'text'
  }
});

inputEmail.addEventListener("invalid", (e) => {
  e.preventDefault();
  msgValidaEmail.classList.toggle('hide');
})

function remove() {
  msgValidaEmail.classList.add('hide');
}

setTimeout(remove, 5000)



