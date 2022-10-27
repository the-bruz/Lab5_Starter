// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const aud = document.querySelector('audio');
  const horn = document.getElementById('horn-select');
  const img = document.querySelector('img[alt="No image selected"]');
  const jsConfetti = new JSConfetti()
  horn.addEventListener('change', (event) => {
    img.src = `assets/images/${event.target.value}.svg`;
    aud.src = `assets/audio/${event.target.value}.mp3`;
  });
  const vol_control = document.getElementById('volume-controls');
  vol_control.addEventListener('change', (event) => {
    let curr_vol = event.target.value;
    let vol_lv = 0;
    if (curr_vol == 0) vol_lv = 0
    else if (curr_vol < 33) vol_lv = 1
    else if (curr_vol < 67) vol_lv = 2
    else vol_lv = 3;
    const vol_icon = vol_control.querySelector('img');
    vol_icon.src = `assets/icons/volume-level-${vol_lv}.svg`
    aud.volume = curr_vol / 100.0;
  })
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    if (horn.value == 'party-horn'){
      console.log('here');
      jsConfetti.addConfetti();
    }
    aud.play();
  });
}