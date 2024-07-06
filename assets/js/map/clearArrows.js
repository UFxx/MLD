const clearArrowsButton = document.querySelector(".clear-arrows");
const canvas = document.querySelector("#map-canvas");
const ctx = canvas.getContext("2d");
const arrowsMode = document.querySelector("#arrows-mode");
const arrowsSettingsContainer = document.querySelector(
  ".arrows-settings-container"
);

export function clearArrows() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arrowsMode.checked = false;
  arrowsSettingsContainer.classList.remove(
    "arrows-settings-container__visible"
  );
}

clearArrowsButton.addEventListener("click", clearArrows);
