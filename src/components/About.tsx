import { HiAcademicCap } from "react-icons/hi2";
import { GoDot } from "react-icons/go";
import { MdWork } from "react-icons/md";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function About() {

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
      className="bg-primary text-white md:px-32 pb-20 flex justify-center items-center mt-28 md:mt-0 reveal"
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
        <div className="flex flex-col justify-center mx-10 md:mx-14">
          {/* Search Input */}
          <div className="bg-secondary px-4 py-4 flex space-x-2 rounded-xl  mt-14 mb-6 w-[85%] sm:w-[70%]">
            <span className="text-yellow-400 text-xl">✨</span>
            <p className="text-gray-400">About Sudeep S Patil</p>
          </div>
          {/* Content Area */}
          <div className="bg-secondary px-6 py-6 rounded-xl">
            <div className="text-gray-300 leading-relaxed">
              I am currently pursuing an MS in AI at BTU Cottbus, Germany. My
              expertise lies in core machine learning, neural networks, and
              generative AI. I have hands-on experience with frameworks like
              PyTorch and tools like langchain, crewai. I’m passionate about
              creating AI-driven applications and exploring the latest trends in
              technology.
            </div>
          </div>

          <div className="flex justify-between mx-6 mt-10 flex-col space-y-10 md:space-x-0 md:flex-row">
            <div>
              <div>
                <HiAcademicCap className="text-accent text-[4rem]" />
                <h2 className="text-white text-3xl mt-2 font-bold">
                  Education
                </h2>
              </div>

              <div className="my-5 space-y-5">
                <div className="flex space-x-4">
                  <GoDot className=" text-3xl" />
                  <div className="space-y-3">
                    <p className="text-xl text-gray-400">2024 - Present</p>
                    <p className="text-xl text-gray-400">
                      Brandenburg University of Technology
                    </p>
                    <p className="text-xl text-gray-400">
                      Masters in Artificial Intelligence
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <GoDot className=" text-3xl" />
                  <div className="space-y-3">
                    <p className="text-xl text-gray-400">2019 - 2023</p>
                    <p className="text-xl text-gray-400">
                      Prodhadeveraya Institute of Technology
                    </p>
                    <p className="text-xl text-gray-400">
                      Bachelor in Computer Science & Engineering
                    </p>
                    <p className="text-xl text-gray-400">8.7 CGPA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <MdWork className=" text-[4rem] text-accent" />
                <h2 className="text-white text-3xl mt-2 font-bold">
                  Experience
                </h2>
              </div>

              <div className="my-5 space-y-5">
                <div className="flex space-x-4">
                  <GoDot className=" text-3xl" />
                  <div className="space-y-3">
                    <p className="text-xl text-gray-400">
                      Sept 2022 - Nov 2022
                    </p>
                    <p className="text-xl text-gray-400">Contravir</p>
                    <p className="text-xl text-gray-400">
                      Machine Learning Internship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 rounded-xl flex justify-end my-9">
            <a href="#AIBot">
              <button className="bg-accent py-1 px-3 rounded-xl">
                <span className="text-yellow-400">✨</span> AI Bot
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}