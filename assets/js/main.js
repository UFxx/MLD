const Heroes = [
  {
    id: 1,
    name: "Мия",
    role: "Стрелок",
    img: "https://cdn.oneesports.gg/cdn-data/2023/03/MLBB_Miya.jpg",
  },
  { id: 2, name: "Клинт", role: "Стрелок", img: "" },
  { id: 3, name: "Бруно", role: "Стрелок", img: "" },
  { id: 3, name: "Броуди", role: "Стрелок", img: "" },
];

const heroesContainer = document.querySelector(".all-heroes-container");
Heroes.map((hero) => {
  const newHero = document.createElement("div");
  newHero.classList.add("hero");

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
