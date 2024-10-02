import React, { useState, useEffect } from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let textIndex = 0;
    const typingSpeed = 10; // Speed of typing

    const typeText = () => {
      if (textIndex < ABOUT_TEXT.length) {
        setDisplayedText(ABOUT_TEXT.substring(0, textIndex + 1));
        textIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };

    // Start the typing effect
    typeText();

    return () => {
      // Clean up when the component is unmounted or re-rendered
      setDisplayedText("");
    };
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>

      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>

        {/* Text Section with Typing Animation */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <p className="my-2 max-w-xl py-6">{displayedText}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
