import React from "react";
import "../styles/ProgramContent.css";

const internships = [
  {
    title: "Business Analyst Internship Program",
    stars: 5,
    description:
      "Business Analyst – Internship Program Gain practical business analysis skills by working on...",
    image: "p1.jpg", // update this
  },
  {
    title: "Front-End Development Internship",
    stars: 5,
    description:
      "Front-End Web Development – Internship Program Kickstart your journey into web development by...",
    image: "p2.jpg",
  },
  {
    title: "Ethical Hacking with Kali Linux",
    stars: 5,
    description:
      "🔐 Ethical Hacking – Internship Program Gain practical skills in cybersecurity with Kali Linux...",
    image: "p3.jpg",
  },
  {
    title: "Full Stack Development Internship",
    stars: 5,
    description:
      "Master full-stack web development from the ground up in this intensive internship program...",
    image: "p4.jpg",
  },
  {
    title: "AI & Machine Learning Internship Program",
    stars: 5,
    description:
      "🤖 Build a strong foundation in artificial intelligence and machine learning by working on real projects...",
    image: "p5.jpg",
  },
  {
    title: "Data Analyst Internship",
    stars: 5,
    description:
      "📊 Learn how to collect, clean, analyze, and visualize data to drive meaningful decisions...",
    image: "p6.jpg",
  },
  {
    title: "Offensive Cyber Security Internship",
    stars: 5,
    description:
      "🛡️ Dive deep into the world of ethical hacking, penetration testing, and advanced security techniques...",
    image: "p7.jpg",
  },
  {
    title: "Data Science Internship",
    stars: 5,
    description:
      "📈 Master the fundamentals of data science by working on hands-on real-world problems...",
    image: "p8.jpg",
  },
];

const ProgramContent = () => {
  return (
    <div className="programs-container">
      <h1 className="programs-title">🚀 Internship Programs</h1>
      <p className="programs-desc">
        Explore immersive, hands-on learning paths in:
        <br />
        🌐 Cyber Security • 💻 Full Stack Dev • 📊 Data Science • 📈 Data
        Analysis
      </p>

      <div className="program-cards-wrapper">
        {internships.map((item, index) => (
          <div
            key={index}
            className={`program-card ${
              index % 2 === 0 ? "from-left" : "from-right"
            }`}
          >
            <div className="card-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>★★★★★</p>
              <p className="card-desc">{item.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramContent;
