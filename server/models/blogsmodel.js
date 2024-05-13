const mongoose = require("mongoose")
const schema = mongoose.Schema

const blogmodel = new schema(
    {
        name: {
            type: String,
            required: [true, "Please provide name for blog"],
            unique: true
        },
        aname: {
            type: String,
            required: [true, "Please provide name for Author"],
            unique: true
        },
        file: {
            type: String,
            required: true,
            unique: true
        },
        authorimage:{
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: [true, "Please provide name for blog"],
            maxlength:1000,
            minlength:50,
            unique: true
        },
        cretaedat: {
            type: Date
        },
        likes:[{type:schema.ObjectId,ref:"user"}],
        postedby :{
            type:schema.ObjectId,
            ref:"user"
        }
    },
    { timestamps: true }
)
const Blogs = mongoose.model("blogs", blogmodel)
module.exports = Blogs;
