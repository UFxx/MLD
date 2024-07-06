import { setStartPositions } from "./playerMovement.js";
const resetPositions = document.querySelector(".reset-positions");

resetPositions.addEventListener("click", setStartPositions);
