let num = "5";
console.log(num.padStart(3, "0"));  // Saída: "005"

let hour = "4";
let minute = "9";
console.log(`${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`);  // Saída: "04:09"


Math.floor(3.95);  // Retorna 3

const escolhaTema = document.querySelectorAll('header button');
const temaButton1 = escolhaTema[0];
const temaButton2 = escolhaTema[1];
const player = document.querySelector('#temas');
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const progressBar = document.getElementById('progressBar');
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");
const descMusicaTitle = document.querySelector('.desc-musica p');
const descMusicaArtista = document.querySelector('.desc-musica span');
const descMusicaImg = document.querySelector('.conteudo-musica img');

const music = new Audio();
let interval;
let currentTrack = 0;


const musicData = [
  {
    "title": "I Want You Back",
    "artist": "jakson fives",
    "imageUrl": "https://raw.githubusercontent.com/sbezerrarafa/encontro-com-feras/main/assets/jackson-fives.jpeg",
    "audioUrl": "https://github.com/sbezerrarafa/encontro-com-feras/raw/main/assets/jackson-fives.mp3"
  },
  {
    "title": "Pra onde eu irei?",
    "artist": "Morada",
    "imageUrl": "https://raw.githubusercontent.com/sbezerrarafa/encontro-com-feras/main/assets/morada.png",
    "audioUrl": "https://github.com/sbezerrarafa/encontro-com-feras/raw/main/assets/Pra-onde-eu-irei.mp3"
  }

];

function loadTrack(trackIndex) {
  const track = musicData[trackIndex];
  descMusicaTitle.textContent = track.title;
  descMusicaArtista.textContent = track.artist;
  descMusicaImg.src = track.imageUrl;
  music.src = track.audioUrl;
  music.load();
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % musicData.length;
  loadTrack(currentTrack);
  play();
}

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

function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

function updateMusicTime() {
  tempoAtual.textContent = formatarTempo(music.currentTime);
  const progresso = (music.currentTime / music.duration) * 100;
  progressBar.value = progresso;
}

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
  loadTrack(currentTrack);
});

progressBar.addEventListener('input', function () {
  const valor = progressBar.value;
  music.currentTime = (valor / 100) * music.duration;
});

music.addEventListener('loadedmetadata', function () {
  tempoTotal.textContent = formatarTempo(music.duration);
});

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
temaButton1.addEventListener('click', () => player.classList = 'layout-vertical');
temaButton2.addEventListener('click', () => player.classList = 'layout-horizontal');

document.querySelector('#next').addEventListener('click', nextTrack);
