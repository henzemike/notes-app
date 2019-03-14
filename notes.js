const fs = require('fs');
const chalk = require('chalk');

const listNotes = (title) => {
  const notes = loadNotes();
  console.log(chalk.inverse.blue("Your notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const findNote = notes.find((note) => note.title === title);

  if (findNote) {
    console.log(chalk.inverse.white(findNote.title), findNote.body);
  } else {
    console.log(chalk.inverse.red('Note not found'));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.inverse.green('New note added'));
  } else {
    console.log(chalk.inverse.red('Note title taken'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const savedNotes = notes.filter((note) => note.title !== title);

  if (notes.length !== savedNotes.length) {
    saveNotes(savedNotes);
    console.log(chalk.inverse.green('Removed note'));
  } else {
    console.log(chalk.inverse.red('Note not found'));
  } 
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }  
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};