import React from 'react';
import './Projects.css';
import dmcforum from '../../Assets/dmcforum.JPG';
import movietracker from '../../Assets/movietracker.JPG';
import fightinggame from '../../Assets/fightinggame.jpg';

const Projects = () => {
  return (
    <div className="projects-container">
        <div className="projects-text">
            Here are some of my projects.
        </div>
        <div className="projects-cards">
            <div className="card">
                    <img src={dmcforum} alt="dmc forum" />
                    <div className='card-content'>
                        <h2 className="card-title">dmc forum</h2>
                        <p className="card-text">
                            This is a forum made with laravel.
                        </p>
                        <div className="card-buttons">
                            <a href="https://dmcforum.jensrosseel.com" target="_blank" rel="noopener noreferrer" className="card-button">To Deploy</a>
                            <a href="https://github.com/JensRosseel/dmc-forum" target="_blank" rel="noopener noreferrer" className="card-button">To Repo</a>
                        </div>
                    </div>                
            </div>
            <div className="card">
                    <img src={movietracker} alt="movie tracker" />
                    <div className='card-content'>
                        <h2 className="card-title">Movie Tracker</h2>
                        <p className="card-text">
                            This is a movie tracker made with react and material ui.
                        </p>
                        <div className="card-buttons">
                            <a href="https://www.movietracker.jensrosseel.com/" target="_blank" rel="noopener noreferrer" className="card-button">To Deploy</a>
                            <a href="https://github.com/JensRosseel/movie-tracker" target="_blank" rel="noopener noreferrer" className="card-button">To Repo</a>
                        </div>
                    </div>  
            </div>
            <div className="card">
                    <img src={fightinggame} alt="Fighting Game" />
                    <div className='card-content'>
                        <h2 className="card-title">Fighting Game</h2>
                        <p className="card-text">
                            This fighting game was made with plain js and canvas.
                        </p>
                        <div className="card-buttons">
                            <a href="https://fighting-game-jens.netlify.app" target="_blank" rel="noopener noreferrer" className="card-button">To Deploy</a>
                            <a href="https://github.com/JensRosseel/fighting-game" target="_blank" rel="noopener noreferrer" className="card-button">To Repo</a>
                        </div>
                    </div>  
            </div>
        </div>
    </div>
  );
};

export default Projects;
