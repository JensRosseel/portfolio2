import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaRocket, FaAddressCard, FaMailBulk, FaCode } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  
  const [style, setStyle] = useState('navbar')

  const handleHamburger = () => {
    if(style == 'navbar')
    {
      setStyle('navbar-mobile')
    }
    else
    {
      setStyle('navbar')
    }
  }

  return (
    <>
      <div className='hamburger' onClick={handleHamburger}><IoIosMenu /></div>
      <div className={style}>
          <Link to="/" onClick={handleHamburger}><FaAddressCard/><div className='nav-text'>About</div></Link>
          <Link to="/skills" onClick={handleHamburger}><FaCode/><div className='nav-text'>Skills</div></Link>
          <Link to="/projects" onClick={handleHamburger}><FaRocket/><div className='nav-text'>Projects</div></Link>
          <Link to="/contact" onClick={handleHamburger}><FaMailBulk/><div className='nav-text'>Contact</div></Link>
      </div>
    </>
  )
};

export default Navbar;
