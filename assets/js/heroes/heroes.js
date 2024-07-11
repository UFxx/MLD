import { Heroes } from "../storage.js";

const language = localStorage.getItem("language");

const heroesContainer = document.querySelector(".heroes-container");
Heroes.map((hero) => {
  if (hero.name[language] === "") {
    const emptyHero = document.createElement("div");
    emptyHero.style.display = "none";
    heroesContainer.appendChild(emptyHero);
  } else {
    const newHero = document.createElement("div");
    newHero.classList.add("hero");
    newHero.setAttribute("role", hero.role);

    newHero.addEventListener("click", () => {
      const activeHeroes = document.querySelectorAll(".hero__active");
      activeHeroes.forEach((activeHero) => {
        activeHero.classList.remove("hero__active");
      });
      newHero.classList.add("hero__active");
    });

    const heroImg = document.createElement("img");
    heroImg.setAttribute("src", hero.img);
    heroImg.setAttribute("alt", `${hero.name[language]} img`);

    const heroName = document.createElement("p");
    heroName.textContent = hero.name[language];

    newHero.appendChild(heroImg);
    newHero.appendChild(heroName);

    heroesContainer.append(newHero);
  }
});
