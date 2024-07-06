import { clearArrows } from "./clearArrows.js";
import { clearHeroes } from "./clearHeroes.js";
import { setStartPositions } from "./playerMovement.js";

const clearAll = document.querySelector(".clear-all");
const mapSettings = document.querySelector(".map-settings");

clearAll.addEventListener("click", () => {
  clearHeroes();
  clearArrows();
  setStartPositions();
  mapSettings.classList.remove("map-settings__visible");
});
