import changeHero from './heroes/changeHero.js';

const ranks = document.querySelectorAll('.rank');
const blueBans = document.querySelector('.team-blue .ban');
const redBans = document.querySelector('.team-red .ban');
const heroes = document.querySelectorAll('.hero');
[blueBans, redBans].forEach((team) => {
  new MutationObserver((mutations) => {
    mutations.forEach((el) => {
      try {
        el.addedNodes[0].addEventListener('click', changeHero(el.addedNodes));
      } catch {}
      try {
        const deletedBanHeroAttribute =
          el.removedNodes[0].children[0].getAttribute('data');
        heroes.forEach((hero) => {
          if (hero.classList.contains('hero__picked')) {
            if (hero.childNodes[1].textContent === deletedBanHeroAttribute) {
              hero.classList.remove('hero__picked');
            }
          }
        });
      } catch {}
    });
  }).observe(team, { childList: true });
});

function createBanItem(team) {
  const banItem = document.createElement('div');
  banItem.classList.add('ban-item');
  const banItemImg = document.createElement('img');
  banItemImg.setAttribute('src', './assets/images/empty.png');
  banItemImg.setAttribute('alt', '');
  banItemImg.setAttribute('data', '');
  banItem.appendChild(banItemImg);

  team.appendChild(banItem);
}

function changeBanItemsCount(teams, rankName) {
  teams.forEach((team) => {
    if (rankName === 'epic') {
      while (team.childElementCount > 3) {
        team.removeChild(team.lastChild);
      }
    } else if (rankName === 'legend') {
      if (team.childElementCount < 4) {
        while (team.childElementCount < 4) {
          createBanItem(team);
        }
      } else if (team.childElementCount > 4) {
        while (team.childElementCount > 4) {
          team.removeChild(team.lastChild);
        }
      }
    } else if (rankName === 'mythic') {
      if (team.childElementCount < 5) {
        while (team.childElementCount < 5) {
          createBanItem(team);
        }
      }
    }
  });
}

ranks.forEach((rank) => {
  rank.addEventListener('click', () => {
    ranks.forEach((rank) => {
      rank.classList.remove('rank__active');
    });
    rank.classList.add('rank__active');
    const rankName = rank.getAttribute('data');

    changeBanItemsCount([blueBans, redBans], rankName);
  });
});
