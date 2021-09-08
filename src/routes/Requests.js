const express = require("express");
const Router = express.Router();

const axios = require("axios");

//Todas as requisições para a API serão feitas aqui.

Router.get("/posts", async (req, res) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");

    return res.json(data);
});

Router.get("/albums", async (req, res) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/albums");

    return res.json(data);
});

Router.get("/todos", async (req, res) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/todos");

    return res.json(data);
});

module.exports = Router;
