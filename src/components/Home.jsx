import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { AiOutlineCloudDownload } from "react-icons/ai";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#002147] ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#EEC373] pb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] pb-4">
          Reza
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          I'm a software developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a graduate full-stack developer with a decent blend of both
          creativity and critical-thinking, ready to dive into the software
          engineering world with full force. I'm also a music producer/DJ
          performing live sets in electronic music events and an aviation
          enthusiast. Let's fly!
        </p>
        <div className="flex flex-row justify-start">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-[#676e88] group px-2 py-2 my-2 flex items-center rounded">
              {" "}
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <Link to="work" smooth={true} duration={500}>
                  <HiArrowNarrowRight className="ml-3" />
                </Link>
              </span>
            </button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1K_ENU2m7q_cVKe-6HDMOoZWKVmjebQDo/view?usp=sharing
              "
            // download="My Resume"
            target="_blank"
          >
            <button className=" ml-2 text-[#676e88] group px-6 py-2 my-2 flex items-center rounded">
              {" "}
              Resume
              {/* <span className="group-hover:animate-bounce"> */}
                {/* <AiOutlineCloudDownload className="ml-3" /> */}
              {/* </span> */}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
