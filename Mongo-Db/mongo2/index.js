// getting-started.js
const mongoose = require('mongoose');

main()
  .then(() => console.log("connected to database"))
  .catch(err => console.error("database connection failed:", err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userShcema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    contact:Number,
});

const User = mongoose.model("User",userShcema);

// const user1 = new User({
//     name:"donbosco",
//     age:45,
//     email:"jkdkjnk@gmail.com",
//     contact:97867656,
// });

// user1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

User.insertMany([{
    name:"star",
    age:34,
    email:"hello@.in",
    contact:6476764378,
},
{
    name:"ayush",
    age:24,
    email:"hiii.in",
    contact:7487893398,
}]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})