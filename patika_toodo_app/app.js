// script.js

// Elementleri seç
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesList = document.getElementById('notesList');

// LocalStorage'dan notları yükle
function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.forEach(note => addNoteToDOM(note));
}

// Notu DOM'a ekle
function addNoteToDOM(note) {
  const li = document.createElement('li');
  li.textContent = note;

  // Silme butonu ekle
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Sil';
  deleteBtn.onclick = () => deleteNote(note, li);
  li.appendChild(deleteBtn);

  notesList.appendChild(li);
}

// Notu ekle
function addNote() {
  const note = noteInput.value.trim();
  if (note === '') return;

  // LocalStorage'a kaydet
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));

  // DOM'a ekle ve input'u temizle
  addNoteToDOM(note);
  noteInput.value = '';
}

// Notu sil
function deleteNote(note, li) {
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes = notes.filter(n => n !== note);
  localStorage.setItem('notes', JSON.stringify(notes));

  // DOM'dan kaldır
  li.remove();
}

// Event Listener
addNoteBtn.addEventListener('click', addNote);

// Sayfa yüklendiğinde notları getir
loadNotes();
