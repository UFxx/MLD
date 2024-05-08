const banItems = document.querySelectorAll(".ban-item");
const pickItems = document.querySelectorAll(".pick-item");

function a(items) {
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const activeHero = document.querySelector(".hero__active");
      if (item.children[0].getAttribute("src") === "") {
        item.children[0].setAttribute(
          "src",
          activeHero.children[0].getAttribute("src")
        );
        item.children[0].setAttribute(
          "alt",
          activeHero.children[0].getAttribute("alt")
        );
      } else {
        item.children[0].setAttribute("src", "");
        item.children[0].setAttribute("alt", "");
      }
      activeHero.style.opacity = "50%";
      activeHero.classList.remove("hero__active");
    });
  });
}
a(banItems);
a(pickItems);
