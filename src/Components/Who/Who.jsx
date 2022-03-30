import React from 'react';
import { Link } from 'react-router-dom';
import './Who.css';
import codehead from '../../Assets/codehead.png'

const Who = () => {
  return (
  <div className="who-container">
    <div className="who-text">
      <p>
        Hello, My name is Jens Rosseel and I am a <br />
        Web Developer With a passion for &#60;code/&#62;
      </p>
      <p className='subtext'>front-end / back-end</p>
      <Link to='/contact'>Contact Me!</Link>
    </div>
    <div className='who-glitch'>
    <div className='glitch'>
      <img src={codehead} alt='head with code inside'/>
      <div class="glitch__layers">
        <div class="glitch__layer"></div>
        <div class="glitch__layer"></div>
        <div class="glitch__layer"></div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default Who;
