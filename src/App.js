import React, { Component } from 'react';
import { Navbar, About, Projects, Skills, Contact } from "./components";
import './styles/App.css';

class App extends Component {

  render() {
    return (
      <div id="banner-section" className="wrapper">
        <Navbar/>

        <span className="anchor" id="about-section"></span>
        <div  className="page-content">
          <About/>
        </div>

        <div  className="page-content-grey">
          <Projects/>
        </div>

        <span className="anchor" id="skills-section"></span>
        <div  className="page-content">
          <Skills/>
        </div>

        <span className="anchor" id="contact-section"></span>
        <div  className="page-content-blue">
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;
