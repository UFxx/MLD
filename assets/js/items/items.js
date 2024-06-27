import { Items } from "../storage.js";

const itemsContainer = document.querySelector(".items-container");
const items = document.querySelector(".items");
const builderButton = document.querySelector(".builder-button");

builderButton.addEventListener("click", () => {
  itemsContainer.classList.toggle("items-container__visible");
});

Items.map((item) => {
  const createItem = document.createElement("div");
  createItem.classList.add("item");
  createItem.setAttribute("category", item.category);

  const itemImgContainer = document.createElement("div");
  itemImgContainer.classList.add("item-img");

  const itemImg = document.createElement("img");
  itemImg.setAttribute("src", item.img);
  itemImg.setAttribute("alt", item.name);

  const itemText = document.createElement("div");
  itemText.classList.add("item-text");

  const itemName = document.createElement("p");
  itemName.textContent = item.name;

  const itemCost = document.createElement("p");
  itemCost.textContent = item.cost;

  items.appendChild(createItem);

  createItem.appendChild(itemImgContainer);
  itemImgContainer.appendChild(itemImg);

  createItem.appendChild(itemText);
  itemText.appendChild(itemName);
  itemText.appendChild(itemCost);
});
