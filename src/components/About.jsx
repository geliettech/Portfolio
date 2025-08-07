import React, { useState } from "react";
import aboutImg from "../assets/images/about.png";
import CV from "../assets/Frontend-Developer-OGECHI-JULIET-UHEGBU.pdf";

// const ReadMore = ({ children }) => {
//   const text = children;
// const [isReadMore, setIsReadMore] = useState(true);

// const toggleReadMore = () => {
//   setIsReadMore(!isReadMore);
// };

//   return (
//     <p className="lg:text-left text-justify leading-7 md:w-11/12 w-full mx-auto">
//       {isReadMore ? text.slice(0, 400) : text}
//       <span onClick={toggleReadMore} className="text-cyan-600 cursor-pointer">
//         {isReadMore ? "...read more" : " show less"}
//       </span>
//     </p>
//   );
// };

const About = () => {
  const info = [
    { text: "Years Experience", count: "02" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "02" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          👩🏽‍💻 About<span className="text-cyan-600"> Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <div className="lg:text-left text-justify leading-7 md:w-11/12 w-full mx-auto">
                <p>Hi, I'm Ogechi, but you can call me Oge.</p>
                <p>
                   I'm a dynamic Frontend Software Developer and Web Programmer with a passion for building responsive, scalable web applications that are just as maintainable as they are beautiful.
                </p>
                <p>
                  With over 2 years of experience in frontend software development and growing expertise in web programming systems, I've worked across startups and global teams to ship high-impact products using React, Next.js, Typescript, TailwindCSS and MaterialUI, among other modern tools. I care deeply about performance, accessibility and clean code.
                </p>
                <p>
                 Currently, I'm diving deeper into Web programming, Software Engineering and System Designs. I regularly document my learnings and dev journey right here on LinkedIn and medium.
                </p>
                <p>
                 I'm currently open for remote or onsite opportunities that challenge me to grow and build impactful web solutions. If your team values clean code, good docs, cross-functional collaboration, and continuous learning, let's talk!
                </p>
              </div>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={CV} download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
