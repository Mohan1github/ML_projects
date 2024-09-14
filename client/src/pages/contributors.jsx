import React from 'react'
import { motion } from "framer-motion"
import { IoSearchSharp } from "react-icons/io5";
const Contributors = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1
      }}
      whileInView={{ opacity: 1 }}>

      <div className="devdiv">
        <div className='author'>
        <h1>Our authors</h1>
        <input type="text" placeholder='search here' className ="navser2" ></input>
           <button type="submit" className ="navbtn2" ><IoSearchSharp size={30}/></button>
        </div>
        
        <div className="devcarddivf">
          <div className="devcard">
            <img src="/government.jpg" alt="kabins"></img>
            <h3 >Blog name</h3>
            <h5>content</h5>
            <button type="submit"> More</button>
          </div>
          <div className="devcard">

            <img src="/nature.jpg" alt="kabins"></img>
            <h3>Blog name</h3>
            <h5>content</h5>
            <button type="submit"> More</button>
          </div>
          <div className="devcard">

            <img src="/tech.jpg" alt="kabins"></img>
            <h3>Blog name</h3>
            <h5>content</h5>
            <button type="submit"> More</button>
          </div>
          <div className="devcard">

            <img src="/blogcret.svg" alt="kabins"></img>
            <h3>Blog name</h3>
            <h5>content</h5>
            <button type="submit"> More</button>
          </div>
          <div className="devcard">

            <img src="/blogcret.svg" alt="kabins"></img>
            <h3>Blog name</h3>
            <h5>content</h5>
            <button type="submit"> More</button>
          </div>
          <div className="devcard">

            <img src="/blogcret.svg" alt="kabins"></img>
            <h3>Blog name</h3>
            <h5>content</h5>
            <button type="submit"> More</button>
          </div>
          <div className="devcard">

            <img src="/blogcret.svg" alt="kabins"></img>
            <h3>Blog name</h3>
            <h5>content</h5>
            <button type="submit"> More</button>
          </div>
          <div className="devcard">

            <img src="/blogcret.svg" alt="kabins"></img>
            <h3>Blog name</h3>
            <h5>content</h5>
            <button type="submit"> More</button>
          </div>

          <div className="devcard">

            <img src="/blogcret.svg" alt="kabins"></img>
            <h3>Blog name</h3>
            <h5>content</h5>
            <button type="submit"> More</button>
          </div>


        </div>


      </div>

    </motion.div>
  )
}

export default Contributors