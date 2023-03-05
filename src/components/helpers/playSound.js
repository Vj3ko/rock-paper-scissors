export function playSound(muted, sound) {
  const audio = new Audio(sound);
  if (muted) {
    audio.volume = 0;
    audio.pause();
  } else {
    audio.volume = 1;
    audio.play();
  }
}
