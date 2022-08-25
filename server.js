const http = require('http');

const todo = ['apple is a fruit','an apple a day keeps the doctor away']

http.createServer((req,res)=>{
    const {method,url} = req;

    if(url === '/todolist'){
        if(method === 'GET'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(todo.toString());
        }
        else if(method === 'POST'){
            let body = "";
            req
            .on('data',(chunk)=>{
                body += chunk;
                
            })
            .on('error',(err)=>{
                console.log("error");
            })
            .on('end',()=>{
                body=JSON.parse(body);
                console.log("data:",body);
            });
        }

    }
    else{
        res.writeHead(404);
    }

    res.end();
}).listen(8080,()=>{
    console.log("Server is Running")
});

