import { translation } from "../storage.js";

const mapInstructionButton = document.querySelector(".map-settings .fa-info");
const instructionsContainer = document.querySelector(".map-instruction");
const instructionsContainerBg = document.querySelector(
  ".map-instruction-background"
);
const closeInstructionsContainerButton = document.querySelector(
  ".map-instruction .fa-times"
);

const language = localStorage.getItem("language");

const menuItems = translation.mapSettings.instructions[language].split(".");


mapInstructionButton.addEventListener("click", () => {
    instructionsContainerBg.classList.add("map-instruction-background__visible");
    
    if (instructionsContainer.childElementCount < 4) {
        menuItems.map(menuItem => {
            const instructionsItem = document.createElement("p");
            instructionsContainer.appendChild(instructionsItem);
            instructionsItem.innerHTML += `${menuItem}. <br/><br/>`;
        });
  } else {
    return;
  }
});

closeInstructionsContainerButton.addEventListener("click", () => {
  instructionsContainerBg.classList.remove(
    "map-instruction-background__visible"
  );
});
