// turn on JavaScript class
document.documentElement.className = 
document.documentElement.className.replace("no-js","js");

// initiate variables
let touchType = ('ontouchstart' in window) ? "touchstart" : "click";
let base = document.body;
let modes = ["light", "dark", "color"];
let lastIndex = modes.length - 1;
let modeIndex = 0;
let mode = modes[modeIndex];
let example_button = document.getElementById("example-button");

// define functions
function cycleMode() {
  base.classList.remove(mode);
  if (modeIndex < lastIndex) {
    modeIndex = modeIndex + 1;
  } else {
    modeIndex = 0;
  }
  mode = modes[modeIndex];
  base.classList.add(mode);
}

// set defaults
base.classList.add(mode);

// attach events
example_button.addEventListener(touchType, cycleMode);
