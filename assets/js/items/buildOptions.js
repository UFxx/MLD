const resetBuildButton = document.querySelectorAll(".reset-build");
const deleteBuildButton = document.querySelectorAll(".delete-build");

export function resetBuild(button) {
  const buildItems =
    button.parentElement.previousElementSibling.previousElementSibling;
  for (let i = 0; i < buildItems.childElementCount; i++) {
    buildItems.children[i].setAttribute("src", "./assets/images/empty.png");
    buildItems.children[i].setAttribute("alt", " ");
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
