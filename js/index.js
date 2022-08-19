import Controls from './controls.js';
import Timer from './timer.js';
import Sound from './sounds.js';
import Events from './events.js';
import {
  BtnPlay,
  BtnPause,
  BtnStop,
  BtnSet,
  minutesDisplay,
  secondsDisplay,
} from './elements.js'

const controls = Controls({
  BtnPlay,
  BtnPause,
  BtnSet,
  BtnStop
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
});

const sound = Sound();

Events({controls, timer, sound});
