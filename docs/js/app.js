(function(){
  // turn on JavaScript class
  document.documentElement.className = 
  document.documentElement.className.replace("no-js","js");

  // initiate variables
  let touchType = ('ontouchstart' in window) ? "touchstart" : "click";
  let body = document.body;
  let modes = ["light", "dark", "color"];
  let lastIndex = modes.length - 1;
  let modeIndex = 0;
  let mode = modes[modeIndex];
  let example_button = document.getElementById("example-button");

  // define functions
  function cycleMode() {
    body.classList.remove(mode);
    if (modeIndex < lastIndex) {
      modeIndex = modeIndex + 1;
    } else {
      modeIndex = 0;
    }
    mode = modes[modeIndex];
    body.classList.add(mode);
  }

  // set defaults
  body.classList.add(mode);

  // attach events
  example_button.addEventListener(touchType, cycleMode);
})();
