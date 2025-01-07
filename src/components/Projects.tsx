"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

const thumbnails = [
  {
    id: 1,
    imageUrl: "/projects/FL1.png",
    title: "Training CNN using Federated Learning",
    description:
      "A web application that demonstrates the training of a Convolutional Neural Network in Decentralized manner to increase privacy.",
    active: true,
    skills: ["Python", "PyTorch", "Flower", "streamlit"],
  },
  {
    id: 2,
    imageUrl: "/projects/blog_gen.png",
    title: "Agentic Blog Generator",
    description:
      "Automated blog creation for our blogging website, saving up to 90% of a writer's time by generating fully structured blogs using a multi-agent system (Researcher, Strategist, Writer, SEO Optimizer) in seconds.",
    active: false,
    skills: ["CrewAI", "Next.js", "Python", "Supabase", "LangChain"],
  },
  {
    id: 3,
    imageUrl: "/projects/Ask_AI.png",
    title: "Ask-AI: Real-time Explanation Tool",
    description:
      "Developed a feature for our blogging website, enabling users to select unfamiliar words in blogs and instantly receive explanations using RAG-based LLMs.",
    active: false,
    skills: ["Python", "LangChain", "Ollama", "Next.js", "ChromaDB"],
  },
];

export default function Projects() {
  const [selectedItem, setSelectedItem] = useState(thumbnails[0]);

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
