import React, { useState } from "react";
import aboutImg from "../assets/images/about.png";
import CV from "../assets/Resume-FrontendDevelopment.pdf";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text-justify leading-7 md:w-11/12 w-full mx-auto">
      {isReadMore ? text.slice(0, 400) : text}
      <span onClick={toggleReadMore} className="text-cyan-600 cursor-pointer">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const About = () => {
  const info = [
    { text: "Years Experience", count: "02" },
    { text: "Completed Projects", count: "18" },
    { text: "Companies Work", count: "02" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About<span className="text-cyan-600"> Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <ReadMore>
                Hi👋! I'm Uhegbu Ogechi Juliet, OGE for Short. 

                I'm a passionate and dedicated Front-End Developer with a
                BSc in Computer Science and Informatics. I specialize in
                creating user-friendly websites and web applications, focusing
                on intuitive and engaging user interfaces. Skilled in HTML,
                CSS, JavaScript, ReactJS, Git, GitHub, SEO, Technical Writing,
                System Design etc. Beyond technical skills, the program
                emphasized soft skills such as problem solving, effective
                communication and team collaboration.
                
                My journey into Frontend development began in 2020 with the
                Google Developer Student Club, where I developed a single-page
                website. This sparked my passion for web development. In 2022,
                I advanced my skills in HTML, CSS, JavaScript, and ReactJS
                at the STUTERN Accelerator, supported by the Afro-Girls
                scholarship.

                Fast-forward to today, I've proven ability to work in diverse
                environments, from startups to large corporations and
                open-source communities. My focus is on building accessible
                and inclusive digital experiences, and I'm committed to
                continuous improvement and staying current with the latest
                technologies.
              </ReadMore>
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
