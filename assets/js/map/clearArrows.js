const clearArrows = document.querySelector(".clear-arrows");

clearArrows.addEventListener("click", () => {
  arrowBodyWidth.value = 7;
  arrowHeadlenWidth.value = 10;
  headlenWidth = arrowHeadlenWidth.value;
  lineWidth = arrowBodyWidth.value;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
