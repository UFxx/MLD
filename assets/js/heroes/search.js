const search = document.querySelector("#search-hero");

search.addEventListener("input", () => {
  const searchText = search.value;
  const searchTextLen = searchText.length;
  const heroesNames = document.querySelectorAll(".hero p");
  heroesNames.forEach((heroName) => {
    const heroNameText = heroName.textContent;
    if (
      searchTextLen > 0 &&
      searchText !== heroNameText.substring(0, searchTextLen)
    ) {
      heroName.parentElement.style.display = "none";
    } else if (searchText === heroNameText.substring(0, searchTextLen)) {
      heroName.parentElement.style.display = "flex";
    } else if (searchTextLen === 0) {
      heroesNames.forEach(
        (heroName) => (heroName.parentElement.style.display = "flex")
      );
    }
  });
});
