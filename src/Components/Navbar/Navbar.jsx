import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaRocket, FaAddressCard, FaMailBulk, FaCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
        <Link to="/"><FaAddressCard/><div className='nav-text'>About</div></Link>
        <Link to="/skills"><FaCode/><div className='nav-text'>Skills</div></Link>
        <Link to="/projects"><FaRocket/><div className='nav-text'>Projects</div></Link>
        <Link to="/contact"><FaMailBulk/><div className='nav-text'>Contact</div></Link>
    </div>
  )
};

export default Navbar;
