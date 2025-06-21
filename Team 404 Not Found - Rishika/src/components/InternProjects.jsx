import React from "react";
import "../styles/InternProjects.css";

const InternProjects = () => {
  return (
    <div className="intern-projects-section">
      <h2 className="intern-heading">Our Interns’ Projects</h2>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {/* 👇 Replace src with actual image URLs you have */}
          <div className="carousel-card">
            <img
              src="https://img.freepik.com/free-vector/project-management-business-multitasking-concept-flat-line-art-icons_126523-2192.jpg?uid=R182642439&ga=GA1.1.1215698290.1736679979&semt=ais_hybrid&w=740"
              alt="Project 1"
            />
          </div>
          <div className="carousel-card">
            <img
              src="https://img.freepik.com/free-vector/business-planning-sketch-concept_1284-37242.jpg?uid=R182642439&ga=GA1.1.1215698290.1736679979&semt=ais_hybrid&w=740"
              alt="Project 2"
            />
          </div>
          <div className="carousel-card">
            <img
              src="https://img.freepik.com/free-photo/architects-designers-working-office_53876-31576.jpg?uid=R182642439&ga=GA1.1.1215698290.1736679979&semt=ais_hybrid&w=740"
              alt="Project 3"
            />
          </div>
        </div>
      </div>

      <p className="rewarding-text">
        Because here at <strong>Inlighn Tech</strong>, we believe in
        <span className="highlight"> REWARDING EXCELLENCE! 💡✨</span>
      </p>
    </div>
  );
};

export default InternProjects;
