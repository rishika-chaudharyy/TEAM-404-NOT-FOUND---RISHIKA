import React from "react";
import "../styles/Footer.css";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* About */}
        <div className="footer-about">
          <img src="/logo2.png" alt="InLighn Tech" className="footer-logo" />
          <p>
            At <strong>INLIGHN TECH</strong>, we believe that the future of
            education lies in bridging the gap between academic learning and
            industry needs.
          </p>
        </div>

        {/* Menu */}
        <div className="footer-links">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Programs</li>
            <li>Contact Us</li>
            <li>Login To Portal</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Term & Conditions</li>
            <li>Disclaimer</li>
            <li>FAQ's</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
          </div>
          <p>
            <FaMapMarkerAlt /> Corporate Office- Office No: VO-301, WeWork
            Prestige Central, Ground Floor,
            <br />
            36, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka
            560001
          </p>
          <p>
            <FaPhoneAlt /> +91 9368842663
          </p>
          <p>
            <FaEnvelope /> info@inlighntech.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
