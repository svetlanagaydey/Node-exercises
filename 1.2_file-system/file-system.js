const fs = require('fs');
fs.writeFileSync('text.txt', 'The text file created.');
fs.appendFileSync('text.txt', '\nThe text was appended to file.')

fs.copyFileSync('text.txt', 'copy.txt');
fs.copyFileSync('text.txt', 'third.txt');
fs.renameSync('text.txt', 'myText.txt');

const filenames = fs.readdirSync('../1.2_file-system');
filenames.forEach(file => {
    console.log(file);
});

fs.unlinkSync("third.txt")