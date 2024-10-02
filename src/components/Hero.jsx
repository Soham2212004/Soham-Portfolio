import React, { useState, useEffect } from "react";
import profilepic from "../assets/s-removebg-preview.png";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const roles = ["AI/ML Developer", "Flutter App Developer", "MERN Stack Developer"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const typingSpeed = 50; // Speed of typing
    const erasingSpeed = 50; // Speed of erasing
    const pauseDuration = 500; // Pause before starting to erase

    const handleTypingEffect = () => {
      const currentRoleText = roles[roleIndex];
      if (isTyping) {
        if (currentRole.length < currentRoleText.length) {
          setCurrentRole((prev) => prev + currentRoleText.charAt(currentRole.length));
        } else {
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else if (isDeleting) {
        if (currentRole.length > 0) {
          setCurrentRole((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTimeout(() => setIsTyping(true), 500);
        }
      }
    };

    const interval = setInterval(handleTypingEffect, isTyping ? typingSpeed : erasingSpeed);
    return () => clearInterval(interval);
  }, [currentRole, isTyping, isDeleting, roleIndex]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="pb-16 text-6xl font-thick tracking-tight lg:mt-16 lg:text-8xl "
            >
              Soham Soni
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {currentRole}
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1}}
              src={profilepic}
              alt="profilepic"
              className="h-100 w-100 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
