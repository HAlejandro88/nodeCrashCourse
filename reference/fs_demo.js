const fs = require('fs');
const path = require('path');

// Create Folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder created');
})

// Create and Write a file
fs.writeFile(path.join(__dirname, '/test', 'hellow.txt'), 'Hellow World', err => {
    if (err) throw err;
    console.log('File writen to ...');
    // File Append
    fs.appendFile(path.join(__dirname, '/test', 'hellow.txt'), 'I love Node.js', err => {
        if (err) throw err;
        console.log('File append write');
    })
})


// Read File
fs.readFile(path.join(__dirname, '/test', 'hellow.txt'), 'utf8', err => {
    if (err) throw err;
    console.log('Read File');
})