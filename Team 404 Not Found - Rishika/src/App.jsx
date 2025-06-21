import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro.jsx";

import Home from "./pages/Home.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Programs from "./pages/Programs.jsx";
import VerifyCertificate from "./pages/VerifyCertificate.jsx";
import WhatsSpecial from "./pages/WhatsSpecial.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      <CustomCursor />
      {!showHome ? (
        <Intro onComplete={() => setShowHome(true)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/verify" element={<VerifyCertificate />} />
            <Route path="/special" element={<WhatsSpecial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
