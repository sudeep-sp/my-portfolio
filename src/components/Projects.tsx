"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const thumbnails = [
  {
    id: 1,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "ESI-SBA",
    description:
      "A comprehensive school management system that streamlines administrative tasks, student enrollment, and academic tracking.",
    active: true,
    skills: ["Next.js", "TailwindCSS", "TypeScript", "Firebase", "REST API"],
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1543941869-11da6518d88f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Talent Showcase",
    description:
      "An online platform for showcasing and discovering talents across various domains such as art, music, and technology.",
    active: false,
    skills: ["React", "TailwindCSS", "GraphQL", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1558137623-ce933996c730?q=80&w=2906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Translation App",
    description:
      "A mobile application that provides real-time voice translation, enhancing communication across different languages.",
    active: false,
    skills: [
      "React Native",
      "TypeScript",
      "OpenAI Whisper",
      "Firebase",
      "Docker",
    ],
  },
  {
    id: 4,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "AI Assistant",
    description:
      "A personal assistant application leveraging AI for personalized task management, reminders, and information retrieval.",
    active: false,
    skills: ["Next.js", "TailwindCSS", "TypeScript", "TensorFlow", "Docker"],
  },
];

export default function Projects() {
  const [selectedItem, setSelectedItem] = useState(thumbnails[0]);

      useEffect(() => {
        ScrollReveal().reveal(".reveal", {
          distance: "50px", // Distance the element moves
          duration: 800, // Animation duration (in ms)
          easing: "ease-in-out", // Easing function
          opacity: 0, // Start with 0 opacity
          scale: 0.9, // Start with 90% scale
          reset: false, // Animation replay on scroll
          interval: 100, // Delay between animations for multiple elements
          origin: "bottom",
        });
      }, []);

  return (
    <section
      className="bg-primary text-white py-20 px-10 md:px-32"
      id="Projects"
    >
      <div className="max-w-4xl mb-10">
        <h2 className="text-3xl font-bold mb-10 reveal">Projects</h2>
      </div>
      <div className="project-container flex justify-between items-center md:space-x-10 flex-col-reverse md:flex-row space-y-10 md:space-y-0">
        <div className=" w-full md:max-w-[450px] reveal">
          <Swiper
            spaceBetween={15} // Space between slides
            slidesPerView={3} // Adjust to display multiple slides
            // Enable navigation arrows
            pagination={{ clickable: true }} // Enable pagination dots
            className="w-full"
          >
            {thumbnails.map((thumbnail) => (
              <SwiperSlide
                key={thumbnail.id}
                onClick={() => setSelectedItem(thumbnail)}
                className={`!w-[130px] flex-shrink-0 cursor-pointer   rounded-md overflow-hidden ${
                  thumbnail.id == selectedItem.id
                    ? "border-[3px] border-accent"
                    : "border-gray-600 border"
                }`}
              >
                <div className="w-[130px] h-[80px] object-cover object-center overflow-hidden">
                  <img
                    className="cursor-pointer w-full h-full"
                    src={thumbnail.imageUrl}
                    alt={thumbnail.title}
                  />
                </div>

                <span className="text-xs font-semibold px-2 text-gray-400 border-t block py-[2px] border-gray-600">
                  {thumbnail.title}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-container mt-16 space-y-3 reveal">
            <h1 className="text-lg font-semibold text-gray-200">
              {selectedItem.title}
            </h1>
            <p className="text-gray-400 text-sm">{selectedItem.description}</p>
            <div className="tags-container flex flex-wrap ">
              {selectedItem.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-accent whitespace-nowrap mr-2 mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-[600px] reveal ">
          <div className="overflow-hidden w-full h-[400px] rounded-md  shadow-xl mb-10 md:mb-0">
            <img
              className="cursor-pointer w-full h-full object-cover object-center"
              src={selectedItem.imageUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
