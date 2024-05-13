import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import {motion} from "framer-motion"
const Blogdetails = () => {
    const { id } = useParams()
    const genre = id.genre
    const [rel, setRel] = useState([{}])
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        smoothScroll: true,
        autoplay: true,
    };
    const getblogdetails = async () => {
        try {
            const blog = await axios.get(`http://localhost:5001/blogs/get-blogsby-id/${id}`)
            if (blog) {
                const res = data.json()
                setData(res)
            }
            else {
                console.log("error fetching blogs")
            }
        }
        catch (error) {
            console.log("Internal server error")
        }
    }
    const relatedblogs = async () => {
        try {
            const blog = await axios.get(`http://localhost:5001/blogs/get-filtered-blogs/${genre}`)
            if (blog) {
                const res = data.json()
                setRel(res)
            }
            else {
                console.log("error fetching blogs")
            }
        }
        catch (error) {
            console.log("Internal server error")
        }
    }

    useEffect(() => {
        getblogdetails(),
            relatedblogs()
    }, [])
    return (
        <motion.div  initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{
          duration:1
        }}
        whileInView={{opacity:1}}>{
            data.map((info) => {
                {
                    <div className="bloginfo">
                        <h1>{info.name}</h1>
                        <img src={info.file} alt="img"></img>
                        <p>{info.description}</p>
                        <div className="authorsectioin">
                            <img src={info.authorimage} alt="authorimage"></img>
                            <h3>{info.aname}</h3>
                        </div>
                        <h4> {info.createdat}</h4>
                    </div>
                }
            })
        }
            <div className="slider">
                <h1>Related blogs:</h1>
                <Slider {...settings}>{
                    rel.map((data) => {
                        <div className="relblog" key={data.id}>
                            <Link to={`/pages/blog-details/${id}`} style={{ textDecoration: "none" }} className='link'>
                                <div className="blogscarddivcontainer">
                                    <img src={data.file} alt="authorimage">
                                    </img>
                                    <div className="details">
                                        <h3>{data.name}</h3>
                                        <p>{data.description}</p>
                                        <div className="sm">
                                            <img src={data.authorimage} alt="authorimage" className='authorimg'>
                                            </img>
                                            <h4>{data.aname}</h4>
                                            <p>{data.like}</p>
                                            <p>{data.unlike}</p>
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    })}
                </Slider>
            </div>

        </motion.div>
    )
}

export default Blogdetails