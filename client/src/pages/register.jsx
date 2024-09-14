import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { motion } from "framer-motion"
const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conpassword, setConpassword] = useState("")
  const [name, setName] = useState("")
  const [nick, setNick] = useState("")
  const navigate = useNavigate()
  const handlesignup = async () => {
    try {
      console.log(email, password, conpassword, name, nick)
      const signup = await axios.post("http://localhost:5001/auth/register", { email, password, conpassword, name, nick })
      if (signup) {
        navigate("/login")
s
      }
      else {
        console.log("Somethings went wrong")
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1
      }}
      whileInView={{ opacity: 1 }}>
      <div className='signup-div'>

        <div className="signup">
          <FaRegUserCircle size={100} style={{ marginTop: "-1rem" }} />
          <h3 style={{ marginBottom: "1rem" }}>Register</h3>
          <div className="deco-div">
            <IoMdLogIn size={100} color='white' />
          </div>
          <input type="text" required placeholder='Name' id="name" onChange={(e) => setName(e.target.value)}></input><br />
          <input type="text" required placeholder='Nick name' id="name" onChange={(e) => setNick(e.target.value)}></input><br />
          <input type="text" required placeholder='Email' id="email" onChange={(e) => setEmail(e.target.value)}></input><br />
          <input type="password" required placeholder='Password' id="Password" onChange={(e) => setPassword(e.target.value)}></input><br />
          <input type="password" required placeholder='Confirm password' id="password" onChange={(e) => setConpassword(e.target.value)}></input><br />
          <button type="submit" className='login-btn' onClick={handlesignup} >Sign up</button><br />
          <p>Already have account?<a href="/login" style={{ marginLeft: "0.5rem", textDecorationLine: "none", color: "royalblue" }}> Login</a></p>
        </div>
      </div>
    </motion.div>
  )
}

export default Register