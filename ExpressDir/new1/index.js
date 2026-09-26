const express = require("express");
const app = express();
let port = 8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})
app.get("/",(req,res)=>{
    res.send("you are in root path")
})

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    let code = `<h1>welcome to the page of <i>@${username}</i> who has id <b>${id}</b></h1>`
    res.send(code);
})