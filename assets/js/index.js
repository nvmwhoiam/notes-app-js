"use strict"

import { setClosedToOpen, setClosingToClosed, formatDate, generateId } from "./functions.js";

// DOM Elements
const notesContainer = document.querySelector('[data-list="notes_container"]');

const noteTitleInput = document.querySelector('[name="note_title"');
const noteContentInput = document.querySelector('[name="note_content"]');
const noteCategorySelect = document.querySelector('[name="note_category"]');
const noteDateInput = document.querySelector('[name="note_date"]');

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('[data-content="modal_title"]');

function saveToLocalStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getFromLocalStorage() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

function addNotes(note) {
    const noteHTML = `
        <div class="note_item" data-category="${note.category}" data-note_id="${note.id}">

            <div class="note_wrapper">

                <div class="note_header">
                    <span class="border"></span>

                    <h3 class="note_title">
                        ${note.title}
                    </h3>

                    <time datetime="${note.createdAt}" class="note_date">
                        ${formatDate(note.createdAt)}
                    </time>
                </div>

                <p class="note_text">
                    ${note.content}
                </p>

            </div>

            <div class="note_actions">
                <button type="button" class="btn_icon" data-btn="favorite" aria-label="Favorite button">
                    <i class="icon_star-regular"></i>
                </button>

                <button type="button" class="btn_icon" data-btn="edit" aria-label="Edit button">
                    <i class="icon_pencil-solid"></i>
                </button>

                <button type="button" class="btn_icon" data-btn="delete" aria-label="Delete button">
                    <i class="icon_trash-solid"></i>
                </button>
            </div>
        </div>
    `;

    if (notesContainer) {
        notesContainer.insertAdjacentHTML("afterbegin", noteHTML);
    }
}

function renderNotes() {
    const todos = getFromLocalStorage();
    notesContainer.innerHTML = '';

    for (const todo of todos) {
        addNotes(todo);
    }
}

document.addEventListener('click', (e) => {
    const addNoteBtn = e.target.closest('[data-btn="add_note"]');
    if (addNoteBtn) {
        openModal();
    }

    const closeModalBtn = e.target.closest('[data-btn="close_modal"]');
    if (closeModalBtn) {
        closeModal();
    }

    const notes = getFromLocalStorage();
    const noteItem = e.target.closest('.note_item');

    const editButton = e.target.closest('[data-btn="edit"]');
    if (editButton && noteItem) {
        const noteID = noteItem.getAttribute('data-note_id');
        const noteIndex = notes.findIndex(note => note.id === noteID);

        console.log(noteIndex)

        if (noteIndex > -1) {
            const note = notes[noteIndex];

            noteTitleInput.value = note.title;
            noteContentInput.value = note.content;
            noteCategorySelect.value = note.category;
            noteDateInput.value = note.date;

            const notesForm = document.querySelector('#notesForm');
            notesForm.classList.add('edit');
            notesForm.setAttribute('data-edit_id', noteID);

            notesForm.querySelector('button').innerText = "Edit Note";
            modalTitle.innerText = "Edit Note";

            openModal();
        }
    }

    const removeButton = e.target.closest('[data-btn="delete"]');
    if (removeButton && noteItem) {
        const noteID = noteItem.getAttribute('data-note_id');
        const updatedNotes = notes.filter(note => note.id !== noteID);

        saveToLocalStorage(updatedNotes);
        renderNotes();
    }

    const navButtons = e.target.closest('.nav_left .btn_btn');
    if (navButtons) {
        const isActive = document.querySelector('.nav_left .btn_btn.active');
        if (isActive) {
            isActive.classList.remove('active');
        }

        navButtons.classList.add('active');

        const currentCategory = navButtons.getAttribute('data-btn');

        const noteItems = notesContainer.querySelectorAll('.note_item');

        noteItems.forEach(noteItem => {
            const noteCategory = noteItem.getAttribute('data-category');

            if (currentCategory === 'all' || noteCategory === currentCategory) {
                noteItem.classList.remove('hide');
            } else {
                noteItem.classList.add('hide');
            }
        });
    }
});

document.addEventListener('submit', function (e) {
    e.preventDefault();
    const notesForm = e.target.closest('#notesForm');
    if (notesForm) {
        const title = noteTitleInput.value.trim();
        const content = noteContentInput.value.trim();
        const category = noteCategorySelect.value;
        const date = noteDateInput.value;

        if (!title || !content) return;

        const notes = getFromLocalStorage();

        const isEdit = notesForm.classList.contains('edit');
        if (isEdit) {
            const noteID = notesForm.getAttribute('data-edit_id');
            const noteIndex = notes.findIndex(note => note.id === noteID);

            if (noteIndex > -1) {
                notes[noteIndex].title = title;
                notes[noteIndex].content = content;
                notes[noteIndex].category = category;
                notes[noteIndex].createdAt = date;

                saveToLocalStorage(notes);
                renderNotes();

                notesForm.classList.remove('edit');
                notesForm.removeAttribute('data-edit_id');
                notesForm.querySelector('button').innerText = "Add note";
                notesForm.reset();
            }
        } else {
            const noteData = {
                id: generateId(),
                title,
                content,
                category,
                createdAt: new Date().toISOString()
            };

            notes.push(noteData);
            saveToLocalStorage(notes);
            addNotes(noteData);

            notesForm.reset();
        }

        closeModal();
    }
});

function openModal() {
    setClosedToOpen(backdrop);
    setClosedToOpen(modal);
}

function closeModal() {
    setClosingToClosed(backdrop);
    setClosingToClosed(modal);

    const notesForm = document.querySelector('#notesForm');
    notesForm.classList.remove('edit');
    notesForm.removeAttribute('data-edit_id');
    notesForm.querySelector('button').innerText = "Add Note";
    modalTitle.innerText = "Add Note";
    notesForm.reset();
}

renderNotes();