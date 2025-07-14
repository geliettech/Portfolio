import React, { useState } from "react";
import aboutImg from "../assets/images/about.png";
import CV from "../assets/Frontend-Developer-OGECHI-JULIET-UHEGBU.pdf";

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
          👩🏽‍💻 About<span className="text-cyan-600"> Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <ReadMore>
                Hi 👋! I’m Ogechi Juliet Uhegbu, but you can call me OGE. I’m a
                Frontend Developer and WordPress Specialist, who thrive at the
                intersection of design and technology, turning creative ideas
                into fast, accessible, and responsive digital products. With a
                background in Computer Science and a passion for clean, scalable
                code, I bring both structure and creativity to every project. I
                specialize in building web interfaces with HTML, CSS,
                JavaScript, React, and Next.js, and I also help businesses
                unlock the full potential of WordPress through custom themes,
                performance optimization, and user-friendly design. From startup
                landing pages to full-scale websites, I focus on delivering
                seamless user experiences that are as beautiful as they are
                functional. 🔧 Tech Stack: HTML, CSS, JavaScript, React,
                Next.js, WordPress, Git, GitHub 🎓 Background: BSc in Computer
                Science and Informatics 💡 Fun Facts About Me: 🚀 I love space,
                JavaScript, React.js, teamwork, and quality family time. I
                dislike comparison, lateness, and procrastination. 🎯Long-Term
                Goal To become a well-rounded software developer capable of
                building scalable applications that solve real-world problems
                and enhance everyday life. Let’s Connect: I'm always open to
                meaningful collaborations, freelance work, or remote roles that
                challenge me to grow and build impactful web solutions.
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
