import React from "react";
import Logo from "../assets/soham.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={Logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/soham-soni-2342b4239" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Soham2212004" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.cloudskillsboost.google/public_profiles/6ebb4fad-af6b-4520-8d47-8a16a23a0df4" target="_blank" rel="noopener noreferrer">
          <FaGoogle />
        </a>
        <a href="https://www.instagram.com/_soham_soni_/?__pwa=1" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
