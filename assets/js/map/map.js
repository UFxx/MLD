const mapButton = document.querySelector(".fa-gamepad");
const mapContainer = document.querySelector(".map-container");

const mapSettingsButton = document.querySelector(".fa-wrench");
mapButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.clientHeight,
    behavior: "smooth",
  });
  otherModesButtons.appendChild(mapSettingsButton);

  if (scrollY > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    otherModesButtons.removeChild(mapSettingsButton);
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
