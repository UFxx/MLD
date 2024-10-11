import { Heroes } from '../storage.js';

export function setHero(buildHero) {
  const heroesContainer = document.createElement('div');
  const build = buildHero.parentElement.parentElement;

  heroesContainer.classList.add('build-heroes');
  heroesContainer.classList.add('scroll-container');
  if (!build.children[6]) {
    build.appendChild(heroesContainer);

    setTimeout(() => {
      heroesContainer.style.height = '300px';
    });

    Heroes.map((hero) => {
      if (hero.name[0] === '') {
        const emptyHero = document.createElement('div');
        emptyHero.style.display = 'none';
        heroesContainer.appendChild(emptyHero);
      } else {
        const buildHeroImg = document.createElement('img');
        buildHeroImg.classList.add('build-hero-item');
        buildHeroImg.setAttribute('src', hero.img);
        buildHeroImg.setAttribute('alt', hero.name);

        heroesContainer.appendChild(buildHeroImg);

        buildHeroImg.addEventListener('click', () => {
          heroesContainer.style.height = '0';

          setTimeout(() => {
            heroesContainer.remove();
          }, 300);

          buildHero.setAttribute('src', buildHeroImg.getAttribute('src'));
          buildHero.setAttribute('alt', buildHeroImg.getAttribute('alt'));
        });
      }
    });
  }
}
