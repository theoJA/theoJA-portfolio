import React from "react";
import "../styles/Projects.css";

export const Projects = () => {

  return (
    <div className="projects-container">
      <span className="anchor" id="projects-section"></span>
      <div>
        <h1>Things I've Done</h1>
        <hr/>
      </div>

      <div className="projects-shots">
        
        <div className="projects-shots-pair">
          <div className="a-project">
            <img className="project-picture" src={require("../images/projects/cutsforkids-png-rect.PNG")} alt="proj-pic"/>
            <h2>CutsForKids Web App</h2>
            <a href="https://www.cutsforkids.org/" target="_blank" rel="noopener noreferrer">
              <button className="projects-button">FOUNDATION INFO</button>
            </a>
            <p>Part of the front-end team developing a web and mobile application for the CutsForKids foundation. The foundation aims to 
                connect youths of low-income families with barbers in the Ottawa region. Registered youths will receive discounted haircuts 
                from barbers using the system.
            </p>
          </div>

          <div className="a-project">
            <img className="project-picture" src={require("../images/projects/relay.jpg")} alt="proj-pic"/>
            <h2>Relay</h2>
            <a href="https://github.com/theoJA/Relay" target="_blank" rel="noopener noreferrer">
              <button className="projects-button">PROJECT INFO</button>
            </a>
            <p>An Android application developed with React Native where users can create and view articles. Articles are created using a 
              rich-text editor and can contain text, images, and links. Back-end processes such as authentication, storing and accessing 
              data are performed through Firebase.
            </p>
          </div>
        </div>

        <div className="projects-shots-pair">
          <div className="a-project">
            <img className="project-picture" src={require("../images/projects/employee-manager.jpg")} alt="proj-pic"/>
            <h2>Employee Manager</h2>
            <a href="https://github.com/theoJA/employee-manager" target="_blank" rel="noopener noreferrer">
              <button className="projects-button">PROJECT INFO</button>
            </a>
            <p>An Android and iOS application developed with React Native and Firebase for creating, editing and deleting employees. Supports email
              authentication through Firebase.
            </p>
          </div>

          <div className="a-project">
            <img className="project-picture" src={require("../images/projects/weather-map-cropped.png")} alt="proj-pic"/>
            <h2>Maps and Weather Forecast</h2>
            <a href="https://github.com/theoJA/weather-map" target="_blank" rel="noopener noreferrer">
              <button className="projects-button">PROJECT INFO</button>
            </a>
            <p>A web app developed with React that displays the map and a 30-days forecast of any searched city. Can be useful for exploring the 
              map and weather of a city prior to travelling.
            </p>
          </div>
        </div>

        <div className="projects-shots-pair">
          <div className="a-project">
            <img className="project-picture" src={require("../images/projects/video-browser-cropped.png")} alt="proj-pic"/>
            <h2>Video Browser</h2>
            <a href="https://github.com/theoJA/video-browser" target="_blank" rel="noopener noreferrer">
              <button className="projects-button">PROJECT INFO</button>
            </a>
            <p>A web app developed with React that uses the YouTube API to fetch and show real YouTube videos on screen. Videos can be searched, 
              selected, and played in a similar way to YouTube.
            </p>
          </div>

          <div className="a-project">
            <img className="project-picture" src={require("../images/projects/rebellion-jpeg.jpg")} alt="proj-pic"/>
            <h2>Rebellion</h2>
            <a href="https://github.com/theoJA/Rebellion" target="_blank" rel="noopener noreferrer">
              <button className="projects-button">PROJECT INFO</button>
            </a>
            <p> A text-based, human VS computer chess variant written in Python. You can play either as the Nobles: 1 King and 2 Queens, or
            the Rebels: 2 Rooks, 2 Bishops and 2 Knights.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}