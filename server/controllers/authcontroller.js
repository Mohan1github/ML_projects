const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/usermodel")
const register = async (req, res) => {
    const { name, email, password, confirmpassword } = req.body
    try {
        const ifexist = await User.findOne({ email })
        if (ifexist) {
            console.log("user already exists")
            return res.status(401).json({ msg: "User exists" })
        }
        else {
            const hashedpassword = await bcrypt(password, 15)
            const confirmpasshash = await bcrypt(confirmpassword, 15)
            const newuser = new User({ name, email, password: hashedpassword, confirmpassword: confirmpasshash })
            const save = await save(newuser)
            if (save) {
                console.log("User created successfully!")
            }
            console.log("An error occured...!")
            const accesstoken = await jwt.sign({ id: newuser._id, email }, process.env.JWT_SECRET, { expiresIn: "7d" })
            res.cookies("jwt", token)
            res.json({ accesstoken })
        }
    }
    catch (err) {
        console.log("Internal server error")
        return res.status(500).json({ msg: "Internal server error" })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const checkuser = await User.findOne({ email })
        if (checkuser) {
            const comparepassword = await bcrypt.compare(password, checkuser.passwrod)
            if (comparepassword) {
                const token = jwt.sign({ id: checkuser._id }, { email }, process.env.JWT_SECRET, { expiresIn: "7d" })
                console.log("succesfully logged in!")
                res.cookies("token", token)
                console.log("logged in succesfully")
                res.status(200).json({ success: true, msg: "ok" })
            }
            else {
                console.log("Password mismatch..")
                return res.status(401).json({ message: "invalid password" })
            }
        }
    }
    catch (err) {
        console.log("Something went wrong")
        return res.status(500).json({ message: "Internal server error" })
    }
}

const forgotpassword = async (req, res) => {
    const email = req.body.email
    try {
        const check = await User.find(email)
        if (check) {
            res.redirect("/update-newpassword")
        }
        else {
            console.log("No email found")
            res.status(404).json({ msg: "not found" })
        }
    }
    catch (err) {
        if (err) {
            console.log("Error:", err)
        }
        console.log("Internal server error")
        res.status(500).json({ msg: "Internal server error" })
    }
}

const updatenewpassword = async (req, res) => {
    const { password, confirmpassword } = req.body;
    const { email } = req.body;
    try {
        const update = await User.findOneAndUpdate(email, { $set: password, confirmpassword }, { new: true })
        if (update) {
            console.log("password updated successfully")
            res.rediect("/login")
        }
        else {
            console.log("error updating password")
            res.status(403).json({ msg: "forbidden" })
        }
    }
    catch (err) {
        console.log("Internal server error")
        res.status(500).json({ msg: "inter server error" })
    }
}

module.exports = { updatenewpassword, forgotpassword, login, register }
