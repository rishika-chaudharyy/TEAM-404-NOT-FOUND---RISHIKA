import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/WhyChooseUs.css";

const features = [
  {
    title: "Industry-Aligned Curriculum",
    desc: "Our programs are designed in collaboration with top tech companies, ensuring you're learning skills that matter.",
    icon: "🧠",
  },
  {
    title: "Personalized Mentorship",
    desc: "Every intern receives dedicated mentorship and regular feedback to accelerate learning and confidence.",
    icon: "🤝",
  },
  {
    title: "Career Support & Certification",
    desc: "From resume polishing to mock interviews — we help you land your dream role, backed with professional certification.",
    icon: "🎓",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="why-section" id="why-us">
      <div className="why-header" data-aos="fade-down">
        <h2>
          Why Choose <span>INLIGHN TECH</span>?
        </h2>
        <p>Your transformation begins here.</p>
      </div>

      <div className="why-cards">
        {features.map((item, i) => (
          <div
            key={i}
            className="why-card"
            data-aos="zoom-in-up"
            data-aos-delay={i * 200}
          >
            <div className="icon-bubble">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="shine-effect" />
    </section>
  );
};

export default WhyChooseUs;
