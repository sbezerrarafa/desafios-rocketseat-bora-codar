//variaveis

const inputEnviar = document.querySelector('#enviar-msg');
const menssagem = document.querySelector('.menssagem');
const btnEnviar = document.querySelector('#enviar');
const btnClose = document.querySelector('#close');

// funçoes

function addMenssagem(message) {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  menssagem.innerHTML += `
  <div class="message you">
    <span>Você - ${hours}:${minutes}</span>
    <p>${message}</p>
  </div>
`;
  inputEnviar.value = '';
}

// eventos

btnEnviar.addEventListener('click', () => addMenssagem(inputEnviar.value));
btnClose.addEventListener('click', () => {
  menssagem.innerHTML = '';
});
