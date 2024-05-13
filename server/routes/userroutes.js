const express = require("express")
const { getallusers, getuserbyid, edituser, deleteuser } = require("../controllers/usercontroller")

const userrouter = express.Router()

userrouter.get("/getallusers", getallusers)
userrouter.get("/getallusers/:id", getuserbyid)
userrouter.put("/edituser/:id", edituser)
userrouter.delete("/getallusers", deleteuser)

module.exports = { userrouter };