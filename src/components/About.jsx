import React, { useState } from "react";
import aboutImg from "../assets/images/about.png";


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
  };
  return (
      <p className="text-justify leading-7 md:w-11/12 w-full mx-auto">
          {isReadMore ? text.slice(0, 600) : text}
          <span
              onClick={toggleReadMore}
              className="text-cyan-600 cursor-pointer"
          >
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
                Hi! I'm Uhegbu, Ogechi Juliet (OGE), a Frontend Web Developer, and BSc. Computer
                Scientist and Informatician who derive immense joy from crafting digital
                experiences that come to life on the internet. My journey into
                Frontend web development began in 2020 during my time at the
                university when I joined the Google Developer Student Club (FUO
                Chapter). It was there that I discovered my passion for web
                development by creating a single-page website for my sister's
                cake business. This early project imparted valuable lessons in
                HTML and CSS, sparking an interest that set me on an exciting
                path in the world of web development. In 2022, I had the
                incredible opportunity to enroll in the Frontend Web Development
                track at STUTERN Accelerator Cohort 1.4, courtesy of the
                Afro-Girls scholarship. This year-long program deepened my
                understanding of HTML, Git and GitHub, CSS, JavaScript, and
                ReactJS. Beyond technical skills, the program emphasized soft
                skills such as effective communication and team collaboration.
                Fast-forward to today, I've been fortunate to work in diverse
                environments, ranging from startups to large corporations and
                open-source communities. My primary focus now revolves around
                creating accessible, inclusive products, and digital experiences
                for a wide array of clients.
              </ReadMore>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4x text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="./src/assets/Uhegbu_Ogechi_Juliet_Resume.pdf"
                download
              >
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
