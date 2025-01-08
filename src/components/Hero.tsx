"use client";
import { useEffect } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can change the theme if needed

export default function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import ScrollReveal only in the browser
      import("scrollreveal").then((ScrollReveal) => {
        ScrollReveal.default().reveal(".reveal", {
          distance: "50px",
          duration: 800,
          easing: "ease-in-out",
          opacity: 0,
          scale: 0.9,
          reset: false,
          interval: 100,
          origin: "bottom",
        });
      });
    }
  }, []);
  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Content for syntax highlighting
  const codeString = `HelloWorld = {
  "_id": "127.0.0.1",
  "name": "Sudeep S Patil",
  "developer": true,
  "technologies": ["Python", "PyTorch", "CV", "..."],
  "interests": ["GenAI", "Computer vision", "Data Science", "..."],
}`;

  return (
    <section
      className="bg-primary flex flex-col md:flex-row justify-center items-center px-6 sm:px-10 md:px-32 h-[90vh] gap-6 sm:gap-10 py-8"
      id="Home"
    >
      {/* Image Section */}
      <div className="relative flex justify-center items-center reveal w-full mt-20 md:mt-0">
        {/* Animated gradient circle */}
        <div className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[380px] md:h-[380px] bg-gradient-to-r from-accent via-accent to-accent rounded-full blur-lg animate-pulse"></div>
        {/* Profile Image */}
        <img
          src="/me(1).jpg"
          alt="Profile"
          className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[350px] md:h-[350px]  object-cover rounded-full shadow-lg border-4 border-white"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col text-white rounded-xl shadow-lg bg-dark reveal w-full max-w-[700px] py-6 sm:py-8">
        {/* Window Top Bar */}
        <div className="flex items-center bg-dark rounded-t-lg px-3 py-2">
          <div className="flex space-x-2.5">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="px-4 sm:px-6 py-4">
          <SyntaxHighlighter language="javascript" style={dracula}>
            {codeString}
          </SyntaxHighlighter>
        </div>

        <div className="flex justify-between px-4 sm:px-6 py-2 md:flex-row flex-col md:space-x-0 md:space-y-2 space-y-5">
          <div className="flex flex-row space-x-4">
            {/* Download Resume Button */}
            <a
              href="/sudeep_resume.pdf" // Replace with your actual resume file path
              download
              className="inline-flex items-center text-sm px-4 py-2 bg-accent transition-all text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              My Resume
            </a>

            {/* Blog Site Button */}
            <a
              href="https://learnaiwithus.codes" // Replace with your actual blog URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm px-4 py-2 bg-accent transition-all text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Blogs
            </a>
          </div>
          <div>
            <button
              onClick={() => handleNavigation("AIBot")}
              className="inline-flex items-center text-sm px-4 py-2 bg-accent transition-all text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <span className="text-yellow-400 text-xl">✨</span> AI Bot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
