import React from "react";
import JavaScript from "../assets/javascript.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Ruby from "../assets/ruby.png";
import SQL from "../assets/sql.png";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiPostgresql, SiRubyonrails } from 'react-icons/si'

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#002147] text-gray-300 mb-9"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#EEC373]">
            Skills
          </p>
          <p className="py-4">Tech I've worked with for my projects</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] ">
            <SiJavascript size={90} color="#E0E0E0" className="w-20 mx-auto"/>
            {/* <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" /> */}
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] ">
            <FaHtml5 size={90} color="#E0E0E0" className="w-20 mx-auto" />
            {/* <img className="w-20 mx-auto" src={ FaHtml5 } alt="HTML icon" /> */}
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] ">
            <FaCss3Alt size={90} color="#E0E0E0" className="w-20 mx-auto"/>
            {/* <img className="w-20 mx-auto" src={CSS} alt="HTML icon" /> */}
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] ">
            <FaReact size={90} color="#E0E0E0" className="w-20 mx-auto"/>
            {/* <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" /> */}
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] ">
            <FaNodeJs size={90} color="#E0E0E0" className="w-20 mx-auto"/>
            {/* <img className="w-20 mx-auto" src={Node} alt="HTML icon" /> */}
            <p className="my-4">Node </p>
          </div>
          <div className='shadow-md shadow-[#040c16] '>
            <SiRubyonrails size={90} color="#E0E0E0" className="w-20 mx-auto"/>
            {/* <img className='w-20 mx-auto' src={Ruby} alt="HTML icon" /> */}
            <p className='my-4'>Ruby</p>
          </div>
          <div className="shadow-md shadow-[#040c16] ">
            <SiPostgresql size={90} color="#E0E0E0" className="w-20 mx-auto"/>
            {/* <img className="w-20 mx-auto" src={SQL} alt="HTML icon" /> */}
            <p className="my-4">PSQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] '>
            <FaGithub size={90} color="#E0E0E0" className="w-20 mx-auto"/>
            {/* <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" /> */}
            <p className='my-4'>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
