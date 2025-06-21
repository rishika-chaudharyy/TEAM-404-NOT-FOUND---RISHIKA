import React from "react";
import "../styles/EpicOpportunity.css";

const EpicOpportunity = () => {
  return (
    <div className="epic-section">
      {/* ❄️ Snowflake Background */}
      <div className="snowflakes">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="snowflake">
            ❄️
          </div>
        ))}
      </div>

      <div className="epic-heading-pill">EPIC OPPORTUNITY 🎉✨</div>

      <h2 className="epic-title">Interns of the Month Challenge</h2>
      <p className="epic-desc">
        Inlighn Tech is bringing you an <strong>EPIC opportunity</strong> with
        the “Interns of the Month Challenge”! 🎉✨
        <br />
        <br />
        Every single month, we’re recognizing{" "}
        <strong>10 OUTSTANDING interns</strong> who have shown exceptional
        dedication, innovation, and top-tier performance! 🏆
      </p>

      {/* Reward Cards */}
      <div className="epic-cards">
        <div className="epic-card card1">
          <div className="card-text">💰 A Stipend Reward of ₹15,000!</div>
        </div>
        <div className="epic-card card2">
          <div className="card-text">
            🎁 An Exclusive Welcome Kit & Swag Pack!
          </div>
        </div>
        <div className="epic-card card3">
          <div className="card-text">
            🌟 Special Recognition on Our Platform
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpicOpportunity;
