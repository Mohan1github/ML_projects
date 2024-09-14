import React from 'react'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdEdit } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";
import {motion} from "framer-motion"
const Myblogs = () => {
    var blogs = 100;
  return (
    <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{
      duration:1
    }}
    whileInView={{opacity:1}}>
    <div className="myblogs">
        <div className="myblogsleft">
            <ul>
            <Link style={{textDecoration:"none" ,color:"white"}}>
                <li>
                <CgProfile size={25} />
                <h4 style={{marginLeft:"5px"}}>Profile</h4>
                
                </li>
                </Link>
                <Link style={{textDecoration:"none" ,color:"white"}}>
                <li>
                <MdEdit size={25} />
                    Edit profile
                </li>
                </Link>
               
                    <li>
                        <RiNumbersFill size={25} />
                    Blogs count :
                    {blogs}
                </li>

               
                <li>
                    
                </li>
            </ul>
        </div>
        <div className="myblogsright">
          <div className="headerdiv">
          <h1>My blogs</h1>
          </div>
          <div className="contentmyblog">
        <Link to="" style={{textDecoration:"none",color:"black"}}>
          <div className="blogdesc">
              <img src="../public/blog2.jpg" alt="img" className='cimg'></img>
              <h3 style={{textAlign:"center"}}>Blogs name</h3>
              <p>Blog content</p>
              <div className="cardfooter">
              <img src="" className='nickimage'></img>
              <p className="nickimage">Nick image</p>
              <p>like</p>
              <p>rate</p>
              </div>
          </div>
          </Link>
          <Link to="" style={{textDecoration:"none",color:"black"}}>
          <div className="blogdesc">
              <img src="../public/blog2.jpg" alt="img" className='cimg'></img>
              <h3 style={{textAlign:"center"}}>Blogs name</h3>
              <p>Blog content</p>
              <div className="cardfooter">
              <img src="" alt ="kabi"className='nickimage'></img>
              <p className="nickimage">Nick image</p>
              </div>
          </div>
          </Link>
          <Link to="" style={{textDecoration:"none",color:"black"}}>
          <div className="blogdesc">
              <img src="../public/blog2.jpg" alt="img" className='cimg'></img>
              <h3 style={{textAlign:"center"}}>Blogs name</h3>
              <p>Blog content</p>
              <div className="cardfooter">
              <img src="" alt ="kabi"className='nickimage'></img>
              <p className="nickimage">Nick image</p>
              </div>
          </div>
          </Link>
          <Link to="" style={{textDecoration:"none",color:"black"}}>
          <div className="blogdesc">
              <img src="../public/blog2.jpg" alt="img" className='cimg'></img>
              <h3 style={{textAlign:"center"}}>Blogs name</h3>
              <p>Blog content</p>
              <div className="cardfooter">
              <img src="" alt ="kabi"className='nickimage'></img>
              <p className="nickimage">Nick image</p>
              </div>
          </div>
          </Link>
          <Link to="" style={{textDecoration:"none",color:"black"}}>
          <div className="blogdesc">
              <img src="../public/blog2.jpg" alt="img" className='cimg'></img>
              <h3>Blogs name</h3>
              <p>Blog content</p>
              <div className="cardfooter">
              <img src="" alt ="kabi"className='nickimage'></img>
              <p className="nickimage">Nick image</p>
              </div>
          </div>
          </Link>
          <Link to="" style={{textDecoration:"none",color:"black"}}>
          <div className="blogdesc">
              <img src="../public/blog2.jpg" alt="img" className='cimg'></img>
              <h3>Blogs name</h3>
              <p>Blog content</p>
              <div className="cardfooter">
              <img src="" alt ="kabi"className='nickimage'></img>
              <p className="nickimage">Nick image</p>
              </div>
          </div>
          </Link>
          <Link to="" style={{textDecoration:"none",color:"black"}}>
          <div className="blogdesc">
              <img src="../public/blog2.jpg" alt="img" className='cimg'></img>
              <h3>Blogs name</h3>
              <p>Blog content</p>
              <div className="cardfooter">
              <img src="" alt ="kabi"className='nickimage'></img>
              <p className="nickimage">Nick image</p>
              </div>
          </div>
          </Link>
          <Link to="" style={{textDecoration:"none",color:"black"}}>
          <div className="blogdesc">
              <img src="../public/blog2.jpg" alt="img" className='cimg'></img>
              <h3>Blogs name</h3>
              <p>Blog content</p>
              <div className="cardfooter">
              <img src="" alt ="kabi"className='nickimage'></img>
              <p className="nickimage">Nick image</p>
              </div>
          </div>
          </Link>
          <Link to="" style={{textDecoration:"none",color:"black"}}>
          <div className="blogdesc">
              <img src="../public/blog2.jpg" alt="img" className='cimg'></img>
              <h3>Blogs name</h3>
              <p>Blog content</p>
              <div className="cardfooter">
              <img src="" alt ="kabi"className='nickimage'></img>
              <p className="nickimage">Nick image</p>
              </div>
          </div>
          </Link>
          </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Myblogs;