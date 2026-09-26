const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static("public"));


app.listen(port ,()=>{
    console.log(`app is listening on port ${port}`);
})

let posts = [{
    id: uuidv4(),
    username: "Adarsh",
    content:"hello world , i love coding what about you"},
    {
        id: uuidv4(),
       username: "Ayush",
    content:"hello world , i dont  love coding what about you", 
    }
]

app.get("/",(req,res)=>{
    res.send("this is root page")
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts/new",(req,res)=>{
    let {id,username,content} = req.body;
    posts.push({id,username,content});
    res.redirect("/posts")
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
   let post= posts.find((p)=> id===p.id);
    res.render("show.ejs",{post});

})