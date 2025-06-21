import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/FeatureHighlights.css";
import bg4 from "../assets/bg4.jpg"; // Replace with your actual image

const FeatureHighlights = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="feature-section">
      <div className="feature-container">
        {/* Left Floating Image + Curvy Path */}
        <div className="feature-left" data-aos="fade-right">
          <div className="floating-img-wrapper">
            <img src={bg4} alt="Feature Visual" className="feature-img" />
          </div>
          <div className="curvy-path">
            <div className="ball ball1"></div>
            <div className="ball ball2"></div>
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="feature-right" data-aos="fade-left">
          <div className="feature-card card1">
            <div className="emoji">📚</div>
            <h3>Real-World Projects</h3>
            <p>
              Gain hands-on experience with real industry projects and build a
              portfolio that stands out.
            </p>
          </div>
          <div className="feature-card card2">
            <div className="emoji">👨‍🏫</div>
            <h3>Expert Mentorship</h3>
            <p>
              Learn from seasoned professionals who guide you through every step
              of your journey.
            </p>
          </div>
          <div className="feature-card card3">
            <div className="emoji">💻</div>
            <h3>Certified Programs</h3>
            <p>
              Complete the programs and get certified in your field to showcase
              your skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
