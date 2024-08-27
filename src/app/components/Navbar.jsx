import React from 'react'
import "./index.css";
import icon from "../assets/icon.jpeg"

function Navbar() {
  return (
   <nav className='navabar'>
    <div className='nav-outer'>
        <div className='nav-icon'>{icon}</div>
        <div className='nav-text'>TODO</div>
    </div>
   </nav>
  )
}

export default Navbar
