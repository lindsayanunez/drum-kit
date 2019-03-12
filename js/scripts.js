

function playDrum(e){
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);

  if(!key){return};
  audio.play();
}


window.addEventListener('keydown', playDrum);
