const express = require('express');
const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('home.ejs');
});
app.get('/about', (req, res) => {
  res.render('about.ejs');
});
app.get('/rolldice', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
  res.render('contact.ejs' , {randomNumber});
});
app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
  res.render("instagram.ejs", {data});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
