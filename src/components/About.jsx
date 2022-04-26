import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#002147] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#EEC373]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Let's make the world a better place for all.</p>
          </div>
          <div>
            <p>
              I have been producing music for the majority of my time in the
              recent years, which has boosted my technical and problem-solving
              skills. With the help of General Assembly and their dynamic way of
              teaching, I have been able to work on a few projects that has
              given me a decent insight about the software engineering world.
              I'm a great team worker, always packed with fine tunes! :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
