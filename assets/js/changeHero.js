const banItems = document.querySelectorAll(".ban-item");
const pickItems = document.querySelectorAll(".pick-item");

function changeHero(items) {
  items.forEach((item) => {
    const img = item.children[0];
    item.addEventListener("click", () => {
      const activeHero = document.querySelector(".hero__active");
      if (
        img.getAttribute("src") ===
        "https://cdn-icons-png.flaticon.com/512/25/25333.png"
      ) {
        img.setAttribute("src", activeHero.children[0].getAttribute("src"));
        img.setAttribute("alt", activeHero.children[0].getAttribute("alt"));
        // Set hero name to data
        img.setAttribute("data", activeHero.children[1].textContent);
      } else {
        img.setAttribute(
          "src",
          "https://cdn-icons-png.flaticon.com/512/25/25333.png"
        );
        img.setAttribute("alt", "");
        img.setAttribute("data", "");
      }
      activeHero.style.opacity = "50%";
      activeHero.classList.remove("hero__active");
    });
  });
}
changeHero(banItems);
changeHero(pickItems);
