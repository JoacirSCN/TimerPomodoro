import {
  BtnPlay,
  BtnPause,
  BtnStop,
  BtnSet,
  BtnSound_on,
  BtnSound_off,
} from './elements.js'

export default function ({controls, timer, sound,}) {

  BtnPlay.addEventListener('click', () => {
    controls.play();
    timer.countDown();
    sound.pressButton();
  });

  BtnPause.addEventListener('click', () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  BtnStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  BtnSound_off.addEventListener('click', () => {
    BtnSound_on.classList.remove('hide');
    BtnSound_off.classList.add('hide');
    sound.bgAudio.play();
  });

  BtnSound_on.addEventListener('click', () => {
    BtnSound_on.classList.add('hide');
    BtnSound_off.classList.remove('hide');
    sound.bgAudio.pause();
  });

  BtnSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });
}