const categoriesButtons = document.querySelectorAll(".items-categories button");
const allItems = document.querySelectorAll(".item");

categoriesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoriesButtons.forEach((button) => {
      button.classList.remove("categorie__active");
    });
    button.classList.add("categorie__active");

    allItems.forEach((item) => {
      item.getAttribute("category") === button.value
        ? (item.style.display = "flex")
        : (item.style.display = "none");
      if (button.value === "All") {
        item.style.display = "flex";
      }
    });
  });
});
