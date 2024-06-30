import { setHero } from "./setHero.js";
import { setItem } from "./changeItem.js";
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
    const buildItem = document.createElement("div");
    buildItem.classList.add("build-item");

    const buildItemsImg = document.createElement("img");
    buildItemsImg.setAttribute("src", "./assets/images/empty.png");
    buildItemsImg.setAttribute("alt", " ");

    const buildItemCost = document.createElement("p");
    buildItemCost.classList.add("build-item-cost");
    buildItemCost.textContent = 0;

    buildItem.appendChild(buildItemsImg);
    buildItem.appendChild(buildItemCost);
    buildItems.appendChild(buildItem);

    if (i === 5) {
      const totalBuildPrice = document.createElement("div");
      totalBuildPrice.classList.add("total-build-price");
      totalBuildPrice.textContent = 0;

      buildItems.appendChild(totalBuildPrice);
    }
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
  const buildItems = mutations[3].addedNodes[0];
  const resetBuildButton = mutations[6].addedNodes[0];
  const deleteBuildButton = mutations[7].addedNodes[0];
  
  buildHero.addEventListener("click", () => setHero(buildHero));

  try {
    buildItems.childNodes.forEach((buildItem) => {
      buildItem.children[0].addEventListener("click", () =>
        setItem(buildItem.children[0])
      );
    });
  } catch {}

  deleteBuildButton.addEventListener("click", () =>
    deleteBuild(deleteBuildButton)
  );

  resetBuildButton.addEventListener("click", () => {
    console.log(resetBuildButton);
    resetBuild(resetBuildButton);
  });
}

new MutationObserver(buildFunctions).observe(buildsContainer, {
  childList: true,
  subtree: true,
});
