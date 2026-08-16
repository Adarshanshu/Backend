const express = require("express");
const app = express();
let port = 3000;
app.set("view engine","ejs")

app.listen(port,(req,res)=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/select",(req,res)=>{
    res.render("select.ejs");
})

