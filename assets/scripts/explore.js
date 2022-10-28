// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voice_select = document.getElementById('voice-select');
  let voice_list = [];
  synth.addEventListener('voiceschanged', () => {
    voice_list = synth.getVoices();
    for (let i = 0; i < voice_list.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voice_list[i].name} (${voice_list[i].lang})`;
      option.setAttribute('voice_idx', i);
      voice_select.appendChild(option);
    }
  });
  const img = document.querySelector('img');
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    let text = document.getElementById('text-to-speak').value;
    let utter = new SpeechSynthesisUtterance(text);
    const selectedOption = voice_select.selectedOptions[0].getAttribute('voice_idx');
    utter.voice = voice_list[selectedOption];
    synth.speak(utter);
    if (utter.text != '') img.src = 'assets/images/smiling-open.png';
    utter.addEventListener('end', (event) => {
      img.src = 'assets/images/smiling.png';
    });
  })
}