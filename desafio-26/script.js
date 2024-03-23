// variaveis

let qtdPorcoes = document.getElementById('qtd-porcoes');
const btnAdd = document.getElementById('btn-add');
const btnSub = document.getElementById('btn-sub');

function porcoes() {
  btnAdd.addEventListener('click', () => {
    qtdPorcoes.value++;
  });
  btnSub.addEventListener('click', () => {
    qtdPorcoes.value--;
  });
}
porcoes();
