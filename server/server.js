const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
const { GoogleGenerativeAI } = require("@google/generative-ai")
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
require("dotenv").config()
const corsOption = {
    origin: ["http://localhost:5173", "http://localhost:5001"]
}
app.use(cors(corsOption))
const geminiConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
};
const googleAI = new GoogleGenerativeAI(process.env.GEMINI_APIKEY);

const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-pro",
    geminiConfig,
});

app.post("/search/search-result", async (req, res) => {
    const query = req.body
    try {
        if (query) {
            console.log("query posted")
            console.log(query)
            return res.status(200).json({ msg: "ok" })
        }
        else {
            console.log("invalid query")
        }
    }
    catch (error) {
        console.log("Internal server error:", error)
        return res.status(500).json({ msg: "internal server error" })
    }
})
app.post("/api/search-engine/response", async (req, res) => {
    const { prompt } = req.body;
    try {
        const result = await geminiModel.generateContent(prompt);
        const response = result.response;
        console.log(response.text());
        res.json(response)
    } catch (error) {
        console.log("response error", error);
    }
})
const PORT = 5001
app.listen(PORT, () => {
    console.log("Server running at :", PORT)
})
