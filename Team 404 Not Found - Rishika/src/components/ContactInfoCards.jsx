import React from "react";
import "../styles/ContactInfoCards.css";

const ContactInfoCards = () => {
  return (
    <section className="contact-info-section">
      <h2 className="contact-info-heading">📍 Reach Out to Us</h2>

      <div className="contact-cards-grid">
        <div className="contact-card">
          <div className="icon email" />
          <h3>Email Address</h3>
          <p>info@inlighntech.com</p>
        </div>

        <div className="contact-card">
          <div className="icon call" />
          <h3>Call Us</h3>
          <p>+91-9368842663</p>
        </div>

        <div className="contact-card">
          <div className="icon location" />
          <h3>Visit Our Office</h3>
          <p>
            Corporate Office – Office No: VO-301, WeWork Prestige Central,
            <br />
            Ground Floor, 36 Infantry Rd, Shivaji Nagar, Bengaluru, Karnataka
            560001
          </p>
        </div>

        <div className="contact-card">
          <div className="icon pin" />
          <h3>Registered Office</h3>
          <p>
            Opposite Swasti Hospital, Anupam Nagar,
            <br />
            Badaun Road, Bareilly, Uttar Pradesh 243001
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
