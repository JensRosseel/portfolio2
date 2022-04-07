import React from 'react'
import './Skills.css'
import LinearProgress from '@mui/material/LinearProgress'

const Skills = () => { 
  return (
    <div className='skills-container'>
        <div className='skills-text'>
            <div className='skills-title'>Skills</div>
            <p>
                I create responsive websites that are fast and easy to use. 
                The main area of my expertise is HTML, CSS, JS, PHP, building small and medium 
                web apps and coding interactive layouts. I also have experience with react and laravel frameworks.
            </p>
        </div>
        <div className='skills-visualiser'>
            <div className='skill-name'>Front-End</div>
            <LinearProgress variant='determinate' color="success" value={90} />
            <div className='skill-name'>Back-End</div>
            <LinearProgress variant='determinate' color="error" value={90} />
            <div className='skill-name'>React</div>
            <LinearProgress variant='determinate' color="info" value={65} />
            <div className='skill-name'>Laravel</div>
            <LinearProgress variant='determinate' color="secondary" value={60} />
        </div>
    </div>
  )
}

export default Skills