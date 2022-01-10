const yargs = require('yargs')
yargs.version('1.1.0')

yargs.command({
    command: 'calc',
    describe: 'Simple mathematics options',
    handler: function(argv) {
        console.log('helo')
        if (argv._[1] === 'add') {
            console.log(argv._[2] + argv._[3])
        }
        if (argv._[1] === 'sub') {
            console.log(argv._[2] - argv._[3])
        }
        if (argv._[1] === 'mult') {
            console.log(argv._[2] * argv._[3])
        }
        if (argv._[1] === 'pow') {
            console.log(argv._[2] ** 2)
        }
    }
})
yargs.parse();