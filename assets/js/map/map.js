import { setStartPositions } from './playerMovement.js';

const canvas = document.querySelector('#map-canvas');
const mapButton = document.querySelector('.fa-gamepad');
const mapSettingsButton = document.querySelector('.fa-wrench');
const otherModesButtons = document.querySelector('.other-modes');
const title = document.querySelector('title');

mapButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.clientHeight,
    left: 0,
    behavior: 'smooth'
  });
  if (window.scrollY === 0) {
    title.textContent = 'MLTactics';
  } else {
    title.textContent = 'MLDrafter';
  }
  otherModesButtons.appendChild(mapSettingsButton);

  if (scrollY > 0) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    otherModesButtons.removeChild(mapSettingsButton);
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  setStartPositions();
});
