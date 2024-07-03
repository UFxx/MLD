import { Emblems } from "../storage.js";

function fillEmblemsContainer(slot, emblemsContainer, index) {
  Emblems[index].map((emblem) => {
    const emblemImg = document.createElement("img");
    emblemImg.setAttribute("src", emblem.img);
    emblemImg.setAttribute("alt", emblem.name);

    emblemsContainer.appendChild(emblemImg);

    emblemImg.addEventListener("click", () => {
      slot.setAttribute("src", emblemImg.getAttribute("src"));
      slot.setAttribute("alt", emblemImg.getAttribute("alt"));

      emblemsContainer.style.height = "0px";

      setTimeout(() => {
        emblemsContainer.remove();
      }, 300);
    });
  });
}

export function setEmblem(slot) {
  const emblems = slot.parentElement;
  const emblemsContainer = document.createElement("div");
  emblemsContainer.classList.add("emblems-container");

  const slotAttribute = slot.getAttribute("data");
  if (slotAttribute === "first-slot") {
    fillEmblemsContainer(slot, emblemsContainer, 0);
  } else if (slotAttribute === "second-slot") {
    fillEmblemsContainer(slot, emblemsContainer, 1);
  } else {
    fillEmblemsContainer(slot, emblemsContainer, 2);
  }

  slot.parentElement.children[3] ? null : emblems.appendChild(emblemsContainer);

  setTimeout(() => {
    emblemsContainer.style.height = "300px";
  });
}
