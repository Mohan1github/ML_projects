const express = require("express")
const Blogs = require("../models/blogsmodel")

const getblogs = async (req, res, next) => {
    try {
        const getallblogs = await Blogs.find()
        if (getallblogs) {
            console.log("Blogs:", getallblogs)
            res.status(200).json({
                success: true,
                blogs: getallblogs
            })
        }
        else {
            if (getallblogs.length == 0) {
                consolo.log("No bglogs found")
                res.status(404).json({
                    msg: "Empty",
                    success: false
                })
            }
            else {
                console.log("Something went wrong!")
                res.status(401).json({ msg: "forbidden" })
            }
        }
    }
    catch (err) {
        console.log("Internal server error")
        res.status(501).json({ msg: "internal server error" })
    }
}
const getblogbyid = async (req, res, next) => {
    const { id } = req.params.id;
    try {
        const blog = await Blogs.findById(id)
        if (blog) {
            res.status(200).json({ msg: "success", data: blog })
            console.log("success", blog)
        }
    }
    catch (err) {
        console.log("Internal server error")
        res.ststus(500).json({ msg: "internal server error" })
    }
}

const createblog = async (req, res, next) => {
    const { name, aname, file, description } = req.body
    try {
        const search = await Blogs.findOne({ name })
        if (search) {
            console.log("the blog already exist")
            res.status(401).json({ msg: "Already exist" })
        }
        else {
            const newblogs = new Blogs({ name, aname, file, description })
            const create = await newblogs.save()
            if (create) {
                console.log("new blog is create successfully")
                res.status(200).json({ msg: "ok" })
            }
            else {
                console.log("Someting went wrong while creating blog")
                res.status(403).json({ msg: "forbidden" })
            }
        }
    }
    catch (err) {
        console.log("internal server error:", err)
        res.status(500).json({ msg: "internal server error" })
    }

}
const editblog = async (req, res, next) => {
    const { id } = req.params.id
    try {
        const update = await Blogs.findByIdAndUpdate({ id: id }, { $set: req.body }, { new: true })
        if (update) {
            res.ststus(200).json({ success: true, data: update })
        }
    }
    catch (err) {
        console.log("internal server error:", err)
        res.status(500).json({ msg: "internal server error" })
    }
}
const deleteblog = async (req, res, next) => {
    const { id } = req.params.id
    try {
        const deleting = await Blogs.findByIdAndDelete(id)
        if (deleting) {
            res.ststus(200).json({ success: true, data: deleting })
        }
        else {
            console.log("Error deleting blog")
            res.status(401).json({ msg: "errordeletingblog", success: false })
        }
    }
    catch (err) {
        console.log("internal server error:", err)
        res.status(500).json({ msg: "internal server error" })
    }
}
const searchblogs = async (req, res, next) => {
    const query = res.body
    try {
        const searchedblog = await Blogs.find(query)
        if (searchedblog) {
            console.log("Blogs details:", searchedblog)
            res.status(200).json({ msg: "Success", data: searchedblog })
        }
        else {
            console.log("not found")
            res.status(404).json({ msg: "Not found", success: false })
        }
    }
    catch (err) {
        console.log("Internal server error")
        res.status(501).json({ msg: "internal server errror" })
    }
}

const blogfilter = async (req, res, next) => {
    const genre = req.body;
    try {
        const allblogs = await Blogs.find()
        if (allblogs) {
            const filterblogs = allblogs.filter((data) => data.genre === genre)
            if (filterblogs.length > 0) {
                console.log("The filterblogs :", filterblogs)
                res.status(200).json({ success: true }, filterblogs)
            }
            else {
                console.log("Error filtering blogs")
                res.status(500).json({ success: false })

            }
        }
    }
    catch (err) {
        console.log("Internal server error")
        res.status(501).json({ msg: "internal server errror" })
    }
}

const myblogs = async (req, res, next) => {
    try {
        Blogs.find({ postedBy: req.user._id }).populate("postedBy", "_id name").then(mypost => {
            res.json({ mypost })
        }).catch(err => {
            console.log(err)
        })
    }
    catch (err) {
        console.log("Internal server error")
        res.status(501).json({ msg: "internal server errror" })
    }
}

const likes = async (req, res) => {
    try {
        const liked = await Blogs.findByIdAndUpdate(req.user.postid, { $concat: { likes: req.user._id } }, { new: true })
        if (liked) {
            liked.exec((res, err) => {
                if (err) {
                    console.log(err)
                    return res.status(422).json({ msg: err })
                }
                console.log("Liked")
            })
        }
    }
    catch (err) {
        console.log("Internal server error")
        res.status(501).json({ msg: "internal server errror" })
    }
}
const unlikes = async (req, res) => {
    try {
        const liked = await Blogs.findByIdAndUpdate(req.user.postid, { $pull: { likes: req.user._id } }, { new: true })
        if (liked) {
            liked.exec((res, err) => {
                if (err) {
                    console.log(err)
                    return res.status(422).json({ msg: err })
                }
                console.log("Unliked")
            })
        }
    }
    catch (err) {
        console.log("Internal server error")
        res.status(501).json({ msg: "internal server errror" })
    }
}
module.exports = {
    getblogs, searchblogs, deleteblog, editblog,
    createblog, getblogbyid, blogfilter,  myblogs,likes,unlikes
}