import { translation } from "./storage.js";

const languages = document.querySelectorAll(".language ul li");

const rolesButtons = document.querySelectorAll(".roles ul li button");
const categoriesButtons = document.querySelectorAll(
  ".items-categories li button"
);
const ranks = document.querySelectorAll(".rank");
const searchHeroInput = document.querySelector("#search-hero");
const searchItemInput = document.querySelector("#search-item");
const arrowsMode = document.querySelector(".map-arrows-settings div label");
const arrowsModeInputs = document.querySelectorAll(
  ".arrows-settings-container label"
);
const mapSettingsButtons = document.querySelectorAll(
  ".settings-buttons button"
);

languages.forEach((language) => {
  language.addEventListener("click", () => {
    localStorage.setItem("language", language.getAttribute("data"));
    window.location.href = "";
  });
});

const activeLanguage = localStorage.getItem("language");
languages.forEach((language) => {
  if (language.getAttribute("data") === activeLanguage) {
    language.classList.add("language__active");
  } else {
    language.classList.remove("language__active");
  }
});

function updateTextBasedOnLanguage(element, translationItem) {
  element.length
    ? element.forEach((el, i) => {
        el.innerHTML = translationItem[i][localStorage.getItem("language")];
      })
    : element.placeholder
    ? (element.placeholder = translationItem[localStorage.getItem("language")])
    : (element.innerHTML = translationItem[localStorage.getItem("language")]);
}

updateTextBasedOnLanguage(rolesButtons, translation.roles);
updateTextBasedOnLanguage(categoriesButtons, translation.categories);
updateTextBasedOnLanguage(ranks, translation.ranks);
updateTextBasedOnLanguage(searchHeroInput, translation.searches[0]);
updateTextBasedOnLanguage(searchItemInput, translation.searches[1]);
updateTextBasedOnLanguage(arrowsMode, translation.mapSettings.arrowsMode[0]);
updateTextBasedOnLanguage(
  arrowsModeInputs,
  translation.mapSettings.arrowsModeInputs
);
updateTextBasedOnLanguage(mapSettingsButtons, translation.mapSettings.buttons);
