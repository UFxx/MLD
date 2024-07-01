const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    clearActiveItem();
    item.classList.add("item__active");
  });
});

function totalBuildPrice(buildItem) {
  const buildItems = buildItem.parentElement.parentElement;
  const totalBuildPrice = buildItems.children[buildItems.children.length - 1];
  let sum = 0;
  for (let i = 0; i < buildItems.children.length; i++) {
    try {
      sum += buildItems.children[i].children[1].textContent / 1;
    } catch {}
    totalBuildPrice.textContent = sum;
  }
}

export function setItem(buildItem) {
  const activeItem = document.querySelector(".item__active");
  const itemPrice = buildItem.nextElementSibling;
  if (activeItem) {
    buildItem.setAttribute(
      "src",
      activeItem.children[0].children[0].getAttribute("src")
    );
    itemPrice.textContent = activeItem.children[1].children[1].textContent;
    clearActiveItem();
    totalBuildPrice(buildItem);
  } else {
    buildItem.setAttribute("src", "./assets/images/empty.png");
    itemPrice.textContent = 0;
    totalBuildPrice(buildItem);
  }
}

function clearActiveItem() {
  items.forEach((item) => {
    item.classList.remove("item__active");
  });
}
