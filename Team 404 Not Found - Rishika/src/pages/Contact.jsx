import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Intro from "../components/Intro.jsx";
import ContactCards from "../components/ContactCards.jsx";
import ContactUs from "../components/ContactUs.jsx";

const Contact = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {showIntro ? <Intro /> : <ContactCards />}
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;
