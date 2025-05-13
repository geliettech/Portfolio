import React, { useState } from "react";
import aboutImg from "../assets/images/about.png";
import CV from "../assets/ogechiJulietUhegbu-CV.pdf";

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
    { text: "Completed Projects", count: "10" },
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
                Hi 👋! I'm Uhegbu Ogechi Juliet, also known as OGE. I am a
                dedicated computer science graduate 🎓 with a solid foundation
                in programming, web development, and software engineering
                principles 💻. My expertise lies in designing and building
                user-friendly websites and web applications 🌐, with a focus on
                intuitive and engaging user interfaces 🎨. I am proficient in
                HTML, CSS, JavaScript, ReactJS, Next.js, Git, GitHub, SEO,
                technical writing, system design, and more 🚀. Beyond my
                technical skills, I possess strong problem-solving abilities,
                in-depth knowledge of modern technologies 🔧, and effective
                communication skills 🗣️, enabling seamless collaboration within
                teams. My passion for front-end development began in 2020 when I
                joined the Google Developer Student Club 👩‍💻, where I developed a
                single-page website that ignited my interest in web development.
                In 2022, I further enhanced my skills in HTML, CSS, Sass, JavaScript,
                ReactJS and Next.js through the STUTERN Accelerator program,
                supported by the Afro-Girls scholarship🌟. Today, I have proven
                my ability to contribute to innovative and impactful projects
                across diverse environments, including startups, large
                corporations, and open-source communities 🌍. I am dedicated to
                creating accessible and inclusive digital experiences 🌈 while
                staying committed to continuous improvement and keeping up with
                the latest technologies 🔄.
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
