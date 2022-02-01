import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
        <div className="projects-cards">
            <div id="card1" className="card">
                <div className="card-body">
                    <h2 className="card-title">Space Invaders</h2>
                    <p className="card-content">
                        This is a space invaders clone made with pure js using DOM manipulation.
                    </p>
                    <div className="card-buttons">
                        <a href="https://spaceinvaders-jensrosseel.netlify.app" target="_blank" rel="noopener noreferrer" className="card-button">To Deploy</a>
                        <a href="https://github.com/JensRosseel/space-invaders" target="_blank" rel="noopener noreferrer" className="card-button">To Repo</a>
                    </div>
                </div>
            </div>
            <div id="card2" className="card">
                <div className="card-body">
                    <h2 className="card-title">Movie Tracker</h2>
                    <p className="card-content">
                        This is a movie tracker made with react and material ui.
                    </p>
                    <div className="card-buttons">
                        <a href="https://www.movietracker.jensrosseel.com/" target="_blank" rel="noopener noreferrer" className="card-button">To Deploy</a>
                        <a href="https://github.com/JensRosseel/movie-tracker" target="_blank" rel="noopener noreferrer" className="card-button">To Repo</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="projects-text">
            Here are some of my projects.
        </div>
    </div>
  );
};

export default Projects;
