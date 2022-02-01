import React from 'react';
import './Who.css';
import Logo from '../../Assets/logo.png';

const Who = () => {
  return (
  <div id="who" className="who-container">
    <div className="who-text">
      Hello, My name is Jens Rosseel and I am a <br />
      Web Developer With a passion for &#60;code/&#62;
    </div>
    <div className="who-image">
      <img src={Logo} alt="logo-large" />
    </div>
  </div>
  );
};

export default Who;
