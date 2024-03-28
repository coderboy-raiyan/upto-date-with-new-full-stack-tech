import { NOTE_DETAILS } from "./constant";
import "./style.css";

const audioContext = new AudioContext();

const keymapEle = document.querySelector(".keymap");

for (let i = 0; i < NOTE_DETAILS.length; i++) {
  const note = NOTE_DETAILS[i];

  const keyEle = document.createElement("div");
  keyEle.innerText = note.key;
  keymapEle?.appendChild(keyEle);
}

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const note = findTheKey(e.key);
  if (!note) return;
  note.active = true;
  playNotes();
});

document.addEventListener("keyup", (e) => {
  if (e.repeat) return;
  const note = findTheKey(e.key);
  if (!note) return;
  note.active = false;
  playNotes();
});

function findTheKey(key: string) {
  return NOTE_DETAILS.find((keyObj) => keyObj.key === key.toLocaleUpperCase());
}

function playNotes() {
  NOTE_DETAILS.forEach((n) => {
    const keyElemenet = document.querySelector(`[data-note=${n.note}]`);
    keyElemenet?.classList.toggle("active", n.active || false);

    if (n.oscillator) {
      n.oscillator.stop();
      n.oscillator.disconnect();
    }
  });

  const activeNotes: INoteDetails[] = NOTE_DETAILS.filter((n) => {
    if (n.active) {
      return n.active;
    }
  });
  const gain = 1 / activeNotes.length;

  activeNotes.forEach((n) => {
    startNote(n, gain);
  });
}

function startNote(noteDetails: INoteDetails, gain: number) {
  const gainNode = audioContext.createGain();
  gainNode.gain.value = gain;
  const oscillator = audioContext.createOscillator();
  oscillator.frequency.value = noteDetails.frequency;
  oscillator.type = "sine";
  oscillator.connect(gainNode).connect(audioContext.destination);
  oscillator.start();
  noteDetails.oscillator = oscillator;
}
