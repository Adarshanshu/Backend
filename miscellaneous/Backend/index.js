const express = require("express");
const app = express();

let port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`)
});

app.get("/ragister",(req,res)=>{
    let {name,password} = req.query;
    res.send(`welcome to the standard get request ${name} and your password is ${password}`)
})

app.post("/ragister",(req,res)=>{
    let {name,password} = req.body;
    res.send(`i recieved Standard POST response from the ${name}`)
})