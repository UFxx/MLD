import { setHero } from './setHero.js';
import { setItem } from './changeItem.js';
import { resetBuild } from './buildOptions.js';
import { deleteBuild } from './buildOptions.js';
import { setSpell } from './buildSpells.js';
import { setBaseEmblem } from './baseEmblems.js';
import { setEmblem } from './emblems.js';
import { translation } from '../storage.js';

const addBuildButton = document.querySelector('.add-build');
const buildsContainer = document.querySelector('.builds-container');

addBuildButton.addEventListener('click', () => {
  const build = document.createElement('div');
  build.classList.add('build');

  const buildHero = document.createElement('div');
  buildHero.classList.add('build-hero');

  const heroImg = document.createElement('img');
  heroImg.setAttribute('src', './assets/images/empty.png');
  heroImg.setAttribute('alt', ' ');

  const buildItems = document.createElement('div');
  buildItems.classList.add('build-items');

  for (let i = 0; i < 6; i++) {
    const buildItem = document.createElement('div');
    buildItem.classList.add('build-item');
    buildItem.setAttribute('data', '');

    const buildItemsImg = document.createElement('img');
    buildItemsImg.setAttribute('src', './assets/images/empty.png');
    buildItemsImg.setAttribute('alt', ' ');

    const buildItemCost = document.createElement('p');
    buildItemCost.classList.add('build-item-cost');
    buildItemCost.textContent = 0;

    buildItem.appendChild(buildItemsImg);
    buildItem.appendChild(buildItemCost);
    buildItems.appendChild(buildItem);

    if (i === 5) {
      const totalBuildPrice = document.createElement('div');
      totalBuildPrice.classList.add('total-build-price');
      totalBuildPrice.textContent = 0;

      buildItems.appendChild(totalBuildPrice);
    }
  }

  const buildSpellImg = document.createElement('img');
  buildSpellImg.setAttribute('src', './assets/images/empty.png');
  buildSpellImg.setAttribute('alt', ' ');

  const buildOptions = document.createElement('div');
  buildOptions.classList.add('build-buttons');

  const buildOptionsResetButton = document.createElement('i');
  buildOptionsResetButton.classList.add('fas', 'fa-undo', 'reset-build');
  const buildOptionsDeleteButton = document.createElement('i');
  buildOptionsDeleteButton.classList.add('fas', 'fa-trash', 'delete-build');

  const baseBuildEmblem = document.createElement('div');
  baseBuildEmblem.classList.add('build-base-emblems');

  const baseBuildEmblemSlot = document.createElement('img');
  baseBuildEmblemSlot.setAttribute('src', './assets/images/empty.png');
  baseBuildEmblemSlot.setAttribute('alt', ' ');
  baseBuildEmblemSlot.setAttribute('data', 'base-slot');

  const buildEmblems = document.createElement('div');
  buildEmblems.classList.add('build-emblems');

  const emblemsFirstSlot = document.createElement('img');
  emblemsFirstSlot.setAttribute('src', './assets/images/empty.png');
  emblemsFirstSlot.setAttribute('alt', ' ');
  emblemsFirstSlot.setAttribute('data', 'first-slot');

  const emblemsSecondSlot = document.createElement('img');
  emblemsSecondSlot.setAttribute('src', './assets/images/empty.png');
  emblemsSecondSlot.setAttribute('alt', ' ');
  emblemsSecondSlot.setAttribute('data', 'second-slot');

  const emblemsThirdSlot = document.createElement('img');
  emblemsThirdSlot.setAttribute('src', './assets/images/empty.png');
  emblemsThirdSlot.setAttribute('alt', ' ');
  emblemsThirdSlot.setAttribute('data', 'third-slot');

  const buildStats = document.createElement('div');
  buildStats.classList.add('build-stats');
  buildStats.classList.add('scroll-container');
  const buildStatsText = document.createElement('p');
  buildStatsText.innerHTML =
    translation.buildsCharacteristics[localStorage.getItem('language')];

  buildsContainer.appendChild(build);

  build.appendChild(buildHero);

  buildHero.appendChild(heroImg);

  build.appendChild(buildItems);

  build.appendChild(buildSpellImg);

  build.appendChild(buildOptions);

  buildOptions.appendChild(buildOptionsResetButton);
  buildOptions.appendChild(buildOptionsDeleteButton);

  baseBuildEmblem.appendChild(baseBuildEmblemSlot);

  build.appendChild(baseBuildEmblem);

  buildEmblems.appendChild(emblemsFirstSlot);
  buildEmblems.appendChild(emblemsSecondSlot);
  buildEmblems.appendChild(emblemsThirdSlot);

  build.appendChild(buildEmblems);

  build.appendChild(buildStats);
  buildStats.appendChild(buildStatsText);
});

function buildFunctions(mutations) {
  const buildHero = mutations[2].addedNodes[0];
  const buildItems = mutations[3].addedNodes[0];
  const buildSpell = mutations[4].addedNodes[0];
  const resetBuildButton = mutations[6].addedNodes[0];
  const deleteBuildButton = mutations[7].addedNodes[0];
  const baseBuildEmblem = mutations[8].addedNodes[0];
  const buildEmblems = mutations[9].addedNodes[0];

  buildHero.addEventListener('click', () => setHero(buildHero));

  try {
    buildItems.childNodes.forEach((buildItem) => {
      buildItem.children[0].addEventListener('click', () =>
        setItem(buildItem.children[0])
      );
    });
  } catch {}

  deleteBuildButton.addEventListener('click', () =>
    deleteBuild(deleteBuildButton)
  );

  resetBuildButton.addEventListener('click', () =>
    resetBuild(resetBuildButton)
  );

  buildSpell.addEventListener('click', () => setSpell(buildSpell));

  baseBuildEmblem.children[0].addEventListener('click', () =>
    setBaseEmblem(baseBuildEmblem.children[0])
  );

  buildEmblems.childNodes.forEach((slot) => {
    slot.addEventListener('click', () => setEmblem(slot));
  });
}

new MutationObserver(buildFunctions).observe(buildsContainer, {
  childList: true,
  subtree: true
});
