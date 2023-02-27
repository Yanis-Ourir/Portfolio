import logo from './logo.svg';
import './App.css';
import Profil from './composants/profil/profil'
import Carrousel from './composants/projets/projets'
import Skills from './composants/skill'
import ContactMe from './composants/contact/contact'
import Footer from './composants/footer/footer'
import Portfolio from './composants/portfolio/portfolio'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'

function App() {

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }




  return (
    <div className="App">



      <header className="App-header">
        <nav className="navbar" id="navbar" ref={navRef}>
          <img src="image-portfolio/logoYanis.png" alt="logo" className="logo" />
          <ul className="nav-ul">
            <li><a href="#profil-component" className="nav-link" onClick={showNavbar}>Mon profil</a></li>
            <li><a href="#skills" className="nav-link" onClick={showNavbar}>Mes compétences</a></li>
            <li><a href="#project" className="nav-link" onClick={showNavbar}>Mes projets</a></li>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </ul>
        </nav>
        <div className="hidden-nav">
          <img src="image-portfolio/logoYanis.png" alt="logo" className="logo-responsive" />
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </header>

      <div className="profil-component" id="profil-component">
        <Profil />

      </div>

      <div id="skills">
        <Skills />
      </div>



      <div id="project">
        <h1 className="title">
          <span className="letter-jello">P</span>
          <span className="letter-jello">o</span>
          <span className="letter-jello">r</span>
          <span className="letter-jello">t</span>
          <span className="letter-jello">f</span>
          <span className="letter-jello">o</span>
          <span className="letter-jello">l</span>
          <span className="letter-jello">i</span>
          <span className="letter-jello">o</span>
        </h1>
        <Portfolio />
      </div>

      <div className="contact-component">
        <ContactMe />

      </div>

      <Footer />
    </div>

  );
}

export default App;
// dev web junior sérieux et organisé