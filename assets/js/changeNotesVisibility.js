const changeNotesVisiblityBtn = document.querySelector(
  ".change-note-visibility"
);
const changeNotesVisibilityIcon = changeNotesVisiblityBtn.children[0];

changeNotesVisiblityBtn.addEventListener("click", () => {
  const notes = document.querySelectorAll(".note");
  if (changeNotesVisibilityIcon.classList.contains("fa-eye")) {
    changeNotesVisibilityIcon.classList.replace("fa-eye", "fa-low-vision");
    notes.forEach((note) => {
      note.style.transform = "scale(0.001)";
      setTimeout(() => {
        note.style.display = "none";
      }, 300);
    });
  } else {
    changeNotesVisibilityIcon.classList.replace("fa-low-vision", "fa-eye");
    notes.forEach((note) => {
      note.style.display = "flex";
      setTimeout(() => {
        note.style.transform = "scale(1)";
      }, 0);
    });
  }
});
