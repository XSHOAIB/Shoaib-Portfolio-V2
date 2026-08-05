import React from "react";
import "../styles/ArtGallery.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const ArtGallery = () => {
  const allArt = [
    { src: "/assets/art2/1.jpg", title: "1" },
    { src: "/assets/art2/2.jpg", title: "2" },
    { src: "/assets/art2/9.jpg", title: "3" },
    { src: "/assets/art2/4.jpg", title: "4" },
    { src: "/assets/art2/5.jpg", title: "5" },
    { src: "/assets/art2/6.jpg", title: "6" },
    { src: "/assets/art2/7.jpg", title: "7" },
    { src: "/assets/art2/8.jpg", title: "8" },
    { src: "/assets/art2/3.jpg", title: "9" },
    { src: "/assets/art2/10.jpg", title: "10" },
    { src: "/assets/art2/11.jpg", title: "11" },
    { src: "/assets/art2/15.jpg", title: "12" },
    { src: "/assets/art2/16.jpg", title: "13" },
    { src: "/assets/art2/14.jpg", title: "14" },
    { src: "/assets/art2/11.jpg", title: "15" },
    { src: "/assets/art2/12.jpg", title: "16" },
  ];

  return (
    <div className="art-gallery-page">
      <div className="section-header">
        <Link to="/" className="back-button">
          <ArrowBackRoundedIcon />
        </Link>
        <span className="section-title">/ art gallery</span>
      </div>
      <FadeInSection delay="200ms">
        <div className="gallery-description">
          A collection of my digital and traditional artwork, exploring different styles and mediums.
        </div>
      </FadeInSection>
      <div className="gallery-grid">
        {allArt.map((art, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="gallery-card">
              <img src={art.src} alt={art.title} className="gallery-image" />
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
