import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaRocket, FaAddressCard, FaMailBulk } from "react-icons/fa";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
        <Link to="/"><FaAddressCard/></Link>
        <Link to="/projects"><FaRocket/></Link>
        <Link to="/contact"><FaMailBulk/></Link>
    </div>
  )
};

export default Navbar;
