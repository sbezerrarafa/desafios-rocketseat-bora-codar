const escolhaTema = document.querySelectorAll('header button');
const temaButton1 = escolhaTema[0];
const temaButton2 = escolhaTema[1];
const player = document.querySelector('#temas');
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');

const music = new Audio('./assets/Pra-onde-eu-irei.mp3');
let interval;

//eventos

temaButton1.addEventListener('click', () => {
  player.classList = 'layout-vertical';
});
temaButton2.addEventListener('click', () => {
  player.classList = 'layout-horizontal';
  console.log('mudou para a outra class');
});

//funçoes

function play() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  music.play();
  console.log('ds');
  // interval = setInterval(updateMusicTime, 1000);
}
function pause() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  music.pause();
  console.log('ds');

  // interval = setInterval(updateMusicTime, 1000);
}

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
