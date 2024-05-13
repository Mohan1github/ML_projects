import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer-sec'>
      <div className="footer_div_left">
        <h1 style={{ fontSize: "4rem", marginLeft: "2rem" }}>BYTES</h1>
        <ul className='folist'>
          <li><FaFacebookF size={20} /></li>
          <li><FaInstagram size={20} /></li>
          <li> <FaTwitter size={20} /></li>
          <li><FaWhatsapp size={20} /></li>
        </ul>
      </div>
      <div className="footer_div_middle">
        <h4>Quick links:</h4>
        <ul className='folist2'>
        <a href="/components/create-blogs"><li>createblog</li></a>
          <a href="/components/favourites"><li>Famous</li></a>
          <a href="/"><li>Home</li></a>
          <a href="/components/authors"><li>Authors</li></a>
        </ul>
       <ul  className="foli3">
       <li><h4>Connect with us</h4></li>
          <a href="/login"><li>Login</li></a>
          <a href="/register"><li>Sign up</li></a>
          <a href="/pages/contacts"><li>Contact</li></a>
        </ul>
        
      
        
      
      </div>
      <div className="footer_div_right">
        <h5 style={{ marginTop: "6rem", marginLeft: "16rem" }}>@copyrights:BYTES | 2024</h5>
        <a style={{ marginLeft: "18rem" }} href="">Terms | condition</a>
      </div>
    </div>
  )
}

export default Footer