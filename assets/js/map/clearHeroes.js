const mapHeroesPick = document.querySelectorAll(".map-heroes-item-img");
const players = document.querySelectorAll(".player");
const clearHeroesButton = document.querySelector(".clear-heroes");

export function clearHeroes() {
  mapHeroesPick.forEach((hero) => {
    hero.setAttribute("src", "./assets/images/empty.png");
    hero.setAttribute("alt", "");
  });
  players.forEach((player) => {
    player.setAttribute("src", "./assets/images/empty.png");
    player.setAttribute("alt", "");
  });
}

clearHeroesButton.addEventListener("click", clearHeroes);
