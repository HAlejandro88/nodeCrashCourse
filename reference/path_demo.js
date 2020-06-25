const path = require('path');

// Base file name 

console.log(path.basename(__filename));


// Directory Name
console.log(path.dirname(__filename));

// File extencion
console.log(path.extname(__filename)); 

// Create path Object
console.log(path.parse(__filename));

// Concatenate paths

console.log(path.join(__dirname, 'test', 'hellow.html'));