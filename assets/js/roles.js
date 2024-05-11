const roles = document.querySelectorAll(".roles ul li button");
const heroes = document.querySelectorAll(".hero");

roles.forEach((role) =>
  role.addEventListener("click", () => {
    roles.forEach((role) => {
      role.classList.remove("role__active");
    });
    role.classList.add("role__active");

    heroes.forEach((hero) => {
      if (hero.getAttribute("role") !== role.value) {
        hero.style.display = "none";
      } else {
        hero.style.display = "block";
      }
      if (role.value === "All") {
        hero.style.display = "block";
      }
    });
  })
);
