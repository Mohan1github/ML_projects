import React from 'react'
import { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios"
const Searchresults = () => {
  const apireq = async () => {
    const checkquerylength = prompt.length
    if (checkquerylength == 0) {
      console.log("search  not be empty")
    }
    else {
      setIsloading(true)
      const response = await axios.post("http://localhost:5001/api/search-engine/response", { prompt });
      if (response) {
        setIsloading(false)
        setResfromserve(response.data.candidates[0].content.parts[0].text)
      }
      console.log(response)
    }
  }
  const [prompt, setPrompt] = useState("")
  const [resfromserve, setResfromserve] = useState("")
  const [isloading, setIsloading] = useState(false)
  return (
    <div className='search-part'>
      <div className="inputdiv">
        <h1 style={{ textAlign: "center",color:"white" }}>Search Bytes </h1>
        <input type="text" id="prompt" placeholder='search here.....' className='input-ser' onChange={(e) => setPrompt(e.target.value)}></input>
        <button type="button" className='ser-btn' onClick={apireq}><IoSearchSharp size={25} /></button>
        <div className="responsegenerator">
          <h3 style={{ textAlign: "center" }}></h3><br></br>
          {isloading ? <h2>Loading.....</h2> : resfromserve}
        </div>
      </div>
    </div>
  )
}

export default Searchresults