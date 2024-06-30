const resetBuildButton = document.querySelectorAll(".reset-build");
const deleteBuildButton = document.querySelectorAll(".delete-build");

export function resetBuild(button) {
  const buildItems =
    button.parentElement.previousElementSibling.previousElementSibling;
  const totalBuildPrice = buildItems.children[buildItems.children.length - 1];

  for (let i = 0; i < buildItems.children.length; i++) {
    buildItems.children[i].children[0].setAttribute(
      "src",
      "./assets/images/empty.png"
    );
    buildItems.children[i].children[0].setAttribute("alt", " ");
    buildItems.children[i].children[1].textContent = 0;
    totalBuildPrice.textContent = 0;
  }
}

export function deleteBuild(button) {
  const build = button.parentElement.parentElement;
  build.remove();
}

resetBuildButton.forEach((button) => {
  button.addEventListener("click", () => {
    resetBuild(button);
  });
});

deleteBuildButton.forEach((button) => {
  button.addEventListener("click", () => {
    deleteBuild(button);
  });
});
