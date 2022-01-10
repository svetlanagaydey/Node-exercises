//import chalk from 'chalk'   
const chalk = require('chalk');
//const fs = require('fs');
// fs.writeFileSync('text.txt', 'Hello!  Im an Applaseeds student.');
// fs.appendFileSync('text.txt', '\nI want to be frontend developer');
const getNotes = require('./notes');
const printNotes = getNotes();
console.log(printNotes);

// const validator = require('validator');
// console.log(validator.isEmail('test@test.com'));
// console.log(validator.isURL('https://mead.io'));


const greenMsg = chalk.green.invers.bold('Success!');
console.log(greenMsg);