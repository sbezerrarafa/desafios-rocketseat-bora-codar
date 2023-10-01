var tag = document.createElement('script');
console.log('opa');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let video
let ambiente
let animationHasEnded = false
const videoId = 'qC0vDKVPCrw'

function createAmbiente() {
  if (!animationHasEnded) return
  ambiente = new YT.Player('ambiente', {
    videoId,
    events: {
      onReady: ambienteReady,
      onStateChange: videoStateChange,
    },
  })
}
window.onYouTubeIframeAPIReady = function () {
  video = new YT.Player('video', {
    videoId,
    events: {
      onStateChange: videoStateChange,
    },
  })

}
function videoStateChange(event) {
  switch (event.data) {
    case YT.PlayerState.PLAYING:
      if (!ambiente) return
      ambiente.seekTo(event.target.getCurrentTime())
      ambiente.playVideo()
      break
    case YT.PlayerState.PAUSED:
      if (!ambiente) return
      ambiente.seekTo(event.target.getCurrentTime())
      ambiente.pauseVideo()
      break
  }

}

function betterAmbiente(event) {
  event.target.mute()
  const qualityLevels = event.target.getAvailableQualityLevels()
  if (qualityLevels && qualityLevels.length && qualityLevels.length > 0) {
    qualityLevels.reverse()
    const lowestLevel =
      qualityLevels[qualityLevels.findIndex((q) => q !== 'auto')]

    event.target.setPlaybackQuality(lowestLevel)
  }
}

function ambienteReady(event) {
  betterAmbiente(event)

}
function ambienteStageChange(event) {
  switch (event.data) {
    case YT.PlayerState.BUFFERING:
    case YT.PlayerState.PLAYING:
      betterAmbiente(event)
      break
  }
}

const app = document.getElementById('app')
app.addEventListener('animationend', e => {
  if (e.animationName !== 'aparecer') return

  animationHasEnded = true

  createAmbiente()
})