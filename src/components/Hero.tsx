"use client";
import { useEffect } from "react";

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

  return (
    <section
      className="bg-primary flex flex-col md:flex-row items-center justify-between md:px-32 px-10 h-screen overflow-hidden pb-24 md:pb-0"
      id="Home"
    >
      {/* Text Section */}
      <div className="flex-1 reveal mt-20 md:mt-0">
        <h1 className="text-4xl font-bold mb-4">
          Hello, I&#39;m <br />
          <span className="text-accent">Sudeep S Patil</span>
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          An AI enthusiast and AI developer. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fuga in sapiente reprehenderit.
        </p>
        <div className="flex space-x-4">
          <button className="bg-accent text-white px-6 py-2 rounded-md">
            Download CV
          </button>
          <button className="bg-secondary text-white px-6 py-2 rounded-md">
            Start Project
          </button>
        </div>
      </div>

      {/* Image Section with Background Design */}
      <div className="flex-1 relative mx-auto flex justify-center items-center mt-20 md:mt-0">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-accent to-secondary rounded-full blur-xl opacity-30"></div>
        <img
          src="/image.png"
          alt="Profile"
          className="relative z-10 w-full md:w-[80%] h-full md:h-[80%] object-cover shadow-lg reveal"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        />
      </div>
    </section>
  );
}
