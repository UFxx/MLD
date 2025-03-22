const banItems = document.querySelectorAll('.ban-item');
const pickItems = document.querySelectorAll('.pick-item');
const heroNames = document.querySelectorAll('.hero p');

export default function changeHero(items) {
  items.forEach((item) => {
    const img = item.children[0];
    item.addEventListener('click', () => {
      const activeHero = document.querySelector('.hero__active');
      if (img.getAttribute('src') === './assets/images/empty.png') {
        img.setAttribute('src', activeHero.children[0].getAttribute('src'));
        img.setAttribute('alt', activeHero.children[0].getAttribute('alt'));
        img.setAttribute('data', activeHero.children[1].textContent);
        activeHero.classList.add('hero__picked');
      } else if (img.getAttribute('src') !== './assets/images/empty.png') {
        if (!activeHero) {
          const heroName = img.getAttribute('data');
          heroNames.forEach((name) => {
            if (heroName === name.textContent) {
              name.parentElement.classList.remove('hero__picked');
            }
          });
          img.setAttribute('src', './assets/images/empty.png');
          img.setAttribute('alt', '');
          img.setAttribute('data', null);
        } else {
          activeHero.classList.add('hero__picked');
        }
        const heroName = img.getAttribute('data');
        heroNames.forEach((name) => {
          if (heroName === name.textContent) {
            name.parentElement.classList.remove('hero__picked');
          }
        });
        img.setAttribute('src', activeHero.children[0].getAttribute('src'));
        img.setAttribute('alt', activeHero.children[0].getAttribute('alt'));
        img.setAttribute('data', activeHero.children[1].textContent);
      }
      try {
        activeHero.classList.remove('hero__active');
      } catch {}
    });
  });
}
changeHero(banItems);
changeHero(pickItems);
