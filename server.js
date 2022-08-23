const http = require('http');

http.createServer((req,res)=>{
res.writeHead(200, {"Content-Type": "Text/html"});
res.write('<h1>Welcome! to my server</h1>');
res.end();
}).listen(8080,()=>{
    console.log("Server is Running")
});

