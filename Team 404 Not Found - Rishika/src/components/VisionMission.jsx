import React from "react";
import "../styles/VisionMission.css";

const VisionMission = () => {
  return (
    <div className="vision-mission-section">
      {/* LEFT TEXT CONTENT */}
      <div className="vision-left">
        <h2 className="section-heading">
          💡 Save Time and Effort with INLIGHN TECH
        </h2>

        <h3 className="subheading">🚀 Our Vision</h3>
        <p className="section-desc">
          To be a leading EdTech platform that bridges the gap between academic
          knowledge and industry demands, shaping the next generation of tech
          innovators and leaders through hands-on, practical learning.
        </p>

        <h3 className="subheading">🎯 Our Mission</h3>
        <p className="section-desc">
          To empower students and young professionals by providing immersive,
          real-world learning experiences through tailored internship programs.
          We aim to equip our participants with the practical skills and
          confidence they need to succeed in the fast-evolving tech industry.
        </p>
      </div>

      {/* RIGHT CIRCLE ANIMATION */}
      <div className="vision-right">
        <div className="circle-container">
          <img src="./vbg.jpg" alt="Flying visual" className="flying-img" />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
