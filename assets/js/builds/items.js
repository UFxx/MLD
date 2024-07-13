import { Items } from "../storage.js";

const itemsContainer = document.querySelector(".items-container");
const items = document.querySelector(".items");
const builderButton = document.querySelector(".fa-hammer");
const language = localStorage.getItem("language");
const otherModesButtons = document.querySelector(".other-modes");

builderButton.addEventListener("click", () => {
  itemsContainer.classList.toggle("items-container__visible");
  otherModesButtons.removeChild(otherModesButtons.children[2]); // Remove map settings button
  if (window.scrollY > 0) {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  }
});

function formattingStat(stat) {
  const getEveryStat = stat.split("+");
  const addLineBreaker = getEveryStat.join("<br>+");
  const deleteFirstLineBreaker = addLineBreaker.substring(
    4,
    addLineBreaker.length
  );
  return deleteFirstLineBreaker;
}

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
  itemName.textContent = item.name[language];

  const itemCost = document.createElement("p");
  itemCost.textContent = item.cost;

  const itemDescription = document.createElement("div");
  const itemDescriptionText = document.createElement("p");
  item.description === ""
    ? null
    : (itemDescriptionText.textContent = item.description[language]);

  const itemDescriptionStats = document.createElement("p");

  itemDescriptionStats.innerHTML = formattingStat(item.stats[language]);

  itemDescription.classList.add("item-description");

  items.appendChild(createItem);

  createItem.appendChild(itemImgContainer);
  itemImgContainer.appendChild(itemImg);

  createItem.appendChild(itemText);
  itemText.appendChild(itemName);
  itemText.appendChild(itemCost);

  itemDescription.appendChild(itemDescriptionStats);
  itemDescription.appendChild(itemDescriptionText);
  createItem.appendChild(itemDescription);
});
