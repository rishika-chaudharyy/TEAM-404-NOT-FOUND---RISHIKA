import React from "react";
import "../styles/ContactCards.css";

const ContactCards = () => {
  return (
    <div className="contact-cards-section">
      <h2 className="contact-heading">📬 Reach Out to Us</h2>
      <div className="contact-cards-grid">
        <div className="contact-card">
          <div className="card-icon email">📧</div>
          <h3>Email Address</h3>
          <p>info@inlighntech.com</p>
        </div>

        <div className="contact-card">
          <div className="card-icon phone">📞</div>
          <h3>Call Us</h3>
          <p>+91-9368842663</p>
        </div>

        <div className="contact-card">
          <div className="card-icon office">📍</div>
          <h3>Registered Office</h3>
          <p>
            Opposite Swasti Hospital, Anupam Nagar,
            <br />
            Badaun Road, Bareilly, Uttar Pradesh 243001
          </p>
        </div>

        <div className="contact-card">
          <div className="card-icon visit">🏢</div>
          <h3>Visit Our Office</h3>
          <p>
            Office No: VO-301, WeWork Prestige Central,
            <br />
            Ground Floor, 36, Infantry Rd, Tasker Town,
            <br />
            Shivaji Nagar, Bengaluru, Karnataka 560001
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
