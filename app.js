//import chalk from 'chalk';
//import yargs from 'yargs';
//const chalk = require('chalk');
//const fs = require('fs');
// fs.writeFileSync('text.txt', 'Hello!  Im an Applaseeds student.');
// fs.appendFileSync('text.txt', '\nI want to be frontend developer');
// const getNotes = require('./notes');
// const printNotes = getNotes();
// console.log(printNotes);

// const validator = require('validator');
// console.log(validator.isEmail('test@test.com'));
// console.log(validator.isURL('https://mead.io'));

//const blueMsg = chalk.yellow.bold.bgBlue('Success!');
//console.log(blueMsg);
//console.log(process.argv);
// const command = process.argv[2];
// if (command === 'add') {
//     console.log('Adding note!')
// }
const yargs = require('yargs')
yargs.version('1.1.0')
//console.log(yargs.argv);


yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        description: {
            describe: 'Note desc',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        console.log('Title to add command: ' + argv.title)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('The note was removed')
    }
})
//console.log(yargs.argv);
yargs.parse();