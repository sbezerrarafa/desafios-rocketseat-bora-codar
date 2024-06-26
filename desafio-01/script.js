// chamdando variaveis
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const progressBar = document.getElementById('progressBar');
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");
const descMusicaTitle = document.querySelector('.desc-musica p');
const descMusicaArtista = document.querySelector('.desc-musica span');
const descMusicaImg = document.querySelector('.conteudo-musica img');
const btnVoltar = document.getElementById('prev');
const btnAvancar = document.getElementById('next')



const music = new Audio();
let interval;
let currentTrack = 0;
let musicData = [];

//funçoes
function fetchMusicData() {
  fetch('https://mentoria.sjcc.dev/api')
    .then(response => response.json())
    .then(data => {
      musicData = data.musicas; // Armazena os dados das músicas
      console.log(musicData)
      loadTrack(currentTrack);  // Carrega a primeira faixa

    });

}

fetchMusicData()


function apiDoCachorro() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(resposta => resposta.json())
    .then(conteudo => {
      console.log(conteudo, 'veio conteudo')
    })
}

apiDoCachorro()

function loadTrack(trackIndex) {
  const track = musicData[trackIndex];
  descMusicaTitle.textContent = track.title;
  descMusicaArtista.textContent = track.artist;
  descMusicaImg.src = track.imageUrl;
  music.src = track.audioUrl;
  music.load();
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

music.addEventListener('loadedmetadata', function () {
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

function nextTrack() {
  currentTrack = (currentTrack + 1) % musicData.length;
  loadTrack(currentTrack);
  play();
}

function previousTrack() {
  if (currentTrack === 0) {
    currentTrack = musicData.length - 1;
  } else {
    currentTrack--;
  }
  loadTrack(currentTrack);
  play();
}

progressBar.addEventListener('input', function () {
  const valor = progressBar.value;
  music.currentTime = (valor / 100) * music.duration;
});




buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
btnAvancar.addEventListener('click', nextTrack);
btnVoltar.addEventListener('click', previousTrack);
