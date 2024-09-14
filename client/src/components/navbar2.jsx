import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";
const Navbar2 = () => {
  const [query,setQuery] =useState("")
  const search=()=>{
  }
  useEffect(()=>{
    search()
  },[query])
      return(
        <><div className="navbar2">
          <h3 style={{padding:"1rem",color:"white"}}>Search a blog</h3>
           <input type="text" placeholder='search here' className ="navser2" onChange={(e)=>setQuery(e.target.value)}></input>
           <button type="submit" className ="navbtn2" onClick={search}><IoSearchSharp size={30}/></button>
          </div></>
      )



    }

export default Navbar2;