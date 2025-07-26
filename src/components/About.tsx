import { HiAcademicCap } from "react-icons/hi2";
import { GoDot } from "react-icons/go";
import { MdWork } from "react-icons/md";
import { useEffect } from "react";

export default function About() {
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

  return (
    <section
      className="bg-primary text-white md:px-32 pb-20 flex justify-center items-center mt-28 md:mt-0 reveal pt-20"
      id="About"
    >
      <div className="text-white w-[90%] rounded-xl shadow-lg  p-4 bg-dark">
        {/* Window Top Bar */}
        <div className="flex items-center bg-dark rounded-t-lg px-3 py-2">
          <div className="flex space-x-2.5">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex justify-center rounded-full mx-auto bg-secondary w-[65%]">
            <p className="text-gray-400 py-[0.5]">Sudeep.me</p>
          </div>
        </div>
        <div className="flex flex-col justify-center md:mx-14">
          {/* Search Input */}
          <div className="bg-secondary px-4 py-4 flex space-x-2 rounded-xl  mt-14 mb-6 w-[85%] sm:w-[70%]">
            <span className="text-yellow-400 text-xl">✨</span>
            <p className="text-gray-400">About Sudeep S Patil</p>
          </div>
          {/* Content Area */}
          <div className="bg-secondary px-6 py-6 rounded-xl">
            <div className="text-gray-300 leading-relaxed">
              Artificial Intelligence Master’s student with hands-on experience
              in AI/ML development, including large language models and computer
              vision applications. Proficient in end-to-end project development,
              from research to implementation, with a strong foundation in
              Mathamatics, Machine learning, and Data Science. Skilled in
              teamwork and independent problem-solving. Excited to apply my
              expertise and contribute to innovative AI solutions.
            </div>
          </div>

          <div className="flex justify-between mx-6 mt-10 flex-col space-y-10 md:space-y-0 md:flex-row">
            <div>
              <div>
                <HiAcademicCap className="text-accent text-[3rem]" />
                <h2 className="text-white text-3xl mt-2 font-bold">
                  Education
                </h2>
              </div>

              <div className="my-5 space-y-5">
                <div className="flex space-x-4">
                  <GoDot className=" text-2xl" />
                  <div className="space-y-3">
                    <p className="text-md text-gray-400">2024 - Present</p>
                    <p className="text-md text-gray-400">
                      Brandenburg University of Technology
                    </p>
                    <p className="text-md text-gray-400">
                      Masters in Artificial Intelligence
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <GoDot className=" text-3xl" />
                  <div className="space-y-3">
                    <p className="text-md text-gray-400">2019 - 2023</p>
                    <p className="text-md text-gray-400">
                      Prodhadeveraya Institute of Technology (VTU)
                    </p>
                    <p className="text-md text-gray-400">
                      Bachelor in Computer Science & Engineering
                    </p>
                    <p className="text-md text-gray-400">8.7 CGPA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <MdWork className=" text-[3rem] text-accent" />
                <h2 className="text-white text-3xl mt-2 font-bold">
                  Experience
                </h2>
              </div>

              <div className="my-5 space-y-5">
                <div className="flex space-x-4">
                  <GoDot className=" text-2xl" />
                  <div className="space-y-3">
                    <p className="text-md text-gray-400">Feb 2025 - Present</p>
                    <p className="text-md text-gray-400">IAV</p>
                    <p className="text-md text-gray-400">
                      Working Student (GenAI)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 rounded-xl flex justify-end my-9">
            <button
              onClick={() => handleNavigation("AIBot")}
              className="inline-flex items-center text-sm px-4 py-2 bg-accent transition-all text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <span className="text-yellow-400">✨</span> AI Bot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
