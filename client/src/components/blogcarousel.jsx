import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {motion} from "framer-motion"
const Blogcarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        smoothScroll: true,
        autoplay:true,
      };
  return (
    <motion.div  
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:10}}  
    exit={{opacity:0}}
    transition={{duration:2}} 
        >
    <Slider {...settings}>
        <div className="cardivs">
            <img src="/tech.jpg" alt="img"></img>
            <div className="title"><h1>Technology</h1></div>
        </div>
        <div className="cardivs"><img src="/nature.jpg" alt="img">
            </img>
            <div className="title"><h1>Nature</h1></div>
            </div>
        <div className="cardivs"><img src="/politics.jpg" alt="img"></img><div className="title"><h1>Politics</h1></div></div>
        <div className="cardivs"><img src="/business.jpg" alt="img"></img><div className="title"><h1>Business</h1></div></div>
        <div className="cardivs"><img src="/globalmarket.jpg" alt="img"></img><div className="title"><h1>Global marget</h1></div></div>
        <div className="cardivs"><img src="/government.jpg" alt="img"></img><div className="title"><h1>Government</h1></div></div>
        
    </Slider>
    </motion.div>
  )
}

export default Blogcarousel