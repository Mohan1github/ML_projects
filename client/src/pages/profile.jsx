import React from 'react'
import {motion} from "framer-motion"
import { useState , useEffect } from 'react'
import axios from "axios"
const Profile = () => {
    const [profile, setProfile] =useState({})
    const getprofile  = async()=>{
        try{
            const response = await axios.get("")
            const data = response.json()
            if(data){
                setProfile(data)
            }
            else{
                console.log("Error fetching data")
            }
        }
        catch(error){
                console.log("inter server error")
        }
    }
  return (
    <motion.div>
            <div className="profilecard">
                
            </div>
    </motion.div>
  )
}

export default Profile