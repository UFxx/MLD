import { translation } from '../storage.js';
import { Items } from '../storage.js';

export function setStats(buildItems) {
  const buildStats = buildItems.parentElement.children[6];
  if (getBuildItemsStats(buildItems) === '') {
    buildStats.children[0].innerHTML =
      translation.buildsCharacteristics[localStorage.getItem('language')];
  } else {
    buildStats.children[0].innerHTML = getBuildItemsStats(buildItems);
  }
}

function getBuildItemsStats(buildItems) {
  const stats = [];
  buildItems.childNodes.forEach((buildItem) => {
    Items.forEach((item) => {
      if (
        buildItem.getAttribute('data') ===
        item.name[localStorage.getItem('language')]
      ) {
        if (stats.indexOf(item.stats[localStorage.getItem('language')]) != -1) {
          return;
        } else {
          stats.push(item.stats[localStorage.getItem('language')]);
        }
      }
    });
  });
  const formattingString = stats.join(' ').split('+').join('<br>+');
  return formattingString.substring(4, formattingString.length);
}
