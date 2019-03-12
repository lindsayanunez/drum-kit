

function playDrum(e){
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);

  if(!key){return};
  key.classList.add('beat');
  audio.currentTime = 0;
  audio.play();
}


window.addEventListener('keydown', playDrum);
