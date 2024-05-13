const express = require("express")
const { getallauthor, singleauthor, createauthor } = require("../controllers/authorcontroller")

const authorrouter = express.Router

authorrouter.get("/all-author", getallauthor)
authorrouter.get("/get-author/:id", singleauthor)
authorrouter.get("/create-author", createauthor)

module.exports = {authorrouter}