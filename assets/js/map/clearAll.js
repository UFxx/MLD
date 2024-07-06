import { clearArrows } from "./clearArrows.js";
import { clearHeroes } from "./clearHeroes.js";
import { setStartPositions } from "./playerMovement.js";

const clearAll = document.querySelector(".clear-all");

clearAll.addEventListener("click", () => {
  clearHeroes();
  clearArrows();
  setStartPositions();
});
