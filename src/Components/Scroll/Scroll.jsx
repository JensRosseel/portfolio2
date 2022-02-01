import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import './Scroll.css';
import { IconContext } from 'react-icons';

const Scroll = () => {
    return (
        <div className="scroll-container">
            <IconContext.Provider value={{ color: 'white' }}>
                <a href="#navbar" className="scroll-button"><BsArrowUpCircle /></a>
            </IconContext.Provider>
        </div>
    );
};

export default Scroll;
