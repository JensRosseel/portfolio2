import React from "react";
import "./Skills.css";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPython,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-text">
        <div className="skills-title">Skills</div>
        <p>
          I create responsive websites that are fast and easy to use. The main
          area of my expertise is HTML, CSS, JS, PHP, building small and medium
          web apps and coding interactive layouts. I also have experience with
          react and laravel frameworks.
        </p>
      </div>
      <div className="skills-visualiser">
          <ul className="orbit-wrap">
            <li className="orbit-center">
            </li>
            <li>
              <ul className="ring-2">
                <li>
                  <i className="orbit-icon"><SiHtml5 /></i>
                </li>
                <li>
                  <i className="orbit-icon"><SiCss3 /></i>
                </li>
                <li>
                  <i className="orbit-icon"><SiJavascript /></i>
                </li>
                <li>
                  <i className="orbit-icon"><SiReact /></i>
                </li>
                <li>
                  <i className="orbit-icon"><SiPhp /></i>
                </li>
                <li>
                  <i className="orbit-icon"><SiLaravel /></i>
                </li>
                <li>
                  <i className="orbit-icon"><SiMysql /></i>
                </li>
                <li>
                  <i className="orbit-icon"><SiPython /></i>
                </li>
              </ul>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Skills;
