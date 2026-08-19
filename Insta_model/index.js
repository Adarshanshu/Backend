const express = require("express");
const app = express();
let port = 8080;
const {v4:uuidv4} = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine","ejs");
// for handling post requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const path = require("path");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


app.listen(port,(req,res)=>{
    console.log(`app is listening on port ${port}`);
});

let posts = [
    {   
        id:uuidv4(),
        username:"mr-tom-holland",
        content : "https://plus.unsplash.com/premium_photo-1727942419322-0f09fd3b31e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVscyUyMG1hbGV8ZW58MHx8MHx8fDA%3D",
        description : " hello i am tom and this is my insta post",
    },
     {
        id:uuidv4(),
        username:"Adarsh-mpvm322",
        content : "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
        description : " hello i am adarsh and how is my outfit",
    },
     {
        id:uuidv4(),
        username:"laura_wudfolt",
        content : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
        description : " suggest some good pose to me !!!!",
    },
     {
        id:uuidv4(),
        username:"magisson",
        content : "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        description : "what do you think about me ....",
    },
]

app.get("/",(req,res)=>{
    res.send("hello i am root page")
});
app.get("/post",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/post/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/post",(req,res)=>{
    let {username,content,description} = req.body;
    let id= uuidv4();
    posts.push({id,username,content,description});
    res.redirect("/post")
});

app.get("/post/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id);
    res.render("details.ejs",{post});
});

app.get("/post/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id===p.id);
    res.render("edit.ejs",{post});
});


app.patch("/post/:id",(req,res)=>{
    let {id} = req.params;
    let {content, description} = req.body;   
    let post = posts.find((p)=> id===p.id);

    if(post){
        post.content = content;
        post.description = description;     
    }

    res.redirect("/post");
});

app.delete("/post/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id!==p.id);
    res.redirect("/post")
})