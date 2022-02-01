import React from 'react';
import './Navbar.css';
import Logo from '../../Assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo"><img src={Logo} alt="logo" /></div>
        <a href="#who">Who am I</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
    </div>
  )
};

export default Navbar;
