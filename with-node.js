const http = require('http');

let todo = ['DS','DBMS','EM','DF'];

http.createServer((req,res)=>{
    const {method,url} = req;
    
    if(url === '/todolist'){
        if(method === 'GET'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(todo.toString());
        }

        else if(method === 'POST'){
            let body="";
            req
            .on('data',(chunk)=>{
                body += chunk;
                
            })
            .on('error',(err)=>{
                console.log("error");
            })
            .on('end',()=>{
                body=JSON.parse(body);
                let todocopy = todo;
                todocopy.push(body.item);
                console.log(todocopy);
                todo=todocopy;
            });
        }

        else if(method === 'DELETE'){
            let body="";
            req
            .on("error",()=>{
                res.writeHead(502);
            })
            .on("data", (chunk)=>{
                body+=chunk;
                console.log(body);
            })
            .on("end",()=>{
                
                body=JSON.parse(body);
                let deletethis=body.item;
                // for(i=0; i<todo.length; i++){
                //     if(todo[i] === deletethis){
                //         todo.splice(i,1);
                //     }
                // }
                todo.find((element,index)=>{
                if(element===deletethis){
                    todo.splice(index,1);
                }
                });
                console.log(todo);
                res.writeHead(204);
            })

        }
        else{
            res.writeHead(501);
        }

    }
    else{
        res.writeHead(404);
    }

    res.end();
}).listen(8080,()=>{
    console.log("Server is Running")
});