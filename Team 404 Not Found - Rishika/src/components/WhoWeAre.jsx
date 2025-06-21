import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/WhoWeAre.css";
import back1 from "../assets/back1.jpg";
import back2 from "../assets/back2.jpg";
import back3 from "../assets/back3.jpg";

const boxes = [
  {
    title: "Our Mission",
    emoji: "🎯",
    content:
      "To empower students and professionals by providing hands-on internships that bridge the gap between academics and industry requirements.",
    bgImage: back1,
  },
  {
    title: "Our Vision",
    emoji: "👁️",
    content:
      "We envision a world where every learner gains practical experience and becomes future-ready through transformative learning opportunities.",
    bgImage: back2,
  },
  {
    title: "About Us",
    emoji: "🏢",
    content:
      "INLIGHN TECH is an ed-tech platform offering immersive internship programs in Full Stack Development, Data Science, Cybersecurity and more.",
    bgImage: back3,
  },
];

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="who-we-are-section" id="who-we-are">
      <h2 className="who-title" data-aos="fade-up">
        Who We Are
      </h2>
      <div className="who-container">
        {boxes.map((box, index) => (
          <div
            className="who-box"
            key={index}
            style={{ backgroundImage: `url(${box.bgImage})` }}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="who-content">
              <div className="emoji">{box.emoji}</div>
              <h3>{box.title}</h3>
              <p>{box.content}</p>
            </div>
            <div className="bg-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
