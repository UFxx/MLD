const reset = document.querySelector(".fa-undo-alt");
const resetButtonsContainer = document.querySelector(".reset-buttons");
const confirmResetButton = document.querySelector(".reset-buttons .fa-check");
const cancelResetButton = document.querySelector(".reset-buttons .fa-times");
const container = document.querySelector(".container");
let banItems = document.querySelectorAll(".ban-item");
let pickItems = document.querySelectorAll(".pick-item");

new MutationObserver(() => {
  banItems = document.querySelectorAll(".ban-item");
  pickItems = document.querySelectorAll(".pick-item");
}).observe(container, { childList: true, subtree: true });

function cancelReset() {
  reset.style.display = "";
  resetButtonsContainer.style.display = "none";
}

function clearAll(items) {
  items.forEach((item) => {
    const itemImg = item.children[0];
    itemImg.setAttribute(
      "src",
      "./assets/images/empty.png"
    );
    itemImg.setAttribute("alt", "");
  });

  const heroes = document.querySelectorAll(".hero");
  heroes.forEach((hero) => hero.classList.remove("hero__picked"));
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

cancelResetButton.addEventListener("click", cancelReset);
