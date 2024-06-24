const reset = document.querySelector(".fa-undo-alt");
const resetButtonsContainer = document.querySelector(".reset-buttons");
const confirmResetButton = document.querySelector(".reset-buttons .fa-check");
const cancelResetButton = document.querySelector(".reset-buttons .fa-times");

function cancelReset() {
  reset.style.display = "";
  resetButtonsContainer.style.display = "none";
}

function clearAll(items) {
  items.forEach((item) => {
    const itemImg = item.children[0];
    itemImg.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/25/25333.png"
    );
    itemImg.setAttribute("alt", "");
  });

  const heroes = document.querySelectorAll(".hero");
  heroes.forEach((hero) => (hero.style.opacity = 1));
}

reset.addEventListener("click", () => {
  reset.style.display = "none";
  resetButtonsContainer.style.display = "flex";
});

confirmResetButton.addEventListener("click", () => {
  clearAll(banItems);
  clearAll(pickItems);
  cancelReset();
});

cancelResetButton.addEventListener("click", () => {
  cancelReset();
});
