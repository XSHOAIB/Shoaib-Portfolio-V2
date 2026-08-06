import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I'm currently the <b>Digital Head</b> at
      <a href="https://www.linkedin.com/company/tijarat-creative"> Tijarat Creative</a>, where I help 
      brands build business models that make clients money. Parallelly, I work 
      across both {" "}<a href=""> Tech</a> and{" "}<a href=""> Business.</a>
    </p>
  );
  const two = (
    <p>
      In my free time, I’m nerdy about tech gadgets, ride my classic 350, and
      chill with firends. Oh, I make content too.
    </p>
  );

  const techStack = [
    "Python",
    "AWS",
    "MySQL",
    "AI Tools",
    "Cloud",
    "Automation",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="MD Shoaib Ahmed" src={"/assets/me4.jpeg"} />
            <img
                alt="MD Shoaib Ahmed"
                src={`${import.meta.env.BASE_URL}assets/me4.jpeg`}
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
