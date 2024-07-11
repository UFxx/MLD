import { Spells } from "../storage.js";

export function setSpell(buildSpell) {
  const build = buildSpell.parentElement;
  const spellsContainer = document.createElement("div");

  spellsContainer.classList.add("build-spells");
  spellsContainer.classList.add("scroll-container");

  if (!build.children[5]) {
    build.appendChild(spellsContainer);

    setTimeout(() => {
      spellsContainer.style.height = "300px";
      spellsContainer.style.padding = "20px";
    });

    Spells.map((spell) => {
      if (spell.name === "") {
        const emptySpell = document.createElement("div");
        emptySpell.style.display = "none";
        spellsContainer.appendChild(emptySpell);
      } else {
        const spellImg = document.createElement("img");
        spellImg.setAttribute("src", spell.img);
        spellImg.setAttribute("alt", spell.name);

        spellsContainer.appendChild(spellImg);

        spellImg.addEventListener("click", () => {
          buildSpell.setAttribute("src", spellImg.getAttribute("src"));
          buildSpell.setAttribute("alt", spellImg.getAttribute("alt"));

          spellsContainer.style.height = "0px";

          setTimeout(() => {
            spellsContainer.remove();
          }, 300);
        });
      }
    });
  }
}
