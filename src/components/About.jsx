import React from "react";

const About = () => {
  const info=[
    {text:'Years Experience', count: '04'},
    {text:'Completed Projects', count: '18'},
    {text:'Companies Work', count: '02'},
  ]
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About<span className="text-cyan-600"> Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div>
            <div className="text-gray-300 my-3">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dolor reprehenderit nostrum alias harum odio laborum, unde repellat numquam! Ratione illum expedita quo, assumenda iure similique repellat itaque tempore laudantium.
              </p>
              <div>
                {info.map(content=>(
                  <div key={content.text}>
                    <h3>{content.count}<span>+</span></h3>
                    <span>{content.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
