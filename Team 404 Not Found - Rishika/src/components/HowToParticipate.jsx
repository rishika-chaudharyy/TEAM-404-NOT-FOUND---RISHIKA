import React from "react";
import "../styles/HowToParticipate.css";

const steps = [
  {
    title: "If you’re in your last month of internship, you’re eligible!",
    subtitle:
      "You’ll receive a Google Form to apply for this prestigious title!",
    position: "left",
    color: "#47D5FF",
  },
  {
    title: "Submit Projects",
    subtitle: "Submit your best projects related to your domain!",
    position: "right",
    color: "#7D3CFF",
  },
  {
    title: "Skill Assessment Test",
    subtitle: "Take a skill assessment test to prove your expertise!",
    position: "left",
    color: "#FF8A65",
  },
  {
    title: "Final Round",
    subtitle: "Ace the interview round (if shortlisted)!",
    position: "right",
    color: "#3DF2E4",
  },
];

const HowToParticipate = () => {
  return (
    <div className="participation-section">
      <h2 className="participation-heading">📢 How to Participate ?</h2>
      <div className="timeline-container">
        {steps.map((step, index) => (
          <div className={`timeline-item ${step.position}`} key={index}>
            <div className="content">
              <h3>{step.title}</h3>
              <p>{step.subtitle}</p>
            </div>
            <div className="circle-line">
              <div
                className="circle"
                style={{ backgroundColor: step.color }}
              ></div>
              {index < steps.length - 1 && <div className="line"></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToParticipate;
