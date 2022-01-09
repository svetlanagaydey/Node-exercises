
//const fs = require('fs');
// fs.writeFileSync('text.txt', 'Hello!  Im an Applaseeds student.');
// fs.appendFileSync('text.txt', '\nI want to be frontend developer');

const getNotes = require('./notes');
const printNotes = getNotes();
console.log(printNotes);