const express = require("express")
const User = require("../models/usermodel")

const getallusers = async (req, res) => {
    try {
        const userdata = await User.find()
        if (userdata) {
            console.log("User data:", userdata)
            res.status(200).json({ success: true, userdata })
        }
        else {
            console.log("Error fetching user data")
            res.status(500).json({ success: false })
        }
    }
    catch (err) {
        console.log("error:", err)
        res.status(500).json({ msg: "internal server error" })
    }
}

const getuserbyid = async (req, res) => {
    const { id } = req.params.id
    try {
        const getuserdata = await User.findOneById({ id })
        if (getuserdata) {
            console.log("success");
            res.status(200).json({ success: true }, getuserdata)
        }
        else {
            console.log("Error fetching user data")
            res.status(500).json({ success: false })
        }
    }
    catch (err) {
        console.log("error:", err)
        res.status(500).json({ msg: "internal server error" })
    }
}

const edituser = async (req, res) => {
    const { id } = req.params.id
    const data = req.body
    try {
        const updateuser = await User.findByIdAndUpdate({ id: id }, { data }, { new: true })
        if (update) {
            console.log("User details updaed successfully")
            res.status(200).json({ success: true }, updateuser)

        }
        else {
            console.log("error updating user")
            res.status(500).json({ success: false })
        }
    }
    catch (err) {
        console.log("error:", err)
        res.status(500).json({ msg: "internal server error" })
    }
}

const deleteuser = async (req, res) => {
    const id = req.params.id;
    try {
        const finddel = await User.findByIdAndDelete({ id })
        if (finddel) {
            console.log("user deleted successfully")
            res.status(200).json({ success: true }, finddel)
        }
        else {
            console.log("Error deleting user")
            res.status(500).json({ success: false })
        }
    }
    catch (err) {
        console.log("error:", err)
        res.status(500).json({ msg: "internal server error" })
    }
}

module.exports = {getallusers,getuserbyid,edituser,deleteuser}

