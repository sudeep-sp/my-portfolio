import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Skills() {
  const skills = [
    { name: "Python", img: "skills/pytorch.png" },
    { name: "PyTorch", img: "skills/pytorch.png" },
    { name: "TensorFlow", img: "skills/pytorch.png" },
    { name: "Keras", img: "skills/pytorch.png" },
    { name: "NumPy", img: "skills/pytorch.png" },
    { name: "Pandas", img: "skills/pytorch.png" },
    { name: "Matplotlib", img: "skills/pytorch.png" },
    { name: "Seaborn", img: "skills/pytorch.png" },
    { name: "SciKit-Learn", img: "skills/pytorch.png" },
    { name: "OpenCV", img: "skills/pytorch.png" },
  ];

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
      className="bg-primary text-white px-8 sm:px-16 md:px-32 pb-14"
      id="Skills"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold reveal">My Skills</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-14 reveal">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-slate-200 p-2 rounded-lg backdrop-blur-md bg-opacity-30 shadow-lg">
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
