import React, { useEffect, useState } from "react";
import Intro from "../components/Intro.jsx";
import ProgramContent from "../components/ProgramContent.jsx";
import Navbar from "../components/Navbar.jsx";
import ContactUs from "../components/ContactUs.jsx"; // ✅ Add this
import Footer from "../components/Footer.jsx"; // ✅ And this too
import ChatbotAssistant from "../components/ChatbotAssistant.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

const Programs = () => {
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
      {showIntro ? (
        <Intro />
      ) : (
        <>
          <ProgramContent />
          <ContactUs />
          <Footer />
          <ChatbotAssistant />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
};

export default Programs;
