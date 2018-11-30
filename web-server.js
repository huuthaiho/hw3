const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req, resp)=>{
    const filePath = path.join(__dirname, './myfile.txt');

    /* sync way
    const file = fs.readFileSync(filePath);
    resp.write(file);
    resp.end();
    */

    /* async way
    fs.readFile(filePath, function (err, data) {
        if (err) throw err;
        resp.write(data);
        resp.end();
    });
    */

    //Stream
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(resp);

}).listen(1111, () => console.log('Server started at port 1111'));