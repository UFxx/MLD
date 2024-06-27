import { Heroes } from "../storage.js";

const buildHero = document.querySelector(".build-hero img");
const buildHeroes = document.querySelector(".build-heroes");

buildHero.addEventListener("click", () => {
  buildHeroes.classList.toggle("build-heroes__visible");
});

Heroes.map((hero) => {
  const buildHero = document.createElement("img");
  buildHero.classList.add("build-hero-item");
  buildHero.setAttribute("src", hero.img);
  buildHero.setAttribute("alt", hero.name);

  buildHeroes.appendChild(buildHero);
});

buildHeroes.childNodes.forEach((hero) => {
  hero.addEventListener("click", () => {
    buildHero.setAttribute("src", hero.getAttribute("src"));
    buildHeroes.classList.toggle("build-heroes__visible");
  });
});
