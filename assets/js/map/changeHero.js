import { clearAcitveHeroes } from './mapSettings.js';

const settingsPlayers = document.querySelectorAll('.map-heroes-item-img');
const blueTeamPlayers = document.querySelectorAll(
  '.player-blue-team img:first-child'
);
const redTeamPlayers = document.querySelectorAll(
  '.player-red-team img:first-child'
);

settingsPlayers.forEach((settingPlayer, i) => {
  settingPlayer.addEventListener('click', () => {
    if (settingPlayer.getAttribute('src') === './assets/images/empty.png') {
      const activeHero = document.querySelector('.map__hero-active');
      settingPlayer.setAttribute('src', activeHero.getAttribute('src'));
      settingPlayer.setAttribute('alt', activeHero.getAttribute('alt'));
      clearAcitveHeroes();
    } else {
      settingPlayer.setAttribute('src', './assets/images/empty.png');
      settingPlayer.setAttribute('alt', '');
    }

    try {
      redTeamPlayers[(i - 1) / 2].setAttribute(
        'src',
        settingPlayer.getAttribute('src')
      );
    } catch {}
    blueTeamPlayers[i / 2].setAttribute(
      'src',
      settingPlayer.getAttribute('src')
    );
  });
});
