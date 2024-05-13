const mongoose = require("mongoose")
const schema = mongoose.Schema

const usermodel = new schema({
    name: {
        type: String,
        required: [true, "provide your name"],
    },
    email: {
        type: String,
        required: [true, "provide your email"],
    },
    password: {
        type: String,
        required: [true, "provide your password"],
    },
    confirmpassword: {
        type: String,
        required: [true, "provide your confirmpasssword"],
    },
    nickname: {
        type: String,
        required: [true, "provide your nikname"],
    }
})

const User = mongoose.model("user", usermodel)
module.exports = User;
