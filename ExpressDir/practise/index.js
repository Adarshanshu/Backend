const express = require("express");
const app = express();

let port = 8080;
app.listen(port,()=>{
    console.log(`app  is listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send({
        Adarsh:"software Engineer",
        Ayush:"pilot",
    });
   console.log("ha beta sun rha hu")
});

// app.get("/:username/:id",(req,res)=>{
//     let {username,id} = req.params;
//     let data = `<h1>welcome to the page of @${username} which has id ${id}</h1>`
//     res.send(data)
// })

app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("your query string is empty.......")
    }
    res.send(`your query is ${q}`)
})