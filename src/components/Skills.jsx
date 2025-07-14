import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiGithub,
  SiJavascript,
  SiReact,
  SiWordpress,
  SiBootstrap,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <SiHtml5 />, skillname: "HTML", level: "Expert", count: 90 },
    { icon: <SiCss3 />, skillname: "CSS", level: "Expert", count: 90 },
    { icon: <SiSass />, skillname: "SASS", level: "Intermediate", count: 70 },
    { icon: <SiGit />, skillname: "Git", level: "Advanced", count: 80 },
    { icon: <SiGithub />, skillname: "GitHub", level: "Advanced", count: 80 },
    { icon: <SiJavascript />, skillname: "JavaScript", level: "Advanced", count: 80 },
    { icon: <SiReact />, skillname: "ReactJS", level: "Advanced", count: 80 },
    { icon: <SiWordpress />, skillname: "WordPress", level: "Advanced", count: 70 },
    { icon: <SiBootstrap />, skillname: "Bootstrap", level: "Advanced", count: 70 },
    { icon: <SiTypescript />, skillname: "TypeScript", level: "Intermediate", count: 50 },
    { icon: <SiNextdotjs />, skillname: "Next.js", level: "Intermediate", count: 50 },
    { icon: <SiTailwindcss />, skillname: "Tailwind CSS", level: "Intermediate", count: 60 },
    { icon: <SiMui />, skillname: "Material UI", level: "Intermediate", count: 60 },
  ];

  return (
    <section id="skills" className="py-10 px-3 bg-gray-800 relative">
      <div className="max-w-6xl mx-auto px-4 mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
        🛠️ My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[6rem] max-w-[10rem] bg-gray-900 p-4 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
                }}
                className="w-20 h-20 flex items-center justify-center rounded-full"
              >
                <div
                  className="text-2xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600"
                  title={skill.skillname}
                  aria-label={skill.skillname}
                >
                  {skill.icon}
                </div>
              </div>
              <p className="text-sm mt-2 font-medium text-cyan-500">{skill.skillname}</p>
              <p className="text-xs text-gray-300">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default Skills;
