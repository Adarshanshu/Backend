const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(() =>{ console.log('Connected to MongoDB');})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true

    },
    price:{
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        default: 0
    }
});

const book = mongoose.model('Book', bookSchema);

let book2 = new book({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 11399
});
book2.save().then((res) => console.log(res))
.catch(err => console.log(err));