import React, { useEffect } from "react";
import "../styles/CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const trail = [];

    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "cursor-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 500); // remove after fade out
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default CustomCursor;
