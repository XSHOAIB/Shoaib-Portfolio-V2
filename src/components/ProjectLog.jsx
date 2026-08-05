import React from "react";
import "../styles/ArtGallery.css";
import "../styles/Projects.css";
import "../styles/ProjectLog.css";
import FadeInSection from "./FadeInSection";
import { Link, useParams } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

const projectLogs = {
  "pc": {
    title: "Spider-Bot: BrandNewDay",
    date: "May 2024",
    description: "A Robot which can move x,y,z-axix, with creating a cool robotic sound with its 12 servo motors. Oh, it also dances like a spider.",
    image: "/assets/hardware/SpiderBotHH/SpiderBotH.png",
    logs: [
      {
        title: "0. where it started",
        content: [
          { type: "text", value: "I know piked orange color is not a good choice, but trust me it looks much cooler physically. I choose it because it was the only good 3D printed model availabe on amazon, with accurate dimensions." },
          { type: "text", value: "It all started while I was persuing my batchlors degree, in 4th semester cisco lab. Me and team got to decide a hardware project, so we landed on Spider-bot. It was fun to arrange the right elemnts, and find the best frame of code which can be modified for further advancements.  " },
          { type: "image", value: "/assets/hardware/SpiderBotHH/5.png" }
        ]
      },
      {
        title: "1. picking parts",
        content: [
          { type: "text", value: "First of all, in this type of hardware projects there is no warranty or guarentee for any product. Except, if you buy a genuine module from an authorised dealer on any website. Yes, it full fills all the requirements but it is upto 5x costlier." },
          { type: "text", value: "Check whether the module and model have required ports and dimensions. Because if you buy it ones, it takes time to be replace, which can delay in your project deadline." },
          { type: "list", title: "Complete list of my parts:", items: [
            "CPU: Arduino Uno,Wires",
            "Bluethooth: HC-05 bT",
            "Battery: 3.7v Li-ion Batteries",
            "Motor: 12 Medium 3 pin Servo Motors",
            "Regulator: LM 2596",
            "Modules: 12 Channel boaed",
            "Etc: Jumper Wires M/F, Glue, Tie",
          ]}
        ]
      },
      {
        title: "2. tragedy",
        content: [
          { type: "text", value: "I watched literally a lot of tutorials, read and tried multiple functions, burnt my fingers, havent slept in nights, tried multiple itterations so that it work flawlessly. And after so much of hardwork, We finally build it." },
          { type: "text", value: "On submission day, We checked it before viva and it was working all fine. While exmination, we ran it and it grabbed everones attention by the multiple motor sound it was miking while dancing." },         
          { type: "text", value: "We got A+, Yayy!! and soon the next moment we we displaying it, the whole CPU module and batteries burned, Boom!!. this happened because we used cheep product with a extended low budget we had." },          
          { type: "tip", value: "Check the module reviews before purchasing, and prefer getting a product with warranty" },

        ]
      },
      {
        title: "What Now!",
        content: [
          { type: "text", value: "I loved the time and efforts we spent on the project. The best part was the sound that it made, and how quiet and deliberate it looks. After getting an A+, Now! it's resting in a box in cupboard." },
          { type: "text", value: "It costed around 74$ (7000inr)" }
        ]
      }
    ]
  },
};

const ProjectLog = () => {
  const { projectId } = useParams();

  const renderContent = (content) => {
    return content.map((item, i) => {
      switch (item.type) {
        case "text":
          return <p key={i} className="article-text">{item.value}</p>;
        case "image":
          return (
            <div key={i} className="article-image-container">
              <img src={item.value} alt="Project detail" className="article-image" />
            </div>
          );
        case "list":
          return (
            <div key={i} className="article-list-container">
              {item.title && <div className="article-list-title">{item.title}</div>}
              <ul className="article-list">
                {item.items.map((li, j) => <li key={j}>{li}</li>)}
              </ul>
            </div>
          );
        case "tip":
          return <div key={i} className="article-tip">{item.value}</div>;
        case "code":
          return (
            <div key={i} className="article-code-container">
              <pre className="article-code">
                <code>{item.value}</code>
              </pre>
            </div>
          );
        case "diagram":
          return (
            <div key={i} className="article-diagram-container">
              <pre className="article-diagram">{item.value}</pre>
            </div>
          );
        default:
          return null;
      }
    });
  };

  if (!projectId || !projectLogs[projectId]) {
    return (
      <div className="project-log-page">
        <div className="section-header">
          <Link to="/" className="back-button">
            <ArrowBackRoundedIcon />
          </Link>
          <span className="section-title">/ project not found</span>
        </div>
      </div>
    );
  }

  const project = projectLogs[projectId];

  return (
    <div className="project-log-page">
      <div className="section-header">
        <Link to="/" className="back-button">
          <ArrowBackRoundedIcon />
        </Link>
        <span className="section-title">/ project log</span>
      </div>
      
      <FadeInSection delay="200ms">
        <div className="project-log-header">
          <h1 className="project-log-title">{project.title}</h1>
          
          {project.image && (
            <div className="project-log-hero-wrapper" style={project.heroStyle || {}}>
              <div className="project-log-hero-container">
                <img src={project.image} alt={project.title} className="project-log-hero" />
              </div>
              {project.imageCaption && (
                <p className="project-log-hero-caption">{project.imageCaption}</p>
              )}
            </div>
          )}

          <p className="project-log-description">{project.description}</p>
          {project.badge && (
            <a
              href={project.badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-badge"
            >
              {project.badge.text}
            </a>
          )}
          {project.date && <div className="project-log-date">{project.date}</div>}
        </div>
      </FadeInSection>

      {project.reelsLink && (
        <FadeInSection delay="300ms">
          <div className="reels-container">
            <a 
              href={project.reelsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-reels-link"
            >
              <InstagramIcon className="reels-icon" />
              <span className="reels-text">Watch the build process on Instagram</span>
            </a>
          </div>
        </FadeInSection>
      )}

      <div className="project-log-container">
        {project.logs.map((log, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <section className="article-section">
              <div className="article-header">
                <h2 className="article-title">{log.title}</h2>
              </div>
              <div className="article-content">
                {renderContent(log.content)}
              </div>
            </section>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default ProjectLog;
