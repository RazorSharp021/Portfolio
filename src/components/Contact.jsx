import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#002147] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/391b9cee-b56d-4858-a53f-8b4fad427db7"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#EEC373] text-gray-300 mt-9">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Please submit the form below or shoot an
            <span>
              <a
                id="email"
                className="text-[#af8f53]"
                href="mailto:ghafour.reza@gmail.com"
              >
                {" email "}
              </a>
            </span>
            if you are interested or require more information
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#676e88] px-4 py-2 my-8 mx-auto flex items-center rounded">
          Let's Collab!
        </button>
      </form>
    </div>
  );
};

export default Contact;
