const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/search", (req, res) => {
    const query = req.query.q;
    res.send(`You searched for: ${query}`);
});

app.get("/:username", (req, res) => {
    const username = req.params.username;
    res.send(`Hello, what is your age ${username}!`);
});