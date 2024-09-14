import React from 'react'
import { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios"
import Navbar2 from './navbar2';
import Blogcarousel from './blogcarousel';
import Homepageblogs from './homepageblogs';
import { motion } from "framer-motion"
const Searchresults = () => {
  const apireq = async (req, res) => {
    const checkquerylength = prompt.length
    try {
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
    catch (error) {
      if (error) {
        console.log("An error occured")
        res.status(500).json({ message: "internal server error" })
      }
    }
  }
  const [prompt, setPrompt] = useState("")
  const [resfromserve, setResfromserve] = useState("")
  const [isloading, setIsloading] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1
      }}
      whileInView={{ opacity: 1 }}

    >
      <Navbar2 />
      <div className='search-part'>
        <div className="bloginfo">
          <h1 style={{ textAlign: "center", fontSize: "2rem" }}>BLOG</h1>
          <p>A blog, short for weblog, is a frequently updated web page used for personal commentary or business content. Blogs are often interactive and include sections at the bottom of individual blog posts where readers can leave comments.</p>
        </div>
        <div className="blogcard">
          <div className="blogc">
            <img src="/blog2.jpg" alt="kabi"></img>
            <p style={{ textAlign: "center" }}>Create your own blogs</p>
          </div>
          <div className="blogc">
            <img src="/blog3.avif" alt="kabi"></img>
            <p>Make it available to everyone</p>
          </div>
          <div className="blogc">
            <img src="/blogimage.jpg" alt="kabi"></img>
            <p>Quality of sharing</p>
          </div>
          <div className="blogc">
            <img src="/cret.webp" alt="kabi"></img>
            <p>Create your own blogs</p>
          </div>
          <div className="blogc">
            <img src="/crting.webp" alt="kabi"></img>
            <p>Create your own blogs</p>
          </div>
        </div>
      </div>
      <h1 style={{ maringTop: "5px", textAlign: "center", paddingTop: "1rem" }}> Various Blogs</h1>
      <h3 style={{ marginLeft: "8px", textAlign: "center" }}>Write about the various events and the important happenings and celebrate the experience sharing
        content making with the various authors and exposing the world by your writings and a perfect spot for reading the world best happenings.
      </h3>
      <div className="car">
        <Blogcarousel />
      </div>
      <Homepageblogs />
      <div className="div">
        <div className="leftmost">
          <img src="../people-searching-for-information-web-search-concept-illustration-flat-vector.jpg" alt="kabinya"></img>
        </div>
        <div className="rightmost">
          <h2> search engine  A search engine is a software program that helps people find the information they are looking for online using keywords or phrases. Search engines are able to return results quickly even with millions of websites online by scanning the Internet continuously and indexing every page they find.</h2>
          <div className="infobtn">
            <button type="button" className='info-btn-1'>Explore</button>
            <button type="button" className='info-btn-2'>Docs</button>
          </div>
        </div>

      </div>
      <div className="floaterdiv">

      </div>
    </motion.div>
  )
}

export default Searchresults