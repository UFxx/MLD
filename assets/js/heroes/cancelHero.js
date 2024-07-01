const heroesContainer = document.querySelector(".heroes-container");

heroesContainer.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  const activeHero = document.querySelector(".hero__active");
  activeHero.classList.remove("hero__active");
});
