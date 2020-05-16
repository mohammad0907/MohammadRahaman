import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Nav.js'
import About from './components/About.js'
import Experince from "./components/Experience.js"
import Education from './components/Education.js'
import Projects from "./components/Projects.js"
import Skills from "./components/Skills.js"
import Contact from "./components/Contact"
import backg from './images/background.png'
import { Typography } from '@material-ui/core'
import ArrowDown from './images/multimedia-option.png'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import Button from '@material-ui/core/Button';
import Footer from "./components/footer"



function App() {
  const [background, setBackground] = useState(
    {
      width: "100%",
      height: window.innerHeight,
      backgroundImage: `url(${backg})`,
      backgroundSize: 'cover',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",


    })

  useEffect(() => {
    const resizeListener = () => {
      console.log("im in here")
      setBackground({ ...background, height: window.innerHeight })
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])
  configureAnchors({ offset: -60, scrollDuration: 400 })

  return (
    <div className="App">
      <NavBar />
      <ScrollableAnchor id={'home'}>
        <div style={background}>
          <div style={{ width: "100%", height: "90%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h1 className="nameText">
              Mohammad Rahman
           </h1>
            <h2 className="titleText">
              Software Engineer
           </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "10%", }}>
            <a href="#about" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><img src={ArrowDown} alt="arrowDown" style={{ width: "20%" }} /></a>
          </div>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'about'}>
        <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "40px" }}>
          <h3>About Me</h3>
          <About />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'experience'}>
        <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "whitesmoke", padding: "40px" }}>
          <h3>Experience</h3>
          <Experince />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'education'}>
        <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white", padding: "40px" }}>
          <h3>Education</h3>
          <Education />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'projects'}>
        <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "whitesmoke", padding: "40px" }}>
          <h3>Projects</h3>
          <Projects />
          <a href="https://github.com/mohammad0907">  <Button size="small" color="primary" variant="outlined">
            More projects can be Found in my Github
           </Button> </a>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'skills'}>
        <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white", padding: "40px" }}>
          <h3>Skills</h3>
          <Skills />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'contact'}>
        <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "whitesmoke", padding: "40px" }}>
          <h3>Contact</h3>
          <Contact />
        </div>
      </ScrollableAnchor>

      <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "#343A40", padding: "20px" }}>
        <Footer />
      </div>


    </div>
  );
}

export default App;
