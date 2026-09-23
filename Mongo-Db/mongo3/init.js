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

let allchats = [
  { from: "adarsh", to: "ayush", msg: "what are you doing right now....", created_at: Date.now().toLocaleString },
  { from: "arpit", to: "adarsh", msg: "let's play cricket tomorrow morning", created_at: Date.now().toLocaleString },
  { from: "neha", to: "rahul", msg: "did you finish the assignment?", created_at: Date.now() },
  { from: "animesh", to: "adarsh", msg: "check out this new coding problem", created_at: Date.now() },
  { from: "priya", to: "sneha", msg: "movie night today?", created_at: Date.now() },
  { from: "rohan", to: "amit", msg: "can you send me the notes?", created_at: Date.now() },
  { from: "ayush", to: "arpit", msg: "gym at 6 am sharp!", created_at: Date.now() },
  { from: "adarsh", to: "animesh", msg: "bro, did you solve Jump Game VI?", created_at: Date.now() },
  { from: "sneha", to: "neha", msg: "let’s go shopping this weekend", created_at: Date.now() },
  { from: "rahul", to: "priya", msg: "happy birthday 🎉", created_at: Date.now() }
];

Chat.insertMany(allchats);
