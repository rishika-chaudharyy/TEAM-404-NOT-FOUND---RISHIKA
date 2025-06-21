import React from "react";
import "../styles/AboutIntro.css";

const AboutIntro = () => {
  return (
    <div className="about-intro-section">
      {/* Glowing Background Circle */}
      <div className="big-floating-glow"></div>

      {/* Curvy path and balls */}
      <svg className="curvy-path" viewBox="0 0 800 200">
        <path
          id="motionPath"
          d="M 0 100 Q 200 0, 400 100 Q 600 200, 800 100"
          fill="transparent"
          stroke="none"
        />
        {[...Array(10)].map((_, i) => (
          <circle key={i} className="ball" r="6" fill="#00d9ff">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              begin={`${i * 0.8}s`} // Delay each ball slightly
            >
              <mpath href="#motionPath" />
            </animateMotion>
          </circle>
        ))}
      </svg>

      {/* LEFT – Roadmap Image */}
      <div className="about-intro-left">
        <img
          className="roadmap-img float-img"
          src="https://www.inlighntech.com/wp-content/uploads/2025/05/Green-Corporate-Financial-Roadmap-Presentation-3.png"
          alt="Internship Roadmap"
        />
      </div>

      {/* RIGHT – Text Content in Glass Box */}
      <div className="about-intro-right glass-box">
        <h1 className="intro-heading">
          We Provide Best Industry Services For You.
        </h1>
        <p className="intro-desc">
          At <strong>INLIGHN TECH</strong>, we believe that the future of
          education lies in bridging the gap between academic learning and
          industry needs.
          <br />
          <br />
          Founded with a passion for providing meaningful and immersive learning
          experiences, we offer internship programs that equip students and
          young professionals with practical skills in Cyber Security, Full
          Stack Development, Data Science, and Project Management.
        </p>
      </div>
    </div>
  );
};

export default AboutIntro;
