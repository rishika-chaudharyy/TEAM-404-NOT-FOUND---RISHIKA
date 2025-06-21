import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container" data-aos="fade-up">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Have questions, feedback or just want to say hello? We'd love to hear
          from you!
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
