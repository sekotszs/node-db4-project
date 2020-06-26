const express = require("express");

const ingredientRouter = require("./data/ingredientRouter");
const recipeRouter = require("./data/recipeRouter");

const server = express();

server.use(express.json());
// server.use("/api/ingredients", ingredientRouter);
// server.use("/api/recipes", recipeRouter);

module.exports = server; 