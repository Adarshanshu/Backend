const express = require("express");
const app = express();
let port = 8080;

const path = require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
const methodOverride = require("method-override");
app.use(methodOverride("_method"))

const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
.then(()=>{
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp1');
}

let Chat1 = new Chat({
    from : "adarsh",
    to : " ayush",
    msg : " what are you doing right now....",
    created_at : Date.now(),
})
Chat1.save().then((res)=>{
    console.log("hii")
}).catch((err)=>{
    console.log(err);
})


app.get("/",(req,res)=>{
    res.send("hii i am root path")
});

// index route

app.get("/chats", async(req,res)=>{
    let chats =  await Chat.find();
    res.render("index.ejs",{chats});
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/chats",(req,res)=>{
    let {from,to,msg} = req.body;
    let newChat = new Chat({
        from : from,
        to : to,
        msg : msg,
        created_at : new Date(),
    }) 
    newChat.save().then((res)=>{
        console.log("new chat saved")
    }).then((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
})

// edit route

app.get("/chats/:id/edit",async (req,res)=>{
    let {id } = req.params;
    let chat =await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

// update route
app.put("/chats/:id", async(req,res)=>{
    let {id } = req.params;
    let {msg:newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidator:true,new:true});

    res.redirect("/chats")
});

// destroy route 

app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})

app.listen(port,()=>{
    console.log("server is working on port 8080");
})