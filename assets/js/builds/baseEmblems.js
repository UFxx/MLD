import { BaseEmblems } from '../storage.js';

export function setBaseEmblem(baseSlot) {
  baseSlot.parentElement.parentElement.childNodes.forEach((child) => {
    if (child.classList.contains('build-base-emblems')) {
      child.childNodes.forEach((child) => {
        if (child.classList.contains('build-base-emblems-container')) {
          child.remove();
        } else {
          const baseBuildEmblemContainer = document.createElement('div');
          baseBuildEmblemContainer.classList.add(
            'build-base-emblems-container'
          );
          setTimeout(() => {
            baseBuildEmblemContainer.style.height = '250px';
          }, 0);
          baseSlot.parentElement.appendChild(baseBuildEmblemContainer);
          fillBaseEmblemsContainer(baseBuildEmblemContainer);
        }
      });
    }
  });
}

function fillBaseEmblemsContainer(container) {
  BaseEmblems.map((emblem) => {
    const emblemImg = document.createElement('img');
    emblemImg.setAttribute('src', emblem.img);
    emblemImg.setAttribute('alt', emblem.name);
    emblemImg.setAttribute('data', emblem.name);

    container.appendChild(emblemImg);

    emblemImg.addEventListener('click', () => {
      container.previousElementSibling.setAttribute('src', emblem.img);
      container.previousElementSibling.setAttribute('alt', emblem.name);
      container.previousElementSibling.setAttribute('data', emblem.name);

      container.style.height = '0px';
      setTimeout(() => {
        container.remove();
      }, 300);
    });
  });
}
