const preloader = document.querySelector(".preloader");
const preloaderText = document.querySelector(".preloader div");
const otherModesButtons = document.querySelector(".other-modes");

let letterScale = null;

window.addEventListener("DOMContentLoaded", () => {
  otherModesButtons.style.zIndex = -1;
  preloaderText.style.top = "50%";
  preloaderText.style.transform = "translateY(-50%)";
  letterScale = setInterval(() => {
    for (let i = 0; i < preloaderText.childElementCount; ) {
      setTimeout(() => {
        try {
          preloaderText.children[i - 1].style.transform = "translateY(-15px)";
          preloaderText.children[i - 1].previousElementSibling.style.transform =
            "translateY(0)";
        } catch {}
      }, i * 100);
      i++;
      preloaderText.lastElementChild.style.transform = "translateY(0)";
    }
  }, 1500);
});

window.addEventListener("load", () => {
  clearInterval(letterScale);
  setTimeout(() => {
    for (let i = 0; i < preloaderText.childElementCount; ) {
      setTimeout(() => {
        preloaderText.children[i - 1].style.opacity = "0";
      }, i * 50);
      i++;
    }
  }, 300);
  setTimeout(() => {
    preloader.style.opacity = 0;
  }, 900);
  setTimeout(() => {
    preloader.remove();
    otherModesButtons.style.zIndex = 2;
  }, 1000);
});
