const mongoose = require('mongoose');

async function main(){
     await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main().then(()=>{
    console.log("connection made successfully")
}).catch((err)=>{
    console.log(err);
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);

const Employee = mongoose.model("Employee",userSchema);

const user1 = new User({
    name:"Adarsh",
    email:"adarshmpvm@gmail.com",
    age:22,
});

user1.save();

const employee1 = new Employee({
    name:"adarsh",
    email:"hello@gmail.com",
    age:22,
})
employee1.save();


Employee.insertMany([
    {name:"tony",email:"hii@gamil.com",age:22},
    {name:"bob",email:"bob@gmail.com",age:21},
    {name:"casey",email:"casey",age:20},
]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
