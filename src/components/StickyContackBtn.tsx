"use client";
import { useState, useRef } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
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
        className={`fixed left-14 md:left-16 bottom-[9.5%] md:bottom-[11.5%] bg-white shadow-lg rounded-lg overflow-hidden transform -rotate-90 origin-left transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-[150%]"
        }`}
      >
        {/* Social Media Links */}
        <ul className="flex flex-row items-center p-1 space-x-1">
          <li>
            <a
              href="mailto: sudeep.subhashchandra.patil@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 bg-primary text-white rounded-md shadow-md hover:bg-accent"
            >
              <SiGmail size={18} className="transform rotate-90" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/sudeepspatil/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 bg-primary text-white rounded-md shadow-md hover:bg-accent"
            >
              <FaLinkedinIn size={18} className="transform rotate-90" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sudeep-sp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 bg-primary text-white rounded-md shadow-md hover:bg-accent"
            >
              <FaGithub size={18} className="transform rotate-90" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
