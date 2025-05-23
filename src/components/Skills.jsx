import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      skillname: "HTML",
      level: "Advance",
      count: 86,
    },
    {
      logo: "logo-css3",
      skillname: "CSS",
      level: "Expect",
      count: 90,
    },
    {
      logo: "logo-sass",
      skillname: "SASS",
      level: "Intermediate",
      count: 70,
    },
    {
      logo: "git-branch-outline",
      skillname: "Git",
      level: "Intermediate",
      count: 80,
    },
    {
      logo: "logo-github",
      skillname: "GitHub",
      level: "Intermediate",
      count: 80,
    },
    {
      logo: "logo-javascript",
      skillname: "JavaScript",
      level: "Intermediate",
      count: 80,
    },
    {
      logo: "logo-react",
      skillname: "ReactJS",
      level: "Intermediate",
      count: 80,
    },
    {
      logo: "logo-nextjs",
      skillname: "Next.js",
      level: "Next.js",
      count: 50,
    },
  ];

  return (
    <section id="skills" className="py-10  bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <ion-icon
                    name={skill.logo}
                    title={skill.skillname}
                  ></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
