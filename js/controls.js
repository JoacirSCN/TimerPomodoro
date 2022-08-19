export default function Controls({
  BtnPlay,
  BtnPause,
  BtnSet,
  BtnStop
}) {

  function play() {
    BtnPlay.classList.add('hide');
    BtnPause.classList.remove('hide');
    BtnSet.classList.add('hide');
    BtnStop.classList.remove('hide');
  }

  function pause() {
    BtnPause.classList.add('hide');
    BtnPlay.classList.remove('hide');
  }

  function reset() {
    BtnPlay.classList.remove('hide');
    BtnPause.classList.add('hide');
    BtnSet.classList.remove('hide');
    BtnStop.classList.add('hide');
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?');

    if (!newMinutes) {
      return false
    }

    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}


