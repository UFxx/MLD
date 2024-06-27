import { Heroes } from "../storage.js";

const heroesContainer = document.querySelector(".heroes-container");
Heroes.map((hero) => {
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
  heroImg.setAttribute("alt", `${hero.name} img`);

  const heroName = document.createElement("p");
  heroName.textContent = hero.name;

  newHero.appendChild(heroImg);
  newHero.appendChild(heroName);

  heroesContainer.append(newHero);
});
