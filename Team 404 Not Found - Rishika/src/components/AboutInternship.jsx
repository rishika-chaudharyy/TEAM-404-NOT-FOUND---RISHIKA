import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../styles/AboutInternship.css";
import bg3 from "../assets/bg3.jpg";
import bg from "../assets/bg.jpg";

const AboutInternship = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="about-internship-section" id="about">
      <div className="about-container" data-aos="fade-left">
        <div
          className="circle-visual"
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="floating-image-wrapper">
            <img alt="Internship Visual" src={bg} className="floating-img" />
          </div>
        </div>

        <div className="about-content">
          <h2 className="about-title">
            Empowering Your Career Through Experience
          </h2>
          <p className="about-desc">
            At <strong>INLIGHN TECH</strong>, we believe education should go
            beyond textbooks. Our internships are crafted to equip you with
            in-demand skills through real-world projects in{" "}
            <strong>Full Stack Development</strong>,{" "}
            <strong>Data Science</strong>, and
            <strong> Project Management</strong>. Learn by doing, grow with
            experts, and step confidently into your future.
          </p>
          <Link to="/about" className="know-more-btn">
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutInternship;
