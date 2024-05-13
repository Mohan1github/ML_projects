const jwt = require("jsonwebtoken")
const User = require("../models/usermodel")

const verifylogin = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ msg: "you should logged in" })
    }
    else {
        const token = authorization.replace("Bearer", "")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
            if (err) {
                return res.status(401).json({ error: "You should logged in" })
            }
            else {
                const { _id } = payload
                User.findById(_id).then(userdata => {
                    req.user = userdata
                })
            }
        })
    }
}
module.exports = {verifylogin}