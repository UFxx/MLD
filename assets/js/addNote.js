const addNoteBtn = document.querySelector(".add-note");
const notesContainer = document.querySelector(".notes");

addNoteBtn.addEventListener("click", () => {
  const note = document.createElement("div");
  note.classList.add("note")
  
  const noteTitle = document.createElement("input");
  noteTitle.setAttribute("placeholder", "Заметка");
  noteTitle.setAttribute("type", "text");
  
  const noteText = document.createElement("textarea");
  noteText.setAttribute("placeholder", "Начните че-то писать");

  notesContainer.append(note);

  note.appendChild(noteTitle);
  note.appendChild(noteText);
});
