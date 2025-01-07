"use client";
import { useState, useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

export default function StickyContactBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const trayRef = useRef(null);

  const toggleTray = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <div
        className="fixed left-4 bottom-[10%] bg-accent text-white font-semibold px-2 py-1 md:py-2 md:px-4 rounded-b-lg shadow-lg transform -rotate-90 origin-left hover:scale-105 transition-transform cursor-pointer"
        onClick={toggleTray}
      >
        <a className="flex items-center text-sm md:text-base ">Contact Me</a>
      </div>

      {/* Tray */}
      <div
        ref={trayRef}
        className={`fixed left-14 md:left-16 bottom-[5%] md:bottom-[8%] bg-white shadow-lg rounded-lg overflow-hidden transform -rotate-90 origin-left transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-[150%]"
        }`}
      >
        {/* Social Media Links */}
        <ul className="flex flex-row items-center p-1 space-x-1">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 bg-primary text-white rounded-md shadow-md hover:bg-accent"
            >
              <FaFacebookF size={18} className="transform rotate-90" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 bg-primary text-white rounded-md shadow-md hover:bg-accent"
            >
              <FaTwitter size={18} className="transform rotate-90" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 bg-primary text-white rounded-md shadow-md hover:bg-accent"
            >
              <FaLinkedinIn size={18} className="transform rotate-90" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 bg-primary text-white rounded-md shadow-md hover:bg-accent"
            >
              <FaGithub size={18} className="transform rotate-90" />
            </a>
          </li>
          <li>
            <a
              href="https://your-website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 bg-primary text-white rounded-md shadow-md hover:bg-accent"
            >
              <FaGlobe size={18} className="transform rotate-90" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
