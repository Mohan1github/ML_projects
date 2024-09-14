import React, { useState } from 'react'
import axios from 'axios'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handlelogin = async (req,res) => {
       try{
        console.log("Enail:",email,"password:",password)
            const req = await axios.post("http://localhost:5001/auth/login",{email,password})
            if(req.result === "success"){
                console.log(req.result)
                navigate("/");
                console.log("login successfull")
            }
            else{

            }
       }
       catch(err){
            console.log("internal server error")
            console.log(err)
       }
       
        }
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{
          duration:1
        }}
        whileInView={{opacity:1}}>
        <div className='login'>
           
            <div className="login-input">
            <FaRegUserCircle size={100} style={{marginTop:"-1rem"}}/>
                <h3 style={{ marginBottom: "1rem" }}>Login</h3>
                <div className="deco-div">
                        <IoMdLogIn size={100} color='white' />
                </div>
                <input type="text" required placeholder='Email' id="email" onChange={(e) => setEmail(e.target.value)}></input><br />
                <input type="password" required placeholder='Password' id="Password" onChange={(e) => setPassword(e.target.value)}></input><br />
                <a href="/forgot-password" style={{ marginLeft: "14rem", textDecoration: "none", color: "royalblue" }}>forgot password</a><br />
                <button type="submit" className='login-btn' onClick={handlelogin}>Login</button><br />
                <p>Not have account yet?<a href="/register" style={{marginLeft:"0.5rem",textDecorationLine:"none",color: "royalblue"}}> Create new</a></p>
            </div>
        </div>
        </motion.div>
    )
}

export default Login