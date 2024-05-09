const addNote = document.querySelector(".add-note");
const note = document.querySelector(".note");

addNote.addEventListener("click", () => {
  note.classList.toggle("note__hidden");
  addNote.classList.toggle("add-note__opened");
});
