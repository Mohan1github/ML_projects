import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { motion } from "framer-motion"
export const Createblog = () => {

  const handlecreate = async () => {
    try {
      const datasent = await axios.post("http://localhost:5001/api/create-new-blog", { name, aname, file, description })
      const response = datasent.result
      if (response) {
        console.log("Successfully blog created")
      }
      else {
        console.log("something went wrong")
      }
    }
    catch (err) {
      console.log("Internal server error")
    }
  }
  const [name, setName] = useState("")
  const [aname, setAname] = useState("")
  const [file, setFile] = useState("")
  const [description, setDescription] = useState("")
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1
      }}
      whileInView={{ opacity: 1 }}>
      <div className="create-blog">
        <h2 style={{ marinBottom: "-4rem", color: "black", paddingBottom: "4rem", fontFamily: "poppins" }}>Create your blog</h2>
        <div className="dou">
          <h3>Name:</h3><br />
          <input type="text" placeholder='Name' name="name" id="name" className='input1' onChange={(e) => setName(e.target.value)} /><br />
          <h3> Author:</h3><br />
          <input type="text" placeholder='author name' className='input2' onChange={(e) => setAname(e.target.value)} />
        </div><br />
        <div className="fileup">
          <h3> Image:</h3>
          <input type="file" placeholder='choose image' className='input' name="file" onChange={(e) => setFile(e.target.value)} /><br />
        </div>
        <div className="decription-div">
          <h3>Description:</h3>
          <textarea type="text" className='input3' onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="button" className='create-blog-btn' onClick={handlecreate}>Create</button>
      </div>
    </motion.div>
  )
}
export default Createblog;
