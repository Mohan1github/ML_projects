import React from 'react'
import { motion } from "framer-motion"
const Contanct = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 1
            }}
            whileInView={{ opacity: 1 }}>

            <div className="devdiv">
                <h1>Developers</h1>
                <div className="devcarddiv">
                    <div className="devcard">
                        <div className="util">

                        </div>
                        <img src="/government.jpg" alt="kabins"></img>
                        <h3>developer name</h3>
                        <h5>Developing side: Front end</h5>
                        <button type="submit"> More</button>
                    </div>
                    <div className="devcard">
                        <div className="util">

                        </div>
                        <img src="/nature.jpg" alt="kabins"></img>
                        <h3>developer name</h3>
                        <h5>Developing side: Front end</h5>
                        <button type="submit"> More</button>
                    </div>
                    <div className="devcard">
                        <div className="util">

                        </div>
                        <img src="/tech.jpg" alt="kabins"></img>
                        <h3>developer name</h3>
                        <h5>Developing side: Back end</h5>
                        <button type="submit"> More</button>
                    </div>
                    <div className="devcard">
                        <div className="util">

                        </div>
                        <img src="/blogcret.svg" alt="kabins"></img>
                        <h3>developer name</h3>
                        <h5>Developing side: Back end</h5>
                        <button type="submit"> More</button>
                    </div>
                </div>


            </div>
            

        </motion.div>
    )
}

export default Contanct