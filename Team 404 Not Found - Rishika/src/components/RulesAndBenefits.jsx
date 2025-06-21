import React from "react";
import "../styles/RulesAndBenefits.css";

const RulesAndBenefits = () => {
  return (
    <div className="rules-benefits-section">
      {/* RULES SECTION */}
      <h2 className="section-title">📜 RULES & SELECTION PROCESS</h2>
      <div className="rules-container">
        <div className="rule-card fade-in">
          <span className="emoji">🧑‍💻</span>
          <p>Each intern can apply only ONCE in their final month.</p>
        </div>
        <div className="rule-card fade-in delay-1">
          <span className="emoji">📅</span>
          <p>Winners will be announced on the last day of every month! 🎉</p>
        </div>
        <div className="rule-card fade-in delay-2">
          <span className="emoji">🏆</span>
          <p>
            Top 10 interns will be celebrated with amazing rewards &
            recognition!
          </p>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <h2 className="section-title">🎁 PERKS & BENEFITS</h2>
      <div className="benefits-container">
        <div className="benefits-left fade-in">
          <img
            src="https://www.inlighntech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-07-at-13.06.10_905a3647.jpg"
            alt="Certificate"
            className="cert-img"
          />
        </div>
        <div className="benefits-right">
          <div className="benefit-card fade-in delay-1">
            🏅 Top 10 interns rewarded: ₹15,000 + Welcome kit
          </div>
          <div className="benefit-card fade-in delay-2">
            📩 Offer Letter: Within 30 minutes
          </div>
          <div className="benefit-card fade-in delay-3">
            🧪 Industry-based Projects
          </div>
          <div className="benefit-card fade-in delay-4">
            📜 Experience Letter with QR Code
          </div>
          <div className="benefit-card fade-in delay-5">
            💼 Exclusive Job Updates: Shared on WhatsApp
          </div>
          <div className="benefit-card fade-in delay-6">
            ✅ Certificate Verification
          </div>
          <div className="benefit-card fade-in delay-7">
            👥 Community Forum: Peer & mentor support
          </div>
          <div className="benefit-card fade-in delay-8">
            🔑 Internship Portal Access: Within 5 minutes
          </div>
          <div className="benefit-card fade-in delay-9">
            🖥️ Virtual Internship: Work from home with flexible schedule
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesAndBenefits;
