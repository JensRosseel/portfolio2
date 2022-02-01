import React from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Contact = () => {
  return <div id="contact" className="contact-container">
      <p className="contact-content">If you are interested, you can contact me here.</p>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className="contact-links">
            <a href="mailto:jensrosseel.business@gmail.com"><MdEmail /></a>
            <a href="https://linkedin.com/in/jens-rosseel-a67965212" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </IconContext.Provider>
  </div>;
};

export default Contact;
