import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar-container">
            <img src="./byte-logo-hexagon-icon-modern-vibrant-color-vector.jpg" alt="life" className='nav-img'></img>
            <h2 style={{color:"white"}}>Search beyond</h2>
        <div className="navbuttons">
            <button type ="button" className='nav-btn-1'>Login</button>
            <button type ="button" className='nav-btn-2'>Signup</button>
        </div>
    </div>
  )
}

export default Navbar