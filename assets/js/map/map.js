const mapButton = document.querySelector(".fa-gamepad");
const mapContainer = document.querySelector(".map-container");

mapButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.clientHeight,
    behavior: "smooth",
  });

  if (scrollY > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
