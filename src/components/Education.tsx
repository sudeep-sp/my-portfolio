import { HiAcademicCap } from "react-icons/hi2";
import { GoDot } from "react-icons/go";
import { MdWork } from "react-icons/md";

const Education = () => {
  return (
    <section className="bg-primary text-white px-32 py-20" id="Edu">
      <div className="max-w-4xl mb-10">
        <h2 className="text-3xl font-bold">Education / Experience</h2>
      </div>
      <div className="flex justify-between">
        <div>
          <div>
            <HiAcademicCap className="text-accent text-[4rem]" />
            <h2 className="text-white text-3xl mt-2 font-bold">Education</h2>
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
                  Prodhadeveraya Institute of Technology (VTU)
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
            <h2 className="text-white text-3xl mt-2 font-bold">Experience</h2>
          </div>

          <div className="my-5 space-y-5">
            <div className="flex space-x-4">
              <GoDot className=" text-3xl" />
              <div className="space-y-3">
                <p className="text-xl text-gray-400">Sept 2022 - Nov 2022</p>
                <p className="text-xl text-gray-400">Contravir</p>
                <p className="text-xl text-gray-400">
                  Data Analytics Internship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
