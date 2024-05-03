const escolhaTema = document.querySelectorAll('header button');
const temaButton1 = escolhaTema[0];
const temaButton2 = escolhaTema[1];
const player = document.querySelector('#temas');
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");

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

function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

function updateMusicTime() {
  const tempoAtual = document.getElementById('tempoAtual');
  const progressBar = document.getElementById('progressBar');
  tempoAtual.textContent = formatarTempo(music.currentTime);
  const progresso = (music.currentTime / music.duration) * 100;
  progressBar.value = progresso;

  progressBar.addEventListener('input', function () {
    const valor = progressBar.value;
    music.currentTime = (valor / 100) * music.duration;
  });
}

music.addEventListener('loadedmetadata', function () {
  const tempoTotal = document.getElementById('tempoTotal');
  tempoTotal.textContent = formatarTempo(music.duration);
});

function play() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  music.play();

  interval = setInterval(updateMusicTime, 1000);
}
function pause() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  music.pause();
}

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
