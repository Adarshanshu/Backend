const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(() =>{ console.log('Connected to MongoDB');})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

User.updateMany({ name: 'john doe' }, { age: 35 }).then((res) => console.log(res))
.catch(err => console.log(err));
// User.find({ age: { $gt: 25 } }).then((res) => console.log(res))
// .catch(err => console.log(err));

// User.insertMany([
//   { name: 'john doe', email: 'john.doe@example.com', age: 30 },
//   { name: 'jane smith', email: 'jane.smith@example.com', age: 25 }
// ]).then((res) => console.log(res))
// .catch(err => console.log(err));


// const user2 = new User({
//   name: 'adam smith',
//   email: 'adam.smith@example.com',
//   age: 25
// });
// user2.save().then((res) => console.log(res))
// .catch(err => console.log(err));
