import React, { useState, useEffect } from "react";
import "../styles/Testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Full Stack Intern",
    message:
      "The mentorship and live projects at INLIGHN TECH transformed my understanding of full stack development. I felt like part of a real tech team!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "Data Science Intern",
    message:
      "Hands-on work with real datasets and consistent feedback from industry mentors made this internship a game-changer for me.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sanya Kapoor",
    role: "Cybersecurity Intern",
    message:
      "From threat analysis to network defense, the exposure I gained at INLIGHN TECH was unmatched. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, role, message, image } = testimonials[index];

  return (
    <section className="testimonial-section" id="testimonials">
      <h2 className="testimonial-heading" data-aos="fade-up">
        What Our Interns Have to Say
      </h2>

      <div className="testimonial-box" data-aos="zoom-in">
        <img src={image} alt={name} className="testimonial-img" />
        <div className="testimonial-content">
          <p className="testimonial-message">“{message}”</p>
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>

      <div className="testimonial-buttons">
        <button onClick={handlePrev} className="testimonial-btn">
          ← Prev
        </button>
        <button onClick={handleNext} className="testimonial-btn">
          Next →
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
