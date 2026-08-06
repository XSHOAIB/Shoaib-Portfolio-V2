import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Carousel } from "react-bootstrap";
import ExternalLinks from "./ExternalLinks";


const spotlightProjects = {
  "Tijarat Creative": {
    title: "Tijarat Creative",
    desc: "A multi-service platform, where we deal with branding, product placement, business modelling and strategic marketing",
    Place: "Hyderabad City",
    link: "https://www.linkedin.com/company/tijarat-creative",
    image: `${import.meta.env.BASE_URL}assets/TijaratC.png`,
    // image: "/assets/TijaratC.png",
  },
  "CiviX": {
    title: "CiviX",
    desc: "An AI powered civic isuues solving app. Social feed type format for connectivity and relateability. Includes citizen and authority both dashboards",
    techStack: "Dart, Html, C++, JavaS, CMake, Swift",
    link: "https://github.com/XSHOAIB/CiviX",
    image: "/assets/civixp.png",
  },
  "Hang-Man": {
    title: "Hang-Man",
    desc: "A word guessing game, every word starts with 'a' and you gotta guess the rest letters. if you got it wrong, the man will be hung",
    techStack: "Python",
    link: "https://github.com/XSHOAIB/HangMan-Game",
    image: "/assets/HangMan.png",
  },
  "Spide-Bot": {
    title: "Spider-Bot",
    desc: "A Robot which can move x,y,z-axix, with creating a cool robotic sound with its 12 servo motors. Oh, it also dances like a spider..",
    techStack: "Arduino IDE",
    link: "https://github.com/XSHOAIB/Spider-Bot",
    image: "/assets/3.png",
  },
  //  Portfolio: {
  //   title: "portfolio.js",
  //   desc: "A small JS library that helps with clear and succinct data presentation.",
  //   techStack: "NODE.JS (EXPRESS.JS)",
  //   link: "https://github.com/gazijarin/Portfolio.js",
  //   open: "https://afternoon-ocean-92382.herokuapp.com/",
  //   image: "/assets/portfolio.png",
  // },
};

const projects = {
  "Shoaib Portfolio v2": {
    desc: "This is the second iteration of my portfolio, designed and rebuilt from the ground up using React and Vite. The code is available on GitHub.",
    techStack: "React.js, Vite, Inspired",
    link: "https://github.com/XSHOAIB/Shoaib-Portfolio-V2",
    open: "", //website link
  },
  "Jug Game": {
    desc: "Basically you have two jugs one with 4 litre capacity and another with 3 litre capacity. You can either fill the whole jug with water or you can transfer one jug water to another.",
    techStack: "Python",
    link: "https://github.com/XSHOAIB/Jug-Game-",
  },
  "Portfolio v1": {
    desc: "This was my first ever portfolio, parallely full static website.",
    techStack: "CSS, Html",
    link: "https://github.com/XSHOAIB/Shoaib-Portfolio",
  },
};

const Projects = () => {
  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title">/ software</span>
        <a
          href="https://github.com/XSHOAIB"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>
      <div className="spotlight-projects-desktop">
        <Carousel interval={null}>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <Carousel.Caption>
                <h3>{spotlightProjects[key]["title"]}</h3>
                <div>
                  {spotlightProjects[key]["desc"]}
                  <div className="techStack">
                    {spotlightProjects[key]["techStack"]}
                  </div>
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="spotlight-projects-mobile">
        {Object.keys(spotlightProjects).map((key, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </div>

              <a
                href={
                  spotlightProjects[key]["open"] ||
                  spotlightProjects[key]["link"]
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="card-title">
                  {spotlightProjects[key]["title"]}
                </div>
                <div className="spotlight-mobile-image">
                  <img src={spotlightProjects[key]["image"]} alt={key} />
                </div>
              </a>
              <div className="card-desc">{spotlightProjects[key]["desc"]}</div>
              <div className="card-tech">{spotlightProjects[key]["techStack"]}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  />
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
