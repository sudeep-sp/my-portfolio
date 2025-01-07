import { useEffect } from "react";

export default function Skills() {
  const skills = [
    { name: "Python", img: "skills/python.png" },
    { name: "PyTorch", img: "skills/pytorch.png" },
    { name: "TensorFlow", img: "skills/tensorflow.png" },
    { name: "LLM", img: "skills/LLM.webp" },
    { name: "FastAPI", img: "skills/fastapi.png" },
    { name: "Pandas", img: "skills/pandas.png" },
    { name: "Matplotlib", img: "skills/Matplotlib.png" },
    { name: "LangChain", img: "skills/LangChain.png" },
    { name: "SciKit-Learn", img: "skills/sklearn.png" },
    { name: "Next.js", img: "skills/nextjs.png" },
  ];

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
      className="bg-primary text-white px-8 sm:px-16 md:px-32 pb-14 pt-20"
      id="Skills"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold reveal">My Skills</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-14 reveal">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-white p-2 rounded-lg backdrop-blur-sm bg-opacity-30 shadow-lg">
              <img
                src={skill.img}
                alt={skill.name}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-lg mt-4">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
