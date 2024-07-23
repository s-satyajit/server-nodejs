const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} : New Req Rec\n`;
    fs.appendFile('./test.txt', log, (err, data) => {
        // res.end("Hello From Server");
        switch(req.url) {
            case '/': 
                res.end("HomePage")
            break;
            case '/about':
                 res.end("Hey I'm Satyajit")
            default:
                res.end("404 Not Found")
        }
    });
    // console.log("New Req Rec");
    console.log(req.headers);
    // res.end("Hello From Server!");
});

myServer.listen(8000, () => console.log("Server Started"))