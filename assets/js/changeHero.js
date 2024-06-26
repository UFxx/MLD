const banItems = document.querySelectorAll(".ban-item");
const pickItems = document.querySelectorAll(".pick-item");
const heroNames = document.querySelectorAll(".hero p");

export default function changeHero(items) {
  items.forEach((item) => {
    const img = item.children[0];
    item.addEventListener("click", () => {
      const activeHero = document.querySelector(".hero__active");
      const anyHeroImg = img.getAttribute("src").substring(0, 22);
      if (
        img.getAttribute("src") ===
          "https://cdn-icons-png.flaticon.com/512/25/25333.png" ||
        anyHeroImg
      ) {
        heroReplacement(img, activeHero);
      } else {
        heroReplacement(img, activeHero);
        img.setAttribute(
          "src",
          "https://cdn-icons-png.flaticon.com/512/25/25333.png"
        );
        img.setAttribute("alt", "");
        img.setAttribute("data", "");
      }
      activeHero.classList.remove("hero__active");
    });
  });
}
changeHero(banItems);
changeHero(pickItems);

function heroReplacement(img, activeHero) {
  const heroName = img.getAttribute("data");
  heroNames.forEach((name) => {
    if (heroName === name.textContent) {
      name.parentElement.classList.remove("hero__picked");
    }
    img.setAttribute("src", activeHero.children[0].getAttribute("src"));
    img.setAttribute("alt", activeHero.children[0].getAttribute("alt"));
    img.setAttribute("data", activeHero.children[1].textContent);
    activeHero.classList.add("hero__picked");
  });
}
