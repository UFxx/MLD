const noteMenu = document.querySelector(".note-menu");
const noteMenuItemsCount =
  document.querySelector(".note-menu").childElementCount;

const noteMenuDelete = document.querySelector(".delete-note");
function deleteNote() {
  const activeNote = document.querySelector(".note__active");
  activeNote.style.transform = "scale(0.001)";
  setTimeout(() => {
    activeNote.remove();
  }, 300);

  noteMenu.style.height = 0;
}

const noteMenuCancel = document.querySelector(".cancel-menu");
function cancelContextMenu() {
  noteMenu.style.height = 0;
}

function openNoteContextMenu(mutations) {
  const note = mutations[0].addedNodes[0];

  note.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    const otherNotes = document.querySelectorAll(".note");
    otherNotes.forEach((note) => note.classList.remove("note__active"));

    note.classList.add("note__active");

    noteMenu.style.left = e.clientX + "px";
    noteMenu.style.top = e.clientY + "px";
    noteMenu.style.height = noteMenuItemsCount * 39.2 + "px";
  });
}

noteMenuDelete.addEventListener("click", deleteNote);
noteMenuCancel.addEventListener("click", cancelContextMenu);

new MutationObserver(openNoteContextMenu).observe(notesContainer, {
  childList: true,
});
