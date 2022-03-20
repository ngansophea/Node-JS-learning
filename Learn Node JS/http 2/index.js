// const http = require('http');

// const requestListener = function (req, res) {
//   if (req.url === "/") {
//     res.writeHead(200);
//     res.write("HELLO Sophea Dev");
//   }else {
//     res.write(req.url);
//   }
//   res.end();
// }

// const server = http.createServer(requestListener);
// server.listen(8180); 


// Using Express 

const express = require('express');
const app = express()

app
.get('/', function (req, res) {
    res.send('Hello World')
})
.get(/.*/, function (req, res) {
  res.status(404).send(req.url)
})
app.listen(8080, function () {
  console.log('serve at http://localhost:8080')
})