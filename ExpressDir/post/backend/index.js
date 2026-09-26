const express = require("express");
const app = express();
let port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log("app is listening in the port");
})

app.get("/",(req,res)=>{
    res.send("this is root page");
})

app.get("/ragister",(req,res)=>{
    let {user,password} = req.query;
    res.send(`your data has been accepted ${user} and your password is ${password}`)
});
app.post("/ragister",(req,res)=>{
    let {user,password} = req.body;
    console.log(user,password);
    res.send("accepted standard post response");
})