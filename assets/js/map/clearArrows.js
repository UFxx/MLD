const clearArrowsButton = document.querySelector(".clear-arrows");
const canvas = document.querySelector("#map-canvas");
const ctx = canvas.getContext("2d");

export function clearArrows() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

clearArrowsButton.addEventListener("click", clearArrows);
