import React from "react";
import "../styles/WhatsSpecialContent.css";
import { FaPlayCircle } from "react-icons/fa";

const WhatsSpecialContent = () => {
  return (
    <div className="special-wrapper">
      {/* Curvy Path & Balls */}
      <img src="./bg6.jpg" alt="Curvy Path" className="curvy-path" />

      <div className="flowing-balls">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="ball" />
        ))}
      </div>

      {/* Moving Image with Loop Animation */}
      <div className="moving-image-container">
        <img
          src="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?uid=R182642439&ga=GA1.1.1215698290.1736679979&semt=ais_hybrid&w=740"
          alt="Video Content"
          className="moving-image"
        />
        <FaPlayCircle className="video-icon-on-image" />
      </div>

      {/* Floating Video Icons on Path */}
      <div className="floating-icons">
        <FaPlayCircle className="path-video-icon icon1" />
        <FaPlayCircle className="path-video-icon icon2" />
        <FaPlayCircle className="path-video-icon icon3" />
      </div>

      {/* Text Overlay */}
      <h1 className="video-text">🎥 Knowledge through videos</h1>
    </div>
  );
};

export default WhatsSpecialContent;
