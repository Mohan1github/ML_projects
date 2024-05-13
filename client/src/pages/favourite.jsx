import React from 'react'
import { motion } from "framer-motion"
const Favourites = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1
      }}
      whileInView={{ opacity: 1 }}>

      <div className="devdiv">
        <h1>Favourites</h1>
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

export default Favourites