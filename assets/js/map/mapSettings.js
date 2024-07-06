import { Heroes } from "../storage.js";

const mapSettingsButton = document.querySelector(".fa-wrench");
const closeMapSettingsButton = document.querySelector(
  ".map-settings .fa-times"
);
const mapSettingsContainer = document.querySelector(".map-settings");

mapSettingsButton.addEventListener("click", () => {
  mapSettingsContainer.classList.add("map-settings__visible");

  otherModesButtons.style.display = "none";
});

closeMapSettingsButton.addEventListener("click", () => {
  mapSettingsContainer.classList.remove("map-settings__visible");
  otherModesButtons.style.display = "flex";
});

const heroesContainer = document.querySelector(".map-heroes-container");

Heroes.map((hero) => {
  if (hero.name === "") {
    const emptyHero = document.createElement("div");
    emptyHero.style.display = "none";
    heroesContainer.appendChild(emptyHero);
  } else {
    const heroImg = document.createElement("img");
    heroImg.setAttribute("src", hero.img);
    heroImg.setAttribute("alt", hero.name);
    heroesContainer.appendChild(heroImg);

    heroImg.addEventListener("click", () => {
      clearAcitveHeroes();
      heroImg.classList.add("map__hero-active");
    });
  }
});

export function clearAcitveHeroes() {
  const activeHeroes = document.querySelectorAll(".map__hero-active");
  activeHeroes.forEach((activeHero) =>
    activeHero.classList.remove("map__hero-active")
  );
}
