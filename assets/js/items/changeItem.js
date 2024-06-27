const buildItems = document.querySelectorAll(".build-items img");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    clearActiveItem();
    item.classList.add("item__active");
  });
});

buildItems.forEach((buildItem) => {
  buildItem.addEventListener("click", () => {
    const activeItem = document.querySelector(".item__active");
    if (activeItem) {
      buildItem.setAttribute(
        "src",
        activeItem.children[0].children[0].getAttribute("src")
      );
      clearActiveItem();
    } else {
      buildItem.setAttribute(
        "src",
        "./assets/images/empty.png"
      );
    }
  });
});

function clearActiveItem() {
  items.forEach((item) => {
    item.classList.remove("item__active");
  });
}
