import React from "react";
import "../styles/VerifyCertificateContent.css";

const VerifyCertificateContent = () => {
  return (
    <div className="verify-container">
      {/* ❄️ Snowflake Container */}
      <div className="snowflakes" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, index) => (
          <div className="snowflake" key={index}>
            ❄️
          </div>
        ))}
      </div>

      {/* Main Content */}
      <h1 className="verify-heading">🎓 Verify Certificate</h1>
      <p className="verify-subtext">
        Enter your Intern ID (e.g., <strong>ITID000</strong>) in the field below
        to verify your internship certificate. You can find your Intern ID on
        your offer letter or experience letter.
      </p>

      <div className="verify-form">
        <input
          type="text"
          placeholder="Enter your Intern ID"
          className="verify-input"
        />
        <button className="verify-btn">Verify</button>
      </div>
    </div>
  );
};

export default VerifyCertificateContent;
