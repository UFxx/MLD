import { Heroes } from "../storage.js";

const buildHeroImg = document.querySelector(".build-hero img");

export function setHero(buildHero) {
  const heroesContainer = document.createElement("div");
  const build = buildHero.parentElement.parentElement;

  heroesContainer.classList.add("build-heroes");
  if (!build.children[4]) {
    build.appendChild(heroesContainer);

    setTimeout(() => {
      heroesContainer.style.height = "300px";
    }, 0);

    Heroes.map((hero) => {
      const buildHeroImg = document.createElement("img");
      buildHeroImg.classList.add("build-hero-item");
      buildHeroImg.setAttribute("src", hero.img);
      buildHeroImg.setAttribute("alt", hero.name);

      heroesContainer.appendChild(buildHeroImg);
    });

    heroesContainer.childNodes.forEach((hero) => {
      hero.addEventListener("click", () => {
        heroesContainer.style.height = "0";

        setTimeout(() => {
          heroesContainer.remove();
        }, 300);

        buildHero.setAttribute("src", hero.getAttribute("src"));
        buildHero.setAttribute("alt", hero.getAttribute("alt"));
      });
    });
  }
}

buildHeroImg.addEventListener("click", () => {
  setHero(buildHeroImg);
});
