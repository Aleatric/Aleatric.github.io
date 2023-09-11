import React, { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import './App.css';
import 'lord-icon-element';
import instagramIcon from './assets/icons/instagram.png';
import linkedinIcon from './assets/icons/linkedIn.png';
import githubIcon from './assets/icons/github.png';
import mainPhoto from './assets/photos/me.jpeg';
import jokeGenerator from './assets/photos/joke-generator.png';
import markdownPreviewer from './assets/photos/markdown-previewer.png';
import fileMetadata from './assets/photos/file-metadata.png';
import pomodoroClock from './assets/photos/pomodoro-clock.png';
import FloatingBalls from "./FloatingBalls.js";

function MyComponent() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isRetina = useMediaQuery({ minResolution: '2dppx' });

  return (
    <div>
      {isDesktopOrLaptop && <>Desktop or laptop</>}
      {isBigScreen && <>Big screen</>}
      {isTabletOrMobile && <>Tablet or mobile</>}
      {isPortrait && <>Portrait mode</>}
      {isRetina && <>Retina screen</>}
    </div>
  );
}

function NavBar() {

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224 });

  return (
    <nav className={isTabletOrMobile ? 'mobile-nav' : 'desktop-nav'}>
      <div className="name-icons">
        <div className="socials">
          {[
            { icon: instagramIcon, url: "https://www.instagram.com/bradley_cronan/", alt: "Instagram" },
            { icon: linkedinIcon, url: "https://www.linkedin.com/in/bradley-cronan/", alt: "Linkedin" },
            { icon: githubIcon, url: "https://github.com/Aleatric", alt: "Github" }
          ].map((social, index) => (
            <div key={index} className="social-icon-container">
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.icon}
                  alt={social.alt}
                  loading="lazy"
                  className="socicon"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <ul className="navigation">
        {[
            { name: "projects", url: "https://cdn.lordicon.com/ndfdylqe.json", trigger: "morph" }, 
            { name: "about", url: "https://cdn.lordicon.com/amxnacxd.json", trigger: "hover" }, 
            { name: "contact", url: "https://cdn.lordicon.com/mjmrmyzg.json", trigger: "hover" }
        ].map((navItem, index) => (
          <li key={index}>
            <a href={`#${navItem.name}`} className="nav-link">
              <div className="icon-container">
                <lord-icon
                  src={navItem.url}
                  trigger={navItem.trigger}
                  colors="primary:#4be1ec,secondary:#cb5eee"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
                <span className="icon-text">{navItem.name}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}

function Hero() {
  const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });

  return (
    <section className={`hero ${isTabletOrMobile ? 'mobile' : ''} ${isPortrait ? 'portrait' : ''}`}>
      <FloatingBalls />
        <div className="image-container">
            <img src={mainPhoto} alt="bradley-cronan" loading="lazy" className="hero-img" />
        </div>
        <div className="bio animate__animated animate__shakeX">
            <h2 className="bio-text">
                <span>Hello, I'm Bradley</span>
                <br />
                <span>Full Stack Developer</span>
            </h2>
            <p className="animated-text">junior full-stack developer</p>
        </div>
    </section>
  );
}

function Projects(){
  const projectData = [
    {
      image: jokeGenerator, // assuming jokeGenerator is a valid import
      title: "Random Joke Generator",
      details: "Simple web app utilising Joke API. HTML/CSS/JS",
      liveLink: "https://aleatric.github.io/randomJokeGenerator/",
      githubLink: "https://github.com/Aleatric/randomJokeGenerator",
    },
    {
      image: markdownPreviewer,
      title: "Markdown Previewer",
      details: "Preview Markdown Syntax in real time. React, entirely inline CSS",
      liveLink: "https://aleatric.github.io/markdownPreviewerUpdate/",
      githubLink: "https://github.com/Aleatric/markdownPreviewerUpdate",
    },
    {
      image: fileMetadata,
      title: "File Metadata",
      details: "Return file uploads metadata in JSON format. Express.js/Node.js",
      liveLink: "https://boilerplate-project-filemetadata.aleatric.repl.co/",
      githubLink: "https://github.com/Aleatric/file-metadata",
    },
    {
      image: pomodoroClock,
      title: "Pomodoro Clock",
      details: "Incorporates a unique twist on timer. React/Bootstrap/CSS animation",
      liveLink: "https://aleatric.github.io/pomodoroClock/",
      githubLink: "https://github.com/Aleatric/pomodoroClock",
    }
  ];
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-container project-card">
            <img src={project.image} alt={`${project.title.toLowerCase().replace(" ", "-")}`} loading="lazy" className="project-pic" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-details">{project.details}</p>
            <div className="project-buttons">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link button">Live Preview</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link button">Check on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About(){
  return (
    <section className="more-about" id="about">
      <FloatingBalls />
      <div id="second-balls"></div>
      <h2 className="about-me">about me</h2>
      <p>
          Originally hailing from Canberra, I followed my passion for music to Sydney, embarking on an international music career,
          from 2018 to 2022. I earned some significant touring credits, and played legendary festivals.
          <br />
          <br />
          In 2022, I moved to Manchester, UK, where i stumbled upon the world of coding. What started as a discovery soon became a passion.
          <br />
          <br />
          I began my coding journey by exploring various learning materials, but it was freeCodeCamp that truly set me on the path to growth.
          I completed their courses with a focus on the MERN stack, earning multiple certificates along the way.
          <br />
          These projects equipped me with the skills and knowledge needed to excel in web development.
          <br />
          <br />
          Having spent years working and studying in the world of music, I've learned that the journey never truly ends.
          <br />
          Now, I'm excited to embrace all that the world of development has to offer.
      </p>

      <div className="skills">
          <b>Languages</b>
          <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
          </ul>
          <br />
          <b>Front-End Frameworks/Libraries</b>
          <ul>
              <li>React.js</li>
              <li>Bootstrap</li>
          </ul>
          <br />
          <b>Data Visualization</b>
          <ul>
              <li>D3.js</li>
          </ul>
          <br />
          <b>Back-End Development</b>
          <ul>
              <li>Node.js</li>
              <li>Express.js</li>
          </ul>
          <br />
          <b>Databases</b>
          <ul>
              <li>MongoDB</li>
              <li>PostgreSQL(SQL)</li>
          </ul>
          <br />
          <b>Version Control & Collaboration</b>
          <ul>
              <li>Git & Github</li>
          </ul>
          <br />
          <b>Package Managers</b>
          <ul>
              <li>npm</li>
          </ul>
          <br />
          <b>Other Tools & Skills</b>
          <ul>
              <li>SASS</li>
              <li>Redux(React)</li>
              <li>Mongoose(MongoDB)</li>
          </ul>
      </div>
    </section>
  );
}

function Contact(){
  return (
    <div id="contact" className="contact-me">
    <h2>lets connect</h2>
        <div id="contact-icon">
            <a href="mailto:bradley.cronan@live.com.au" target="_blank" class="nav-link">
                <div className="contact-icon-container">
                    <lord-icon src="https://cdn.lordicon.com/sdhhsgeg.json" trigger="hover"
                        colors="primary:#4be1ec,secondary:#cb5eee" style={{width:"50px", height:"50px"}}>
                    </lord-icon>
                    <span className="icon-text">contact</span>
                </div>
            </a>
        </div>
      </div>
  )
}

function Wizard() {
  return (
    <div id="whole-wizard">
      <div className="scene">
        <div className="objects">
          <div className="square"></div>
          <div className="circle"></div>
          <div className="triangle"></div>
        </div>
        <div className="wizard">
          <div className="body"></div>
          <div className="right-arm">
            <div className="right-hand"></div>
          </div>
          <div className="left-arm">
            <div className="left-hand"></div>
          </div>
          <div className="head">
            <div className="beard"></div>
            <div className="face">
              <div className="adds"></div>
            </div>
            <div className="hat">
              <div className="hat-of-the-hat"></div>
            </div>
            <div className="ball first-ball"></div>
            <div className="ball second-ball"></div>
            <div className="ball third-ball"></div>
          </div>
          <div className="wand">
            <div className="wand-tip"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Wizard />
    </>
  );
}

export default App;