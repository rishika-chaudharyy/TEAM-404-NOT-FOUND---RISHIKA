import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro"; // ✅ Your animated intro
import "../styles/AboutUs.css"; // Optional for layout or background
import AboutIntro from "../components/AboutIntro";
import VisionMission from "../components/VisionMission";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ChatbotAssistant from "../components/ChatbotAssistant";
import ScrollToTopButton from "../components/ScrollToTopButton";

const AboutUs = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1000); // Show intro for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {showIntro ? (
        <Intro />
      ) : (
        <div className="about-us-container">
          <AboutIntro />
          <VisionMission />
          <StatsSection />
          <WhyChooseUs />
          <Testimonial />
          <ContactUs />
          <Footer />
          <ChatbotAssistant />
          <ScrollToTopButton />
        </div>
      )}
    </>
  );
};

export default AboutUs;
