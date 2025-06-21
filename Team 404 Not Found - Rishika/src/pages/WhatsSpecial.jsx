import React, { useEffect, useState } from "react";
import Intro from "../components/Intro.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WhatsSpecialContent from "../components/WhatsSpecialContent.jsx"; // placeholder
import Testimonial from "../components/Testimonial.jsx";
import EpicOpportunity from "../components/EpicOpportunity.jsx";
import InternProjects from "../components/InternProjects.jsx";
import HowToParticipate from "../components/HowToParticipate.jsx";
import RulesAndBenefits from "../components/RulesAndBenefits.jsx";
import ContactUs from "../components/ContactUs.jsx";

const WhatsSpecial = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Navbar />
      {showIntro ? <Intro /> : <Testimonial />}
      <WhatsSpecialContent />
      <EpicOpportunity />
      <InternProjects />
      <HowToParticipate />
      <RulesAndBenefits />
      <ContactUs />
      <Footer />
    </>
  );
};

export default WhatsSpecial;
