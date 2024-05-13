const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { GoogleGenerativeAI } = require("@google/generative-ai")
const { blogrouter } = require("./routes/blogroutes.js")
const { authrouter } = require("./routes/authroutes")
const { userrouter } = require("./routes/userroutes")
const { authorrouter } = require("./routes/authorroutes")
app.use(express.json())
app.use(cors())
app.use(bodyParser.express())
app.use(bodyParser.json())
require("dotenv").config()
const corsOption = {
    origin: ["http://localhost:5173", "http://localhost:5001"]
}
app.use(cors(corsOption))
app.use("/blogs", blogrouter)
app.use("/auth", authrouter)
app.use("/user", userrouter)
app.use("/suthor", authorrouter)



mongoose.connect(process.env.MONGOURI).then(() => {
    console.log("Mongodb:database connected...............")
}).catch(err => { console.log("Error connceting to Mongodb:database....!::", err) })
const PORT = 5001
app.listen(PORT, () => {
    console.log("Server running at :", PORT)
})

