const express = require("express");
const app = express();

const path = require("path");

//Setting up the View Engine
app.set("view engine", "ejs");
const pageRoutes = require("./src/routes/Pages");
const reqRoutes = require("./src/routes/Requests");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", pageRoutes);
app.use("/request", reqRoutes);

app.listen(3333, () => {
    console.log("Server running");
});
