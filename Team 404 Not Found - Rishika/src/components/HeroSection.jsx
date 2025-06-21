import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "../styles/HeroSection.css";
import leftImage from "../assets/left.jpg";
import rightImage from "../assets/right.jpg";

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ initialize navigator

  const handleExploreClick = () => {
    navigate("/programs"); // ✅ navigate to /programs on click
  };

  return (
    <div className="hero-container">
      <div className="hero-images">
        <div className="image-left">
          <img src={leftImage} alt="Left" />
          <div className="hero-overlay floating">
            <h1>
              Transform Your Future with <span>INLIGHN TECH</span>
            </h1>
            <p>
              Step into the world of innovation through our immersive internship
              programs.
              <br />
              Specializations in Cyber Security, Full Stack Development, Data
              Science, Data Analytics & more.
              <br />
              <strong>Learn today. Lead tomorrow.</strong>
            </p>
            <button className="explore-btn" onClick={handleExploreClick}>
              Explore Internships
            </button>
          </div>
        </div>

        <div className="image-right">
          <img src={rightImage} alt="Right" />

          <div className="curvy-line-overlay">
            <svg
              width="100%"
              height="100"
              viewBox="0 0 1000 100"
              xmlns="http://www.w3.org/2000/svg"
              className="curvy-svg"
            >
              <path
                id="curvePath1"
                d="M0,50 C150,0 350,100 500,50 C650,0 850,100 1000,50"
                fill="transparent"
                stroke="#ccc"
                strokeWidth="4"
              />
              <circle r="8" fill="#ff5e57">
                <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#curvePath1" />
                </animateMotion>
              </circle>
              <circle r="8" fill="#00c2ff">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  begin="3s"
                  rotate="auto"
                >
                  <mpath href="#curvePath1" />
                </animateMotion>
              </circle>
            </svg>
          </div>

          <div className="curvy-line-overlay second-line">
            <svg
              width="100%"
              height="100"
              viewBox="0 0 1000 100"
              xmlns="http://www.w3.org/2000/svg"
              className="curvy-svg"
            >
              <path
                id="curvePath2"
                d="M0,50 C200,100 300,0 500,50 C700,100 800,0 1000,50"
                fill="transparent"
                stroke="#ccc"
                strokeWidth="4"
              />
              <circle r="8" fill="#42f563">
                <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#curvePath2" />
                </animateMotion>
              </circle>
              <circle r="8" fill="#f5da42">
                <animateMotion
                  dur="7s"
                  repeatCount="indefinite"
                  begin="3.5s"
                  rotate="auto"
                >
                  <mpath href="#curvePath2" />
                </animateMotion>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
