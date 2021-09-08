const express = require("express");
const Router = express.Router();

//Todo o redirecionamento para as Views é feito nesse arquivo.

Router.get("/", (req, res) => {
    res.render("../src/views/index.ejs");
});

Router.get("/posts", (req, res) => {
    res.render("../src/views/posts.ejs");
});

Router.get("/albums", (req, res) => {
    res.render("../src/views/albums.ejs");
});

Router.get("/todos", (req, res) => {
    res.render("../src/views/todos.ejs");
});

module.exports = Router;
