const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    console.log(`Title: ${argv.title}, body: ${argv.body}`);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  handler: function() {
    console.log('Removing the note!');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: function() {
    console.log('Reading the note!');
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'Listing all notes',
  handler: function() {
    console.log('Displaying all notes!');
  }
});

yargs.parse();