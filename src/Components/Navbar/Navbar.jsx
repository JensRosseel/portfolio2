import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../Assets/logo.png';
import { FaRocket, FaAddressCard, FaMailBulk } from "react-icons/fa";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
        <div className="logo"><img src={Logo} alt="logo" /></div>
        <Link to="/"><FaAddressCard/></Link>
        <Link to="/projects"><FaRocket/></Link>
        <Link to="/contact"><FaMailBulk/></Link>
    </div>
  )
};

export default Navbar;
