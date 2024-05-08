const addNote = document.querySelector(".add-note");
addNote.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  textarea.classList.add("note");
  document.body.appendChild(textarea);
});
