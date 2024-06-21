const banItems = document.querySelectorAll(".ban-item");
const pickItems = document.querySelectorAll(".pick-item");

function changeHero(items) {
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const activeHero = document.querySelector(".hero__active");
      if (
        item.children[0].getAttribute("src") ===
        "https://cdn-icons-png.flaticon.com/512/25/25333.png"
      ) {
        item.children[0].setAttribute(
          "src",
          activeHero.children[0].getAttribute("src")
        );
        item.children[0].setAttribute(
          "alt",
          activeHero.children[0].getAttribute("alt")
        );
      } else {
        item.children[0].setAttribute(
          "src",
          "https://cdn-icons-png.flaticon.com/512/25/25333.png"
        );
        item.children[0].setAttribute("alt", "");
      }
      activeHero.style.opacity = "50%";
      activeHero.classList.remove("hero__active");
    });
  });
}
changeHero(banItems);
changeHero(pickItems);
