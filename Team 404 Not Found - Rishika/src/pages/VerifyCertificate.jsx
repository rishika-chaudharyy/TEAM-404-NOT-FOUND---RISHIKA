import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Intro from "../components/Intro.jsx";
import VerifyCertificateContent from "../components/VerifyCertificateContent.jsx";
import ContactUs from "../components/ContactUs.jsx";
import ChatbotAssistant from "../components/ChatbotAssistant.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

const VerifyCertificate = () => {
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
      {showIntro ? <Intro /> : <VerifyCertificateContent />}
      <ContactUs />
      <Footer />
      <ChatbotAssistant />
      <ScrollToTopButton />
    </>
  );
};

export default VerifyCertificate;
