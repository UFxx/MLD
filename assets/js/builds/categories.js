const categoriesButtons = document.querySelectorAll(".items-categories button");
const allItems = document.querySelectorAll(".item");
const itemsContainer = document.querySelector(".items");

categoriesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoriesButtons.forEach((button) => {
      button.classList.remove("categorie__active");
    });
    button.classList.add("categorie__active");

    allItems.forEach((item) => {
      item.getAttribute("category") === button.value
        ? itemsContainer.appendChild(item)
        : item.remove();
      if (button.value === "All") {
        itemsContainer.appendChild(item);
      }
    });
  });
});
