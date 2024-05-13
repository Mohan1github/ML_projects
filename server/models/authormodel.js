const mongoose = require("mongoose")
const schema = mongoose.Schema
const authormodel = new schema({
    name:{
        type:String,
        required:[true,"please provide the auhtor name"]
    },
    age:{
        type:Number,
        required:[true,"please provide the auhtor age"]
    },
    number:{
        type:Number,
        required:[true,"please provide the auhtor number"],
        max:10,
        min:5
    },
    country:{
        type:String,
        required:[true,"please provide the auhtor country"]
    }
},{timestamps:true})

const Authors = mongoose.model("authors",authormodel)
module.exports= Authors