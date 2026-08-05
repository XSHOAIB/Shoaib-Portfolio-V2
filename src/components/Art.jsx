import React from "react";
import "../styles/Art.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";

const Art = () => {
  const topArt = [
    { src: "/assets/art2/9.jpg", title: "9" },
    { src: "/assets/art2/10.jpg", title: "10" },
    { src: "/assets/art2/14.jpg", title: "14" },
    { src: "/assets/art2/4.jpg", title: "4" },
    { src: "/assets/art2/6.jpg", title: "6" },
    { src: "/assets/art2/15.jpg", title: "15" }
  ];

  return (
    <div id="art">
      <div className="section-header">
        <span className="section-title">/ art</span>
        <Link to="/art" className="explore-link">
          Explore collection
        </Link>
      </div>
      <FadeInSection delay="200ms">
        <div className="art-description">
          A collection of my digital and drawing artwork, exploring different frames and pixels.
        </div>
      </FadeInSection>
      <div className="art-container">
        <div className="art-grid">
          {topArt.map((art, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div className="art-card">
                <img src={art.src} alt={art.title} className="art-image" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Art;
