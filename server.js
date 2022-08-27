const express = require("express");

const app = express();
app.use(express.json());
const port = 8080;

let todo = ['DS','DBMS','EM','DF'];

app.get("/todos",(req,res)=>{
    res.status(200).send(todo);
});

app.post("/todos", (req,res) => {
    let todolist = req.body.item;
    todo.push(todolist);
    console.log(todo);
    res.status(201).send({
        message: "request successful"
    });
});

app.delete("/todos", (req,res)=>{
    let deletethis = req.body.item;
    todo.find((element,index)=>{
        if(element===deletethis){
            todo.splice(index,1);
        }
    })
    console.log(todo);
    res.status(203).send({
        message:"item deleted"
    });
});

app.all("/todos",(req,res)=>{
    res.status(404).send()
});

app.all("*",(req,res)=>{
    res.status(404).send(503)
});

app.listen(port);
