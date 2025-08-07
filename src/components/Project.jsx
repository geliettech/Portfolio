import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project_ from "../assets/images/project11.png";
import project__ from "../assets/images/project22.png";
import project from "../assets/images/project.png";
import project2 from "../assets/images/project-2.png";
import project5 from "../assets/images/project-5.png";
import project7 from "../assets/images/Project7.png";
import projectPerson from "../assets/images/projectPerson.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project2,
      name: "My Portfolio",
      github_link:
        "https://github.com/geliettech/Portfolio",
      live_link: "https://uhegbu-ogechi-juliet.vercel.app/",
    },
    {
      img: project__,
      name: "Rest Countries API",
      github_link:
        "https://github.com/geliettech/rest-countries-api-with-color-theme-switcher",
      live_link: "https://rest-countries-api-with-color-theme-switcher-byoge.vercel.app/",
    },
    {
      img: project_,
      name: "Launch Countdown Timer",
      github_link: "https://github.com/geliettech/Launch-Countdown-Timer",
      live_link: "https://launch-countdown-timer-365e6e.netlify.app/",
    },
    {
      img: project7,
      name: "Baby Zoo Quiz",
      github_link: "https://github.com/geliettech/Baby-Zoo-Quiz",
      live_link: "https://baby-zoo-quiz.vercel.app/",
    },
    {
      img: project5,
      name: "Profile Search app",
      github_link: "https://github.com/geliettech/Profile-Search-App",
      live_link: "https://profile-search-app-byoge.vercel.app/",
    },
    {
      img: project,
      name: "Star Wars movies",
      github_link: "https://github.com/geliettech/Star-Wars-franchise/tree/movies",
      live_link: "https://star-wars-movies-byoge.netlify.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
        🚀 My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={projectPerson} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
