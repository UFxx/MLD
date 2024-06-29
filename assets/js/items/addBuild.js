import { setHero } from "./setHero.js";
import { setItemImg } from "./changeItem.js";
import { resetBuild } from "./buildOptions.js";
import { deleteBuild } from "./buildOptions.js";

const addBuildButton = document.querySelector(".add-build");
const buildsContainer = document.querySelector(".builds-container");

addBuildButton.addEventListener("click", () => {
  const build = document.createElement("div");
  build.classList.add("build");

  const buildHero = document.createElement("div");
  buildHero.classList.add("build-hero");

  const heroImg = document.createElement("img");
  heroImg.setAttribute("src", "./assets/images/empty.png");
  heroImg.setAttribute("alt", " ");

  const buildItems = document.createElement("div");
  buildItems.classList.add("build-items");

  for (let i = 0; i < 6; i++) {
    const buildItemsImg = document.createElement("img");
    buildItemsImg.setAttribute("src", "./assets/images/empty.png");
    buildItemsImg.setAttribute("alt", " ");

    buildItems.appendChild(buildItemsImg);
  }

  const buildSpellImg = document.createElement("img");
  buildSpellImg.setAttribute("src", "./assets/images/empty.png");
  buildSpellImg.setAttribute("alt", " ");

  const buildOptions = document.createElement("div");
  buildOptions.classList.add("build-buttons");

  const buildOptionsResetButton = document.createElement("i");
  buildOptionsResetButton.classList.add("fas", "fa-undo", "reset-build");
  const buildOptionsDeleteButton = document.createElement("i");
  buildOptionsDeleteButton.classList.add("fas", "fa-trash", "delete-build");

  buildsContainer.appendChild(build);

  build.appendChild(buildHero);

  buildHero.appendChild(heroImg);

  build.appendChild(buildItems);

  build.appendChild(buildSpellImg);

  build.appendChild(buildOptions);

  buildOptions.appendChild(buildOptionsResetButton);
  buildOptions.appendChild(buildOptionsDeleteButton);
});

function buildFunctions(mutations) {
  const buildHero = mutations[2].addedNodes[0];
  const buildItems = mutations[3].addedNodes[0].childNodes;
  const resetBuildButton = mutations[6].addedNodes[0];
  const deleteBuildButton = mutations[7].addedNodes[0];

  buildHero.addEventListener("click", () => setHero(buildHero));

  buildItems.forEach((item) =>
    item.addEventListener("click", () => setItemImg(item))
  );

  deleteBuildButton.addEventListener("click", () =>
    deleteBuild(deleteBuildButton)
  );

  resetBuildButton.addEventListener("click", () =>
    resetBuild(resetBuildButton)
  );
}

new MutationObserver(buildFunctions).observe(buildsContainer, {
  childList: true,
  subtree: true,
});
