const yargs = require('yargs')
const users = require('./users.js')
yargs.version('1.1.0')
const uniqid = require('uniqid'); 

yargs.command({
    command: 'add',
    describe: 'Adding a user',
    builder: {
        id: {
            describe: 'Unic user Id',
            demandOption: false,
        },
        name: {
            describe: 'Users name',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Users email',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        console.log('User to add: name: ' + argv.name + '; email: ' + argv.email);
        users.addUser(uniqid(), argv.name, argv.email)
    }
})

yargs.command({
    command: 'delete',
    describe: 'Deleting a user',
    builder: {
        id: {
            describe: 'Unic user Id',
            demandOption: true,
        }
    },
    handler: function(argv) {
        users.deleteUser(argv.id)
    }
})

yargs.command({
    command: 'read',
    describe: 'Find a user',
    builder: {
        id: {
            describe: 'Unic user Id',
            demandOption: true,
        }
    },
    handler: function(argv) {
        users.readUser(argv.id)
    }
})

yargs.parse();