import React from "react";
import CountUp from "react-countup";
import "../styles/StatsSection.css";

const stats = [
  { label: "Interns Enrolled", value: 5000, suffix: "+", color: "#4b5ccc" },
  { label: "Projects Completed", value: 9000, suffix: "+", color: "#27ae60" },
  { label: "Satisfaction Rate", value: 93, suffix: "%", color: "#f39c12" },
  { label: "Top Instructors", value: 30, suffix: "+", color: "#e74c3c" },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div
            className="stat-box"
            key={index}
            style={{ borderLeft: `5px solid ${stat.color}` }}
          >
            <h2 className="stat-number">
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                suffix={stat.suffix}
                enableScrollSpy
                scrollSpyOnce
              />
            </h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
