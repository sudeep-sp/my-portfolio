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
    github: "https://github.com/sudeep-sp/FL_sim",
    description:
      "A web application that demonstrates the training of a Convolutional Neural Network in Decentralized manner to increase privacy.",
    active: true,
    skills: ["Python", "PyTorch", "Flower", "streamlit"],
  },
  {
    id: 2,
    imageUrl: "/projects/blog_gen.png",
    title: "Agentic Blog Generator",
    github: "https://github.com/sudeep-sp/learnaiwithus-blog_gen_agents",
    description:
      "Automated blog creation for our blogging website, saving up to 90% of a writer's time by generating fully structured blogs using a multi-agent system (Researcher, Strategist, Writer, SEO Optimizer) in seconds.",
    active: false,
    skills: ["CrewAI", "Next.js", "Python", "Supabase", "LangChain", "FastAPI"],
  },
  {
    id: 3,
    imageUrl: "/projects/Ask_AI.png",
    title: "Ask-AI: Real-time Explanation Tool",
    github: "https://github.com/sudeep-sp/learnaiwithus-Ask_AI_RAG",
    description:
      "Developed a feature for our blogging website, enabling users to select unfamiliar words in blogs and instantly receive explanations using RAG-based LLMs.",
    active: false,
    skills: ["Python", "LangChain", "Ollama", "Next.js", "ChromaDB", "FastAPI"],
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
            spaceBetween={15} // Default space between slides
            slidesPerView={2.5} // Default number of slides
            pagination={{ clickable: true }} // Enable pagination dots
            className="w-full"
            breakpoints={{
              0: {
                slidesPerView: 2.5, // For screens <= 640px, show 1 slide
                spaceBetween: 10, // Reduce space between slides
              },
              640: {
                slidesPerView: 2.5, // For screens <= 640px, show 1 slide
                spaceBetween: 10, // Reduce space between slides
              },
              768: {
                slidesPerView: 3, // For screens <= 768px, show 2 slides
                spaceBetween: 15, // Keep default spacing
              },
              1024: {
                slidesPerView: 3, // For screens >= 1024px, show 3 slides
                spaceBetween: 20, // Increase spacing slightly
              },
              2560: {
                slidesPerView: 3, // For screens >= 2560px, show 3 slides
                spaceBetween: 20, // Increase spacing slightly
              },
            }}
          >
            {thumbnails.map((thumbnail) => (
              <SwiperSlide
                key={thumbnail.id}
                onClick={() => setSelectedItem(thumbnail)}
                className={`!min-w-[130px] flex-shrink-0 cursor-pointer   rounded-md overflow-hidden ${
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
            <a
              href={selectedItem.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm px-4 py-2 bg-accent transition-all text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.427c.6.11.82-.26.82-.577v-2.23c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.234 1.84 1.234 1.07 1.83 2.809 1.3 3.495.994.11-.776.42-1.3.764-1.6-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.44 11.44 0 013.006-.403 11.44 11.44 0 013.006.403c2.29-1.553 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.842 1.233 1.912 1.233 3.222 0 4.61-2.807 5.624-5.48 5.92.43.37.81 1.102.81 2.22v3.293c0 .32.216.693.824.574A12 12 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
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
