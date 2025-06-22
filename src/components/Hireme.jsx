import React from "react";
import hireMe from "../assets/images/hireMe.png";

const Hireme = () => {
  return (
    <section id="hire" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
          Need a frontend developer on your team?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            With experience working on diverse projects, I’m passionate about
            building accessible, inclusive, and user-centered digital solutions
            using HTML, CSS, JavaScript, Git, ReactJS, TypeScript, and Next.js along with soft skills
            like effective communication, teamwork, and a strong sense of
            responsibility. I'm excited about the opportunity to contribute to
            your team and help bring your ideas to life. Let’s connect and
            explore how my skills and experience can add value to your next project.
          </p>
          <a href="#contact">
            <button className="btn-primary mt-10">Say Hello</button>
          </a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
