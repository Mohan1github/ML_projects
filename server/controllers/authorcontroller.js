const Authors = require("../models/authormodel")
const createauthor = async(req,res)=>{
    const {name,age,number,country} = req.body
    try{
        const exists = await Authors.find({name:name})
        if(exists){
            console.log("author already exist")
            res.status(401).json({msg:"user already exist"})
        }
        else{
            const newauhtor = new Auhtor(
                {name:name,
                    age:age,
                    number:number,
                    country:country}
            )
            const save = await newauhtor.save()
            if(save){
                console.log("New author saved")
                res.status(200).json({ success:true,msg:"user crested successfully"})
            }
            else{
                console.log("error creating user")
                res.status(401).json({
                 success:false,
                 msg:"error"
                })
            }
        }
    }
    catch(error){
        console.log("Error:",error)
        res.status(500).json({msg:"internals server error"})
    }
}
const getallauthor = async (req,res) => {
    try {
        const authors = await Authors.find()
        if (authors) {
            res.status(200).json({ success: true }, authors)
            console.log("Success!")
        }
        else {
            console.log("Error fetching data")
            res.status(402).json({ success: false })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "internal server error!" })
    }
}

const singleauthor = async (req, res) => {
    const id = req.params.id
    try {
        const data = await Authors.findById(id)
        if (data) {
            res.status(200).json({
                success: true,
                data
            })
        }
        else {
            console.log("error")
            res.status(400).json({ msg: "error fetching data" })
        }
    }
    catch (error) {
        console.log("internal server error")
        res.status(500).json({ msg: "internal server error" })
    }
}

exports.modules = { getallauthor, singleauthor, createauthor}