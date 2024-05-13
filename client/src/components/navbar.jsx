import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const nav = useNavigate()
  return (
    <nav>
      <div className="navbar-container">
        <h2 style={{ color: "black", paddingLeft: "2rem", fontWeight: "2000" }}><Link to="/" style={{ textDecoration: "none", color: "white" }} className='main_icon'>BYTES</Link></h2>
        <ul className="list-div">
          <li><Link to="components/create-blogs" className='nav-link' style={{ color: "white" }}>Createblogs</Link></li>
          <li><Link to="components/myblogs" className='nav-link' style={{ color: "white" }}>myblogs</Link></li>
          <li><Link to="components/favourites" className='nav-link' style={{ color: "white" }}>favourites</Link></li>
          <li><Link to="components/authors" className='nav-link' style={{ color: "white" }}>Authors</Link></li>
          <li><Link to="pages/contact" className='nav-link' style={{ color: "white" }}>Contact</Link></li>
        </ul>
        <div className="navbuttons">
          <button type="button" className='nav-btn-1' onClick={() => nav("/login")} >Login</button>
          <button type="button" className='nav-btn-2' onClick={() => nav("/register")}>Signup</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar