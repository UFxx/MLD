const arrowsMode = document.querySelector("#arrows-mode");
const canvas = document.querySelector("#map-canvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".color");
const arrowsSettingsContainer = document.querySelector(
  ".arrows-settings-container"
);
const arrowHeadlenWidth = document.querySelector("#arrow-headlen-width");
const arrowBodyWidth = document.querySelector("#arrow-body-width");

let startX;
let startY;
let endX;
let endY;
let draw = false;
let currentLineColor = "red";
let headlenWidth = arrowHeadlenWidth.value;
let lineWidth = arrowBodyWidth.value;

colors.forEach((color) => {
  color.style.backgroundColor = color.classList[1];
  color.addEventListener("click", () => {
    colors.forEach((color) => {
      color.classList.remove("color__active");
    });
    color.classList.add("color__active");
    currentLineColor = color.classList[1];
  });
});

arrowsMode.addEventListener("click", () => {
  arrowsMode.checked
    ? arrowsSettingsContainer.classList.add(
        "arrows-settings-container__visible"
      )
    : arrowsSettingsContainer.classList.remove(
        "arrows-settings-container__visible"
      );
});

canvas.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", (e) => {
  draw = true;
  endX = e.clientX;
  endY = e.clientY;
  if (
    draw &&
    (startX - endX > 25 || startX - endX < -25) &&
    arrowsMode.checked
  ) {
    drawing();
    draw = false;
  }
});

arrowHeadlenWidth.addEventListener("input", () => {
  if (arrowHeadlenWidth.value > 50) {
    arrowHeadlenWidth.value = 0;
  } else if (arrowHeadlenWidth.value < 1) {
    arrowHeadlenWidth.value = 0;
  }
  headlenWidth = arrowHeadlenWidth.value;
});

arrowBodyWidth.addEventListener("input", () => {
  if (arrowBodyWidth.value > 50) {
    arrowBodyWidth.value = 0;
  } else if (arrowBodyWidth.value < 1) {
    arrowBodyWidth.value = 0;
  }
  lineWidth = arrowBodyWidth.value;
});

function drawing() {
  ctx.strokeStyle = currentLineColor;
  ctx.lineWidth = lineWidth;
  const dx = endX - startX;
  const dy = endY - startY;
  const angle = Math.atan2(dy, dx);

  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(endX, endY);
  ctx.lineTo(
    endX - headlenWidth * Math.cos(angle - Math.PI / 6),
    endY - headlenWidth * Math.sin(angle - Math.PI / 6)
  );
  ctx.moveTo(endX, endY);
  ctx.lineTo(
    endX - headlenWidth * Math.cos(angle + Math.PI / 6),
    endY - headlenWidth * Math.sin(angle + Math.PI / 6)
  );
  ctx.stroke();
}
