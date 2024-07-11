const searchItem = document.querySelector("#search-item");

searchItem.addEventListener("input", () => {
  const searchText = searchItem.value;
  const searchTextLen = searchText.length;
  const itemNames = document.querySelectorAll(".item-text p:first-child");
  itemNames.forEach((itemName) => {
    const itemNameText = itemName.textContent;
    if (
      searchTextLen > 0 &&
      searchText !== itemNameText.substring(0, searchTextLen)
    ) {
      itemName.parentElement.parentElement.style.display = "none";
    } else if (searchText === itemNameText.substring(0, searchTextLen)) {
      itemName.parentElement.parentElement.style.display = "flex";
    } else if (searchTextLen === 0) {
      heroesNames.forEach(
        (itemName) =>
          (itemName.parentElement.parentElement.style.display = "flex")
      );
    }
  });
});
