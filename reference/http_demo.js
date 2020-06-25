const http =  require('http');

// Create server Object

http.createServer((req,res) => {
    // Write response
    res.write('Hellow world ')
    res.end();
}).listen(5000, () => console.log('server running...'));