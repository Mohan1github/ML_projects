const express = require("express")
const { updatenewpassword, forgotpassword, login, register } = require("../controllers/authcontroller")

const authrouter = express.Router()

authrouter.post("/register", register)
authrouter.post("/login", login)
authrouter.post("/forgtopassword", forgotpassword)
authrouter.put("/update-password", updatenewpassword)

module.exports = authrouter;