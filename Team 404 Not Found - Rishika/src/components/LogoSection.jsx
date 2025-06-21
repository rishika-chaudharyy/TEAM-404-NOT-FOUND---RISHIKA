import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/LogoSection.css";

const LogosSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="logos-section" data-aos="fade-left">
      <div className="logos-container">
        <img
          src="https://www.inlighntech.com/wp-content/uploads/2025/04/mca-1.webp"
          alt="Logo 1"
          className="logo-img"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <img
          src="https://www.inlighntech.com/wp-content/uploads/2025/04/iso-1.png"
          alt="Logo 2"
          className="logo-img"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <img
          src="https://www.inlighntech.com/wp-content/uploads/2025/04/startup-india-logo-gradient-circle.png"
          alt="Logo 3"
          className="logo-img"
          data-aos="fade-up"
          data-aos-delay="500"
        />
      </div>
    </section>
  );
};

export default LogosSection;
